import { getDDIFeatures } from "@/lib/ddi/ddiFeatures";
import { DDIResult } from "@/lib/ddi/ddiTypes";

/**
 * Random Forest Model Prediction
 * Provides stability and handles feature interactions well
 */
export async function predictWithRandomForest(
  drug1: string,
  drug2: string,
  features: {
    Chem_Sim: number;
    Same_Enzyme: number;
    SideEffect_Sim: number;
    Shared_Targets: number;
    ATC_Similarity: number;
  }
): Promise<{ probability: number; riskLabel: string }> {
  console.log(`[Random Forest] Predicting for ${drug1} + ${drug2}`);
  
  // Simulate Random Forest prediction logic
  // In a real implementation, this would use a trained scikit-learn or similar model
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate processing time

  // Random Forest tends to be more conservative and stable
  // Using ensemble-based logic
  let riskScore = 0.0;

  // Weighted feature importance (as RF would compute)
  const featureImportance = {
    Same_Enzyme: 0.3,
    SideEffect_Sim: 0.25,
    Chem_Sim: 0.2,
    Shared_Targets: 0.15,
    ATC_Similarity: 0.1,
  };

  riskScore += features.Same_Enzyme * featureImportance.Same_Enzyme * 2.0; // Strong indicator
  riskScore += features.SideEffect_Sim * featureImportance.SideEffect_Sim * 1.5;
  riskScore += features.Chem_Sim * featureImportance.Chem_Sim;
  riskScore += Math.min(features.Shared_Targets / 5, 1) * featureImportance.Shared_Targets;
  riskScore += features.ATC_Similarity * featureImportance.ATC_Similarity;

  // Add some randomness to simulate ensemble variation
  const ensembleVariation = (Math.random() - 0.5) * 0.1;
  riskScore = Math.max(0, Math.min(1, riskScore + ensembleVariation));

  // Determine risk label based on probability
  let riskLabel: string;
  if (riskScore >= 0.7) {
    riskLabel = "High Risk";
  } else if (riskScore >= 0.4) {
    riskLabel = "Moderate Risk";
  } else {
    riskLabel = "Low Risk";
  }

  return {
    probability: parseFloat(riskScore.toFixed(4)),
    riskLabel,
  };
}

/**
 * XGBoost Model Prediction
 * Provides precision and handles imbalances and missing values well
 */
export async function predictWithXGBoost(
  drug1: string,
  drug2: string,
  features: {
    Chem_Sim: number;
    Same_Enzyme: number;
    SideEffect_Sim: number;
    Shared_Targets: number;
    ATC_Similarity: number;
  }
): Promise<{ probability: number; riskLabel: string }> {
  console.log(`[XGBoost] Predicting for ${drug1} + ${drug2}`);
  
  // Simulate XGBoost prediction logic
  // In a real implementation, this would use a trained XGBoost model (via Python service or JS library)
  await new Promise(resolve => setTimeout(resolve, 400)); // Simulate processing time

  // XGBoost uses gradient boosting with more aggressive feature interactions
  // More sensitive to feature combinations
  let riskScore = 0.0;

  // XGBoost handles non-linear interactions better
  // More aggressive weighting on critical features
  const baseScore = 0.05; // Base risk

  // Same Enzyme is a strong indicator (exponential boost)
  if (features.Same_Enzyme === 1) {
    riskScore += 0.4; // Strong boost
    // Interaction with side effect similarity
    riskScore += features.SideEffect_Sim * 0.3;
  }

  // Side effect similarity with threshold
  if (features.SideEffect_Sim > 0.6) {
    riskScore += 0.25;
  } else {
    riskScore += features.SideEffect_Sim * 0.15;
  }

  // Chemical similarity (quadratic relationship)
  riskScore += Math.pow(features.Chem_Sim, 1.5) * 0.2;

  // Shared targets (logarithmic scaling)
  if (features.Shared_Targets > 0) {
    riskScore += Math.log(features.Shared_Targets + 1) * 0.1;
  }

  // ATC similarity
  riskScore += features.ATC_Similarity * 0.1;

  // Add base score
  riskScore += baseScore;

  // XGBoost can be more precise, so less variation
  const boostingVariation = (Math.random() - 0.5) * 0.05;
  riskScore = Math.max(0, Math.min(1, riskScore + boostingVariation));

  // Determine risk label (XGBoost might be slightly more aggressive)
  let riskLabel: string;
  if (riskScore >= 0.65) {
    riskLabel = "High Risk";
  } else if (riskScore >= 0.35) {
    riskLabel = "Moderate Risk";
  } else {
    riskLabel = "Low Risk";
  }

  return {
    probability: parseFloat(riskScore.toFixed(4)),
    riskLabel,
  };
}

/**
 * Hybrid Model Prediction
 * Combines Random Forest (stability) and XGBoost (precision) using weighted average
 * Final_Pred = 0.6 * RF_Prob + 0.4 * XGB_Prob
 */
export async function predictWithHybridModel(
  drug1: string,
  drug2: string
): Promise<DDIResult | null> {
  console.log(`[Hybrid Model] Predicting for ${drug1} + ${drug2}`);

  // Get features for both models
  const features = getDDIFeatures(drug1, drug2);

  // Get predictions from both models in parallel for efficiency
  const [rfPrediction, xgbPrediction] = await Promise.all([
    predictWithRandomForest(drug1, drug2, features),
    predictWithXGBoost(drug1, drug2, features),
  ]);

  console.log(`[Hybrid] RF Probability: ${rfPrediction.probability}, Label: ${rfPrediction.riskLabel}`);
  console.log(`[Hybrid] XGB Probability: ${xgbPrediction.probability}, Label: ${xgbPrediction.riskLabel}`);

  // Weighted average: 0.6 * RF + 0.4 * XGB
  const RF_WEIGHT = 0.6;
  const XGB_WEIGHT = 0.4;

  const finalProbability =
    RF_WEIGHT * rfPrediction.probability + XGB_WEIGHT * xgbPrediction.probability;

  console.log(`[Hybrid] Final Combined Probability: ${finalProbability.toFixed(4)}`);

  // Determine final risk label based on combined probability
  let riskLabel: string;
  let recommendation: string;

  if (finalProbability >= 0.7) {
    riskLabel = "High Risk";
    recommendation = "Avoid combination or consult a doctor immediately. High risk of adverse interactions.";
  } else if (finalProbability >= 0.4) {
    riskLabel = "Moderate Risk";
    recommendation = "Monitor patient closely for potential adverse effects. Consider dosage adjustment or alternative medications.";
  } else {
    riskLabel = "Low Risk";
    recommendation = "No specific action needed, generally safe combination. Continue monitoring as usual.";
  }

  const finalProbabilityRounded = parseFloat(finalProbability.toFixed(4));

  return {
    drug1,
    drug2,
    riskLabel,
    yScore: finalProbabilityRounded,
    recommendation,
    modelDetails: {
      strategy: "hybrid",
      randomForestProbability: rfPrediction.probability,
      xgboostProbability: xgbPrediction.probability,
      finalProbability: finalProbabilityRounded,
    },
  };
}

