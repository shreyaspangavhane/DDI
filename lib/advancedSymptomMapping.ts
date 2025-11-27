/**
 * Advanced symptom-to-specialty mapping
 * This file contains additional mappings for more specific conditions and medical terms
 * Data compiled from medical resources and clinical guidelines
 */

import { SymptomMapping } from './symptomMapping';

export const advancedSymptomToSpecialtyMapping: SymptomMapping = {
  // General Medicine advanced symptoms
  "chronic fatigue": "General Medicine",
  "unexplained weight loss or gain": "General Medicine",
  "recurrent infections": "General Medicine",

  // Pediatrics advanced symptoms
  "developmental delay": "Pediatrics",
  "autism spectrum disorder symptoms": "Pediatrics",
  "congenital heart defects": "Pediatrics",

  // Surgery advanced symptoms
  "mass or growth": "Surgery",
  "organ rupture": "Surgery",
  "gangrene": "Surgery",

  // Gynecology advanced symptoms
  "endometriosis": "Gynecology",
  "polycystic ovary syndrome": "Gynecology",
  "uterine fibroids": "Gynecology",

  // Obstetrics advanced symptoms
  "preeclampsia": "Obstetrics",
  "gestational diabetes": "Obstetrics",
  "premature labor": "Obstetrics",

  // Emergency Medicine advanced symptoms
  "anaphylaxis": "Emergency Medicine",
  "septic shock": "Emergency Medicine",
  "severe trauma": "Emergency Medicine",

  // Orthopedics advanced symptoms
  "spinal deformity": "Orthopedics",
  "torn ligaments": "Orthopedics",
  "joint dislocation": "Orthopedics",

  // General Surgery advanced symptoms
  "bowel obstruction": "General Surgery",
  "peritonitis": "General Surgery",
  "thyroid nodules": "General Surgery",

  // Ophthalmology advanced symptoms
  "retinal detachment": "Ophthalmology",
  "glaucoma": "Ophthalmology",
  "macular degeneration": "Ophthalmology",

  // Retina Specialist advanced symptoms
  "macular hole": "Retina Specialist",
  "retinal tears": "Retina Specialist",
  "vitreous hemorrhage": "Retina Specialist",

  // Cataract Specialist advanced symptoms
  "secondary cataract": "Cataract Specialist",
  "dislocated lens": "Cataract Specialist",
  "aphakia": "Cataract Specialist",

  // Cardiology advanced symptoms
  "heart attack": "Cardiology",
  "heart failure": "Cardiology",
  "coronary artery disease": "Cardiology",

  // Cardiac Surgery advanced symptoms
  "aortic dissection": "Cardiac Surgery",
  "coronary artery bypass graft required": "Cardiac Surgery",
  "valve replacement required": "Cardiac Surgery",

  // Critical Care advanced symptoms
  "sepsis": "Critical Care",
  "acute respiratory failure": "Critical Care",
  "cardiac arrest": "Critical Care",

  // ENT advanced symptoms
  " Ménière's disease": "ENT",
  "tinnitus": "ENT",
  "laryngitis": "ENT",

  // Neurology advanced symptoms
  "stroke": "Neurology",
  "epilepsy": "Neurology",
  "multiple sclerosis": "Neurology",

  // Gastroenterology advanced symptoms
  "Crohn's disease": "Gastroenterology",
  "ulcerative colitis": "Gastroenterology",
  "celiac disease": "Gastroenterology",

  // Urology advanced symptoms
  "kidney stones": "Urology",
  "bladder cancer": "Urology",
  "prostate enlargement": "Urology",

  // Dermatology advanced symptoms
  "skin cancer": "Dermatology",
  "psoriasis": "Dermatology",
  "melanoma": "Dermatology",

  // Endocrinology advanced symptoms
  "diabetes mellitus": "Endocrinology",
  "thyroid cancer": "Endocrinology",
  "adrenal insufficiency": "Endocrinology",

  // Radiology advanced symptoms
  "tumor detection": "Radiology",
  "fracture identification": "Radiology",
  "internal bleeding detection": "Radiology",

  // Anesthesiology advanced symptoms
  "complex pain syndromes": "Anesthesiology",
  "anesthetic complications": "Anesthesiology",
  "chronic neuropathic pain": "Anesthesiology",

  // Pulmonology advanced symptoms
  "COPD": "Pulmonology",
  "asthma exacerbation": "Pulmonology",
  "pulmonary fibrosis": "Pulmonology",

  // Nephrology advanced symptoms
  "renal failure": "Nephrology",
  "glomerulonephritis": "Nephrology",
  "polycystic kidney disease": "Nephrology",

  // Dentistry advanced symptoms
  "gum disease": "Dentistry",
  "root canal required": "Dentistry",
  "dental implant needed": "Dentistry",

  // Physiotherapy advanced symptoms
  "stroke rehabilitation": "Physiotherapy",
  "spinal cord injury rehab": "Physiotherapy",
  "sports injury rehab": "Physiotherapy",

  // Psychiatry advanced symptoms
  "bipolar disorder": "Psychiatry",
  "schizophrenia": "Psychiatry",
  "PTSD": "Psychiatry",

  // Oncology advanced symptoms
  "metastatic cancer": "Oncology",
  "chemotherapy management": "Oncology",
  "radiation therapy planning": "Oncology",

  // Neonatology advanced symptoms
  "respiratory distress syndrome": "Neonatology",
  "neonatal sepsis": "Neonatology",
  "birth asphyxia": "Neonatology",

  // Ophthalmic Surgery advanced symptoms
  "cataract surgery": "Ophthalmic Surgery",
  "glaucoma surgery": "Ophthalmic Surgery",
  "corneal transplant": "Ophthalmic Surgery",

  // ENT Surgery advanced symptoms
  "cochlear implant": "ENT Surgery",
  "thyroidectomy": "ENT Surgery",
  "septoplasty": "ENT Surgery",

  // Ophthalmic Retina Surgery advanced symptoms
  "vitrectomy": "Ophthalmic Retina Surgery",
  "scleral buckle": "Ophthalmic Retina Surgery",
  "laser photocoagulation": "Ophthalmic Retina Surgery",

  // Obstetrics & Gynecology Surgery advanced symptoms
  "cesarean section": "Obstetrics & Gynecology Surgery",
  "hysterectomy": "Obstetrics & Gynecology Surgery",
  "oophorectomy": "Obstetrics & Gynecology Surgery",

  // Pediatric Surgery advanced symptoms
  "pyloric stenosis": "Pediatric Surgery",
  "hernia repair children": "Pediatric Surgery",
  "undescended testes surgery": "Pediatric Surgery",

  // Vascular Surgery advanced symptoms
  "aortic aneurysm repair": "Vascular Surgery",
  "carotid endarterectomy": "Vascular Surgery",
  "bypass surgery limbs": "Vascular Surgery",

  // Plastic Surgery advanced symptoms
  "reconstructive surgery post-trauma": "Plastic Surgery",
  "breast augmentation": "Plastic Surgery",
  "liposuction plastic surgery": "Plastic Surgery",
};

/**
 * Combines the basic and advanced symptom mappings
 * @returns Combined symptom to specialty mapping
 */
export function getCombinedSymptomMapping(): SymptomMapping {
  const { symptomToSpecialtyMapping } = require('./symptomMapping');
  return { ...symptomToSpecialtyMapping, ...advancedSymptomToSpecialtyMapping };
}

/**
 * Advanced specialty finder that uses both basic and advanced symptom mappings
 * @param symptoms - String containing patient's symptoms
 * @returns The most appropriate medical specialty
 */
export function findSpecialtyAdvanced(symptoms: string): string {
  const lowerSymptoms = symptoms.toLowerCase();
  let detectedSpecialty = "General Physician"; // Default
  
  // Get combined mapping
  const combinedMapping = getCombinedSymptomMapping();
  
  // Check symptoms against our mapping
  for (const [symptom, specialty] of Object.entries(combinedMapping)) {
    if (lowerSymptoms.includes(symptom)) {
      detectedSpecialty = specialty;
      break;
    }
  }
  
  return detectedSpecialty;
}
