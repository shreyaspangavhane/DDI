import { ddiDrugData } from "@/lib/ddi/ddiDrugData";
import { standardizeDrugName } from "@/lib/utils/drugStandardizer";
import { DDIResult } from "@/lib/ddi/ddiTypes";

function getRecommendationFromRiskLabel(riskLabel: string): string {
  switch (riskLabel) {
    case "Low Risk":
      return "No specific action needed, generally safe combination.";
    case "Moderate Risk":
      return "Monitor patient closely for potential adverse effects.";
    case "High Risk":
      return "Avoid combination or consult a doctor immediately.";
    default:
      return "Further evaluation recommended.";
  }
}

export function getRuleBasedDDI(drug1: string, drug2: string): DDIResult | null {
  const normalizedDrug1 = standardizeDrugName(drug1);
  const normalizedDrug2 = standardizeDrugName(drug2);

  for (const interaction of ddiDrugData) {
    const dataDrug1 = standardizeDrugName(interaction.Drug1_Name);
    const dataDrug2 = standardizeDrugName(interaction.Drug2_Name);

    // Check for both (drug1, drug2) and (drug2, drug1) combinations
    if ((dataDrug1 === normalizedDrug1 && dataDrug2 === normalizedDrug2) ||
        (dataDrug1 === normalizedDrug2 && dataDrug2 === normalizedDrug1)) {
      return {
        drug1,
        drug2,
        riskLabel: interaction.Risk_Label,
        yScore: interaction.Y_Score,
        recommendation: getRecommendationFromRiskLabel(interaction.Risk_Label),
        modelDetails: {
          strategy: "rule-based",
          finalProbability: interaction.Y_Score,
        },
      };
    }
  }
  return null;
}
