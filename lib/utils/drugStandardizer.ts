import { ddiDrugData } from "@/lib/ddi/ddiDrugData";

// Cache for drug names dictionary
let cachedDrugNames: string[] | null = null;

function getDrugNamesDictionary(): string[] {
  if (cachedDrugNames && cachedDrugNames.length > 0) {
    return cachedDrugNames;
  }

  const namesSet = new Set<string>();

  // Extract all unique drug names from the dataset
  for (const interaction of ddiDrugData) {
    if (interaction.Drug1_Name) {
      namesSet.add(interaction.Drug1_Name);
    }
    if (interaction.Drug2_Name) {
      namesSet.add(interaction.Drug2_Name);
    }
  }

  cachedDrugNames = Array.from(namesSet);
  return cachedDrugNames;
}

// Simple fuzzy matching function (Levenshtein-like similarity)
function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

// Simple Levenshtein distance implementation
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

function fuzzySearchDrugName(inputName: string, threshold: number = 0.6): string | null {
  const drugNames = getDrugNamesDictionary();
  const lowerInput = inputName.toLowerCase();
  
  let bestMatch: string | null = null;
  let bestScore = 0;
  
  for (const drugName of drugNames) {
    const similarity = calculateSimilarity(lowerInput, drugName.toLowerCase());
    
    if (similarity > bestScore && similarity >= threshold) {
      bestScore = similarity;
      bestMatch = drugName;
    }
  }
  
  return bestMatch;
}

/**
 * Standardizes drug names using fuzzy matching
 * Handles typos, case variations, and brand name to generic name conversions
 */
export function standardizeDrugName(inputName: string): string {
  if (!inputName || typeof inputName !== 'string') {
    return inputName;
  }

  const trimmedName = inputName.trim();
  if (!trimmedName) {
    return inputName;
  }

  const lowerInputName = trimmedName.toLowerCase();

  // Step 1: Try exact match first (fastest)
  const drugNames = getDrugNamesDictionary();
  for (const drugName of drugNames) {
    if (drugName.toLowerCase() === lowerInputName) {
      return drugName; // Return original casing from dataset
    }
  }

  // Step 2: Try partial/exact substring match (for compound names like "Sacubitril; Valsartan")
  for (const drugName of drugNames) {
    const lowerDrugName = drugName.toLowerCase();
    
    // Check if input is part of drug name or vice versa
    if (lowerDrugName.includes(lowerInputName) || lowerInputName.includes(lowerDrugName)) {
      // Prefer longer matches (more specific)
      if (lowerDrugName.length >= lowerInputName.length) {
        return drugName;
      }
    }
  }

  // Step 3: Use fuzzy matching for typos and variations
  const fuzzyMatch = fuzzySearchDrugName(trimmedName, 0.6); // 60% similarity threshold

  if (fuzzyMatch) {
    return fuzzyMatch; // Return the matched drug name from dataset
  }

  // Step 4: Handle common misspellings and variations
  const commonVariations: Record<string, string> = {
    "paracetmol": "Paracetamol",
    "paracetemol": "Paracetamol",
    "acetaminophen": "Acetaminophen",
    "ibuprufen": "Ibuprofen",
    "aspirine": "Aspirin",
    "warrfarin": "Warfarin",
    "warfarrin": "Warfarin",
  };

  const lowerVariation = lowerInputName;
  if (commonVariations[lowerVariation]) {
    // Check if the variation exists in the dataset
    const variationExists = drugNames.some(name => 
      name.toLowerCase() === commonVariations[lowerVariation].toLowerCase()
    );
    if (variationExists) {
      return commonVariations[lowerVariation];
    }
  }

  // Step 5: Fallback - return capitalized version if no match found
  // This preserves the input but standardizes the casing
  return trimmedName
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
