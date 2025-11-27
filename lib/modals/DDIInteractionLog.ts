import mongoose, { Schema, models, model, Document } from 'mongoose';
import { DDIResult } from "@/lib/ddi/ddiTypes";

export interface IDDIInteractionLog extends Document {
  pharmacistId: string;
  pharmacistName: string;
  interaction: DDIResult; // Embedding the DDIResult interface
  decision: "confirm" | "override";
  comment?: string;
  timestamp: Date;
}

const DDIInteractionLogSchema = new Schema<IDDIInteractionLog>({
  pharmacistId: { type: String, required: true },
  pharmacistName: { type: String, required: true },
  interaction: {
    drug1: { type: String, required: true },
    drug2: { type: String, required: true },
    riskLabel: { type: String, required: true },
    yScore: { type: Number, required: true },
    recommendation: { type: String, required: true },
  },
  decision: { type: String, required: true },
  comment: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const DDIInteractionLog = models.DDIInteractionLog || model<IDDIInteractionLog>('DDIInteractionLog', DDIInteractionLogSchema);

export default DDIInteractionLog;
