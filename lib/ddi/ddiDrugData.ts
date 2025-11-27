import { DrugInteraction } from "./ddiTypes";
import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync'; // Using named import instead of default

export const ddiDrugData: DrugInteraction[] = [];

const loadDdiData = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "drug_interactions.csv");
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const records = parse(fileContent, {
      columns: true, // Treat first row as column headers
      skip_empty_lines: true,
    });

    // Clear existing data and populate with parsed records
    ddiDrugData.splice(0, ddiDrugData.length, ...records.map((record: any) => ({
      Drug1_Name: record.Drug1_Name,
      Drug2_Name: record.Drug2_Name,
      Chem_Sim: parseFloat(record.Chem_Sim),
      Same_Enzyme: parseInt(record.Same_Enzyme, 10),
      SideEffect_Sim: parseFloat(record.SideEffect_Sim),
      Shared_Targets: parseInt(record.Shared_Targets, 10),
      ATC_Similarity: parseFloat(record.ATC_Similarity),
      Risk_Label: record.Risk_Label,
      Y_Score: parseFloat(record.Y_Score),
    })));
    console.log(`Loaded ${ddiDrugData.length} drug interactions from CSV.`);
  } catch (error) {
    console.error("Failed to load DDI data from CSV:", error);
  }
};

// Load data when the module is initialized (server-side)
if (typeof window === 'undefined') {
  // Ensure this only runs on the server
  loadDdiData();
}

// You might want to add a function here to load and parse the CSV data
// dynamically on the server-side, or pre-process it into this file.
// For now, this array serves as a hardcoded representation.
