export interface DrugInteraction {
  Drug1_Name: string;
  Drug2_Name: string;
  Chem_Sim: number;
  Same_Enzyme: number; // 0 or 1
  SideEffect_Sim: number;
  Shared_Targets: number;
  ATC_Similarity: number;
  Risk_Label: string; // e.g., "Low Risk", "Moderate Risk", "High Risk"
  Y_Score: number; // Probability or score
}

export interface PrescriptionDrug {
  name: string;
  dosage: string;
  frequency: string;
}

export type InteractionStrategy = "rule-based" | "hybrid";

export interface InteractionModelDetails {
  strategy: InteractionStrategy;
  finalProbability: number;
  randomForestProbability?: number;
  xgboostProbability?: number;
}

export interface DDIResult {
  drug1: string;
  drug2: string;
  riskLabel: string;
  yScore: number;
  recommendation: string;
  modelDetails?: InteractionModelDetails;
}
