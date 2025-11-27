import { PrescriptionDrug } from "@/lib/ddi/ddiTypes";
import { ddiDrugData } from "@/lib/ddi/ddiDrugData";
import { standardizeDrugName } from "@/lib/utils/drugStandardizer";

let cachedDrugDictionary: string[] | null = null;

function getKnownDrugNames(): string[] {
  if (cachedDrugDictionary && cachedDrugDictionary.length > 0) {
    return cachedDrugDictionary;
  }

  const names = new Set<string>();

  for (const entry of ddiDrugData) {
    if (entry.Drug1_Name) {
      names.add(entry.Drug1_Name.toLowerCase());
    }
    if (entry.Drug2_Name) {
      names.add(entry.Drug2_Name.toLowerCase());
    }
  }

  cachedDrugDictionary = Array.from(names).sort((a, b) => b.length - a.length);
  return cachedDrugDictionary;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function extractPrescriptionDrugs(text: string): PrescriptionDrug[] {
  if (!text.trim()) {
    return [];
  }

  const dictionary = getKnownDrugNames();
  const normalizedText = text.toLowerCase();
  const foundDrugs: Array<{ name: string; index: number }> = [];

  for (const drugName of dictionary) {
    const escapedName = escapeRegExp(drugName);
    const drugRegex = new RegExp(`\\b${escapedName}\\b`, "gi");
    const matches = normalizedText.matchAll(drugRegex);

    for (const match of matches) {
      if (typeof match.index === "number") {
        foundDrugs.push({
          name: drugName,
          index: match.index,
        });
      }
    }
  }

  foundDrugs.sort((a, b) => a.index - b.index);

  const uniqueDrugNames: string[] = [];
  for (const foundDrug of foundDrugs) {
    const standardized = standardizeDrugName(foundDrug.name);
    const key = standardized.toLowerCase();

    if (!uniqueDrugNames.some((name) => name.toLowerCase() === key)) {
      uniqueDrugNames.push(standardized);
    }

    if (uniqueDrugNames.length === 2) {
      break;
    }
  }

  return uniqueDrugNames.map((name) => ({
    name,
    dosage: "unspecified dose",
    frequency: "unspecified frequency",
  }));
}


