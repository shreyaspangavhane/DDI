import connect from "@/lib/mongodb";
import DDIInteractionLog from "@/lib/modals/DDIInteractionLog"; // Will be created next
import { DDIResult } from "@/lib/ddi/ddiTypes";

export interface PharmacistDecision {
  pharmacistId: string;
  pharmacistName: string;
  interaction: DDIResult;
  decision: "confirm" | "override";
  comment?: string;
  timestamp: Date;
}

export async function logDDIInteraction(decisionData: PharmacistDecision) {
  try {
    await connect();

    const newLog = await DDIInteractionLog.create(decisionData);
    console.log("DDI interaction logged successfully:", newLog);
    return JSON.parse(JSON.stringify(newLog));
  } catch (error) {
    console.error("Error logging DDI interaction:", error);
    throw new Error("Failed to log DDI interaction.");
  }
}
