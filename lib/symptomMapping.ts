/**
 * Comprehensive symptom-to-specialty mapping
 * This file contains an extensive mapping of medical symptoms to appropriate medical specialties
 * Data compiled from medical resources and clinical guidelines
 */

export interface SymptomMapping {
    [symptom: string]: string;
  }
  
  export const symptomToSpecialtyMapping: SymptomMapping = {
    // General Medicine symptoms
    "fever": "General Medicine",
    "fatigue": "General Medicine",
    "body aches": "General Medicine",
    "infections": "General Medicine",
    "headaches": "General Medicine",
    "digestive issues": "General Medicine",

    // Pediatrics symptoms
    "child fever": "Pediatrics",
    "cough": "Pediatrics",
    "cold": "Pediatrics",
    "vomiting": "Pediatrics",
    "diarrhea": "Pediatrics",
    "rashes": "Pediatrics",
    "growth concerns": "Pediatrics",

    // Surgery symptoms
    "pain": "Surgery",
    "swelling": "Surgery",
    "injury": "Surgery",
    "abnormal lumps": "Surgery",
    "internal bleeding": "Surgery",

    // Gynecology symptoms
    "irregular periods": "Gynecology",
    "pelvic pain": "Gynecology",
    "abnormal discharge": "Gynecology",
    "infertility issues": "Gynecology",

    // Obstetrics symptoms
    "pregnancy nausea": "Obstetrics",
    "pregnancy swelling": "Obstetrics",
    "fetal movement issues": "Obstetrics",
    "high blood pressure during pregnancy": "Obstetrics",

    // Emergency Medicine symptoms
    "trauma": "Emergency Medicine",
    "severe pain": "Emergency Medicine",
    "accidents": "Emergency Medicine",
    "sudden chest pain": "Emergency Medicine",
    "unconsciousness": "Emergency Medicine",

    // Orthopedics symptoms
    "bone pain": "Orthopedics",
    "fractures": "Orthopedics",
    "joint pain": "Orthopedics",
    "limited mobility": "Orthopedics",

    // General Surgery symptoms
    "abdominal pain": "General Surgery",
    "hernia": "General Surgery",
    "appendicitis": "General Surgery",
    "lumps": "General Surgery",
    "bleeding": "General Surgery",
    
    // Ophthalmology symptoms
    "blurred vision": "Ophthalmology",
    "eye pain": "Ophthalmology",
    "redness": "Ophthalmology",
    "watering eyes": "Ophthalmology",
    "floaters": "Ophthalmology",

    // Retina Specialist symptoms
    "vision loss": "Retina Specialist",
    "flashes": "Retina Specialist",
    "diabetic retinopathy symptoms": "Retina Specialist",

    // Cataract Specialist symptoms
    "cloudy vision": "Cataract Specialist",
    "difficulty seeing at night": "Cataract Specialist",
    "glare": "Cataract Specialist",
    "fading colors": "Cataract Specialist",

    // Cardiology symptoms
    "chest pain": "Cardiology",
    "palpitations": "Cardiology",
    "shortness of breath": "Cardiology",
    "cardiac fatigue": "Cardiology",

    // Cardiac Surgery symptoms
    "heart failure symptoms": "Cardiac Surgery",
    "severe chest pain": "Cardiac Surgery",
    "arrhythmia": "Cardiac Surgery",

    // Critical Care symptoms
    "multi-organ dysfunction": "Critical Care",
    "severe infections": "Critical Care",
    "respiratory distress": "Critical Care",

    // ENT symptoms
    "ear pain": "ENT",
    "hearing loss": "ENT",
    "sore throat": "ENT",
    "sinusitis": "ENT",
    "nosebleeds": "ENT",

    // Neurology symptoms
    "headaches": "Neurology",
    "seizures": "Neurology",
    "dizziness": "Neurology",
    "numbness": "Neurology",
    "memory issues": "Neurology",

    // Gastroenterology symptoms
    "abdominal pain digestive": "Gastroenterology",
    "constipation": "Gastroenterology",
    "diarrhea": "Gastroenterology",
    "bloating": "Gastroenterology",
    "heartburn": "Gastroenterology",
    
    // Urology symptoms
    "painful urination": "Urology",
    "blood in urine": "Urology",
    "frequent urination": "Urology",
    "kidney pain": "Urology",

    // Dermatology symptoms
    "skin rashes": "Dermatology",
    "itching": "Dermatology",
    "acne": "Dermatology",
    "eczema": "Dermatology",
    "skin infections": "Dermatology",

    // Endocrinology symptoms
    "weight changes": "Endocrinology",
    "fatigue endocrine": "Endocrinology",
    "hormonal imbalance": "Endocrinology",
    "thyroid issues": "Endocrinology",

    // Radiology symptoms
    "diagnostic imaging abnormalities": "Radiology",

    // Anesthesiology symptoms
    "pre-surgical sedation management": "Anesthesiology",
    "pain control issues": "Anesthesiology",
    
    // Pulmonology symptoms
    "pulmonary cough": "Pulmonology",
    "pulmonary shortness of breath": "Pulmonology",
    "wheezing": "Pulmonology",
    "chest tightness": "Pulmonology",
    
    // Nephrology symptoms
    "nephrology swelling": "Nephrology",
    "nephrology blood in urine": "Nephrology",
    "nephrology fatigue": "Nephrology",
    "nephrology high blood pressure": "Nephrology",

    // Dentistry symptoms
    "toothache": "Dentistry",
    "bleeding gums": "Dentistry",
    "cavities": "Dentistry",
    "jaw pain": "Dentistry",

    // Physiotherapy symptoms
    "muscle weakness": "Physiotherapy",
    "joint stiffness": "Physiotherapy",
    "post-injury rehabilitation": "Physiotherapy",
    
    // Psychiatry symptoms
    "depression": "Psychiatry",
    "anxiety": "Psychiatry",
    "mood swings": "Psychiatry",
    "insomnia": "Psychiatry",

    // Oncology symptoms
    "tumors": "Oncology",
    "unexplained weight loss": "Oncology",
    "oncology fatigue": "Oncology",
    "persistent pain": "Oncology",

    // Neonatology symptoms
    "breathing difficulty newborns": "Neonatology",
    "jaundice newborns": "Neonatology",
    "feeding problems newborns": "Neonatology",

    // Ophthalmic Surgery symptoms
    "visual impairment surgery": "Ophthalmic Surgery",
    "trauma-related eye conditions": "Ophthalmic Surgery",

    // ENT Surgery symptoms
    "chronic sinusitis surgery": "ENT Surgery",
    "tonsil problems surgery": "ENT Surgery",
    "ear disorders surgery": "ENT Surgery",

    // Ophthalmic Retina Surgery symptoms
    "retinal detachment": "Ophthalmic Retina Surgery",
    "diabetic retinopathy surgery": "Ophthalmic Retina Surgery",
    "vision loss retina surgery": "Ophthalmic Retina Surgery",

    // Obstetrics & Gynecology Surgery symptoms
    "pregnancy complications surgery": "Obstetrics & Gynecology Surgery",
    "fibroids surgery": "Obstetrics & Gynecology Surgery",
    "ovarian cysts surgery": "Obstetrics & Gynecology Surgery",

    // Pediatric Surgery symptoms
    "congenital defects": "Pediatric Surgery",
    "appendicitis children": "Pediatric Surgery",
    "trauma in children": "Pediatric Surgery",
    
    // Vascular Surgery symptoms
    "varicose veins": "Vascular Surgery",
    "arterial blockage": "Vascular Surgery",
    "swelling limbs": "Vascular Surgery",
    "pain in limbs": "Vascular Surgery",

    // Plastic Surgery symptoms
    "burns": "Plastic Surgery",
    "scars": "Plastic Surgery",
    "cosmetic reconstruction": "Plastic Surgery",
    "deformities": "Plastic Surgery",
  };
  
  /**
   * Helper function to find the most appropriate specialty based on symptoms
   * @param symptoms - String containing patient's symptoms
   * @returns The most appropriate medical specialty
   */
  export function findSpecialty(symptoms: string): string {
    const lowerSymptoms = symptoms.toLowerCase();
    let detectedSpecialty = "General Physician"; // Default
    
    // Check symptoms against our mapping
    for (const [symptom, specialty] of Object.entries(symptomToSpecialtyMapping)) {
      if (lowerSymptoms.includes(symptom)) {
        detectedSpecialty = specialty;
        break;
      }
    }
    
    return detectedSpecialty;
  }