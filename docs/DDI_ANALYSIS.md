# Drug-Drug Interaction (DDI) Analysis Documentation

## Overview

The DDI analysis system uses a hybrid approach combining rule-based knowledge graphs with machine learning models to predict drug-drug interactions accurately.

## Architecture

### Two-Tier System

```
┌─────────────────────────────────────┐
│   Prescription Input                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   Drug Extraction                   │
│   (Dataset Whitelist Only)          │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   Rule-Based Lookup                 │
│   (Curated Database)                │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   Found?        Not Found?
        │             │
        │             ▼
        │    ┌────────────────────┐
        │    │ Hybrid ML Model     │
        │    │ (RF + XGBoost)      │
        │    └────────────────────┘
        │             │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │   Results   │
        └─────────────┘
```

## Rule-Based System

### Implementation
- **File**: `lib/ddi/ddiRules.ts`
- **Data Source**: `data/drug_interactions.csv`
- **Method**: Direct database lookup

### Process
1. Standardize drug names using `drugStandardizer.ts`
2. Search database for exact or reverse pair match
3. Return stored risk label and score if found

### Advantages
- Fast response time
- High accuracy for known interactions
- No computation required

## Hybrid ML Model

### Model Components

#### 1. Random Forest (60% Weight)
- **Purpose**: Stability and ensemble robustness
- **File**: `lib/ddi/mlModels.ts` → `predictWithRandomForest()`
- **Features Used**:
  - Same_Enzyme (30% importance)
  - SideEffect_Sim (25% importance)
  - Chem_Sim (20% importance)
  - Shared_Targets (15% importance)
  - ATC_Similarity (10% importance)

#### 2. XGBoost (40% Weight)
- **Purpose**: Precision and feature interaction handling
- **File**: `lib/ddi/mlModels.ts` → `predictWithXGBoost()`
- **Features Used**: Same as RF but with different weighting
- **Special Handling**:
  - Exponential boost for Same_Enzyme = 1
  - Quadratic relationship for Chem_Sim
  - Logarithmic scaling for Shared_Targets

### Feature Extraction

**File**: `lib/ddi/ddiFeatures.ts`

#### Features Calculated

1. **Chemical Similarity (Chem_Sim)**
   - Range: 0.0 - 1.0
   - Measures structural similarity

2. **Side Effect Similarity (SideEffect_Sim)**
   - Range: 0.0 - 1.0
   - Compares side effect profiles

3. **Same Enzyme (Same_Enzyme)**
   - Binary: 0 or 1
   - Indicates shared metabolic pathways

4. **Shared Targets (Shared_Targets)**
   - Integer count
   - Number of common biological targets

5. **ATC Similarity (ATC_Similarity)**
   - Range: 0.0 - 1.0
   - Therapeutic classification similarity

### Prediction Formula

```javascript
// Step 1: Get individual predictions
rf_prob = predictWithRandomForest(drug1, drug2, features)
xgb_prob = predictWithXGBoost(drug1, drug2, features)

// Step 2: Weighted average
final_prob = 0.6 × rf_prob + 0.4 × xgb_prob

// Step 3: Risk classification
if (final_prob >= 0.7) → High Risk
else if (final_prob >= 0.4) → Moderate Risk
else → Low Risk
```

## Risk Classification

### Thresholds

| Risk Level | Score Range | Recommendation |
|------------|-------------|----------------|
| **Low Risk** | < 0.4 | Generally safe, continue monitoring |
| **Moderate Risk** | 0.4 - 0.7 | Monitor closely, consider alternatives |
| **High Risk** | ≥ 0.7 | Avoid combination, consult doctor |

### Output Format

```typescript
interface DDIResult {
  drug1: string;
  drug2: string;
  riskLabel: "Low Risk" | "Moderate Risk" | "High Risk";
  yScore: number; // 0.0 - 1.0
  recommendation: string;
  modelDetails?: {
    strategy: "rule-based" | "hybrid";
    randomForestProbability?: number;
    xgboostProbability?: number;
    finalProbability?: number;
  };
}
```

## Drug Extraction

### Process

**File**: `lib/utils/prescriptionParser.ts`

1. **Build Drug Dictionary**
   - Load all unique drug names from `ddiDrugData`
   - Sort by length (longest first) for better matching

2. **Text Scanning**
   - Convert text to lowercase
   - Use regex to find drug names with word boundaries
   - Track position in text for ordering

3. **Standardization**
   - Use `drugStandardizer.ts` to normalize names
   - Handle common misspellings
   - Remove duplicates

4. **Output**
   - Return first two unique drugs found
   - Format: `{ name, dosage, frequency }`

### Extraction Rules

- ✅ Only extracts drugs in dataset
- ✅ Ignores dosage, frequency, instructions
- ✅ Handles OCR errors and misspellings
- ✅ Maintains order of appearance
- ❌ Does NOT extract non-dataset drugs
- ❌ Does NOT generate risk predictions

## API Endpoint

### POST `/api/ddi-detection`

**Request:**
```json
{
  "prescriptionText": "Take Memantine 10mg daily with Torsemide 20mg"
}
```

**Response:**
```json
{
  "extractedDrugs": [
    {
      "name": "Memantine",
      "dosage": "unspecified dose",
      "frequency": "unspecified frequency"
    },
    {
      "name": "Torsemide",
      "dosage": "unspecified dose",
      "frequency": "unspecified frequency"
    }
  ],
  "ddiResults": [
    {
      "drug1": "Memantine",
      "drug2": "Torsemide",
      "riskLabel": "High Risk",
      "yScore": 0.82,
      "recommendation": "Avoid combination or consult a doctor immediately.",
      "modelDetails": {
        "strategy": "hybrid",
        "randomForestProbability": 0.78,
        "xgboostProbability": 0.88,
        "finalProbability": 0.82
      }
    }
  ]
}
```

## Performance Considerations

### Optimization Strategies

1. **Caching**
   - Drug dictionary cached after first load
   - Reduces repeated database scans

2. **Parallel Processing**
   - RF and XGBoost predictions run in parallel
   - Uses `Promise.all()` for efficiency

3. **Early Exit**
   - Rule-based lookup stops at first match
   - ML model only runs if rule-based fails

4. **Normalization**
   - All probabilities normalized to 0-1 range
   - Prevents display of invalid scores (>1.0)

## Future Enhancements

1. **Real ML Models**
   - Replace simulated models with trained scikit-learn/XGBoost models
   - Deploy via Python service or ONNX runtime

2. **Fuzzy Matching**
   - Improve drug name matching for OCR errors
   - Use Levenshtein distance or phonetic matching

3. **Feature Expansion**
   - Add more biological features
   - Include patient-specific factors

4. **Model Retraining**
   - Periodic retraining with new interaction data
   - A/B testing of different weight combinations

## Testing

### Test Cases

1. **Known Interactions**
   - Verify rule-based system returns correct risk
   - Test with pairs from database

2. **Unknown Interactions**
   - Verify hybrid model activates
   - Check probability normalization

3. **Edge Cases**
   - Single drug in prescription
   - No valid drugs found
   - Invalid drug names

## Troubleshooting

### Common Issues

1. **No drugs extracted**
   - Check if drugs exist in dataset
   - Verify drug name spelling
   - Check OCR text quality

2. **Incorrect risk level**
   - Verify feature calculation
   - Check model probability normalization
   - Review threshold values

3. **Slow performance**
   - Check database size
   - Verify caching is working
   - Review parallel processing

