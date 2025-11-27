import { NextResponse } from 'next/server';
import { DDIResult, PrescriptionDrug } from "@/lib/ddi/ddiTypes";
import { getRuleBasedDDI } from "@/lib/ddi/ddiRules";
import { predictWithHybridModel } from "@/lib/ddi/mlModels";
import { extractPrescriptionDrugs } from "@/lib/utils/prescriptionParser";

export async function POST(request: Request) {
  try {
    const { prescriptionText } = await request.json();

    if (!prescriptionText) {
      return NextResponse.json({ error: "No prescription text provided" }, { status: 400 });
    }

    // Use the proper prescription parser to extract drugs from the dataset
    const extractedDrugs = extractPrescriptionDrugs(prescriptionText);

    if (extractedDrugs.length === 0) {
      return NextResponse.json({ 
        error: "No drugs could be extracted from the prescription text. Please ensure drug names are clearly mentioned.",
        extractedDrugs: [],
        ddiResults: []
      }, { status: 400 });
    }

    const ddiResults: DDIResult[] = [];

    // Check all drug pairs for interactions
    for (let i = 0; i < extractedDrugs.length; i++) {
      for (let j = i + 1; j < extractedDrugs.length; j++) {
        const drug1 = extractedDrugs[i].name;
        const drug2 = extractedDrugs[j].name;

        // Step 1: Check rule-based system first (faster, more accurate for known interactions)
        let interactionResult = getRuleBasedDDI(drug1, drug2);

        if (interactionResult) {
          // Known interaction found in database
          ddiResults.push(interactionResult);
        } else {
          // Step 2: Use hybrid ML model (Random Forest + XGBoost) for unknown interactions
          const mlPrediction = await predictWithHybridModel(drug1, drug2);
          if (mlPrediction) {
            ddiResults.push(mlPrediction);
          }
        }
      }
    }

    return NextResponse.json({ extractedDrugs, ddiResults }, { status: 200 });
  } catch (error: any) {
    console.error("Error in DDI detection API route:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
