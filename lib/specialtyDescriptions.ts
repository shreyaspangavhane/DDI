/**
 * Medical specialty descriptions
 * This file contains descriptions of various medical specialties to provide context
 * for the symptom-to-specialty mapping system
 */

export interface SpecialtyDescription {
    name: string;
    description: string;
    commonConditions: string[];
  }
  
  export const specialtyDescriptions: Record<string, SpecialtyDescription> = {
    "General Medicine": {
      name: "General Medicine",
      description: "A doctor who provides primary care and treats a wide range of common medical conditions. They are often the first point of contact for patients and can refer to specialists when needed.",
      commonConditions: [
        "Fever",
        "Fatigue",
        "Body aches",
        "Infections",
        "Headaches",
        "Digestive issues"
      ]
    },
    "Pediatrics": {
      name: "Pediatrics",
      description: "A specialist who provides medical care for infants, children, and adolescents.",
      commonConditions: [
        "Fever",
        "Cough",
        "Cold",
        "Vomiting",
        "Diarrhea",
        "Rashes",
        "Growth concerns"
      ]
    },
    "Surgery": {
      name: "Surgery",
      description: "A medical specialty that uses operative manual and instrumental techniques on a patient to investigate or treat a pathological condition such as disease or injury, or to help improve bodily function or appearance.",
      commonConditions: [
        "Pain",
        "Swelling",
        "Injury",
        "Abnormal lumps",
        "Internal bleeding"
      ]
    },
    "Gynecology": {
      name: "Gynecology",
      description: "A specialist who diagnoses and treats disorders of the female reproductive system.",
      commonConditions: [
        "Irregular periods",
        "Pelvic pain",
        "Abnormal discharge",
        "Infertility issues"
      ]
    },
    "Obstetrics": {
      name: "Obstetrics",
      description: "A branch of medicine that deals with pregnancy, childbirth, and the postpartum period.",
      commonConditions: [
        "Pregnancy-related nausea",
        "Swelling",
        "Fetal movement issues",
        "High blood pressure"
      ]
    },
    "Emergency Medicine": {
      name: "Emergency Medicine",
      description: "A medical specialty involved with the diagnosis and treatment of unforeseen illness or injury.",
      commonConditions: [
        "Trauma",
        "Severe pain",
        "Accidents",
        "Sudden chest pain",
        "Unconsciousness"
      ]
    },
    "Orthopedics": {
      name: "Orthopedics",
      description: "A specialist who diagnoses and treats disorders and injuries of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
      commonConditions: [
        "Bone pain",
        "Fractures",
        "Joint pain",
        "Swelling",
        "Limited mobility"
      ]
    },
    "General Surgery": {
      name: "General Surgery",
      description: "A specialty dealing with surgical diseases of the abdominal contents including esophagus, stomach, small bowel, colon, liver, pancreas, gallbladder and bile ducts, and often the thyroid gland.",
      commonConditions: [
        "Abdominal pain",
        "Hernia",
        "Appendicitis",
        "Lumps",
        "Bleeding"
      ]
    },
    "Ophthalmology": {
      name: "Ophthalmology",
      description: "A specialist who diagnoses and treats eye disorders and diseases, and can prescribe glasses and contact lenses.",
      commonConditions: [
        "Blurred vision",
        "Eye pain",
        "Redness",
        "Watering",
        "Floaters"
      ]
    },
    "Retina Specialist": {
      name: "Retina Specialist",
      description: "A subspecialist in ophthalmology who focuses on the diagnosis and treatment of diseases of the retina and vitreous.",
      commonConditions: [
        "Vision loss",
        "Floaters",
        "Flashes",
        "Diabetic retinopathy symptoms"
      ]
    },
    "Cataract Specialist": {
      name: "Cataract Specialist",
      description: "An ophthalmologist who specializes in the diagnosis and surgical treatment of cataracts.",
      commonConditions: [
        "Cloudy vision",
        "Difficulty seeing at night",
        "Glare",
        "Fading colors"
      ]
    },
    "Cardiology": {
      name: "Cardiology",
      description: "A specialist who diagnoses and treats diseases and conditions of the heart and cardiovascular system.",
      commonConditions: [
        "Chest pain",
        "Palpitations",
        "Shortness of breath",
        "Fatigue"
      ]
    },
    "Cardiac Surgery": {
      name: "Cardiac Surgery",
      description: "A surgical specialty that deals with operative treatment of diseases affecting the heart and the great vessels.",
      commonConditions: [
        "Heart failure symptoms",
        "Severe chest pain",
        "Arrhythmia"
      ]
    },
    "Critical Care": {
      name: "Critical Care",
      description: "A medical specialty that deals with life-threatening conditions and organ support for critically ill patients.",
      commonConditions: [
        "Multi-organ dysfunction",
        "Severe infections",
        "Respiratory distress"
      ]
    },
    "ENT": {
      name: "ENT",
      description: "A specialist who diagnoses and treats disorders of the ears, nose, throat, and related structures of the head and neck.",
      commonConditions: [
        "Ear pain",
        "Hearing loss",
        "Sore throat",
        "Sinusitis",
        "Nosebleeds"
      ]
    },
    "Neurology": {
      name: "Neurology",
      description: "A specialist who diagnoses and treats disorders of the brain, spinal cord, and nervous system.",
      commonConditions: [
        "Headaches",
        "Seizures",
        "Dizziness",
        "Numbness",
        "Memory issues"
      ]
    },
    "Gastroenterology": {
      name: "Gastroenterology",
      description: "A specialist who diagnoses and treats disorders of the digestive system, including the esophagus, stomach, intestines, liver, and pancreas.",
      commonConditions: [
        "Abdominal pain",
        "Constipation",
        "Diarrhea",
        "Bloating",
        "Heartburn"
      ]
    },
    "Urology": {
      name: "Urology",
      description: "A specialist who diagnoses and treats disorders of the urinary tract in both men and women, and the reproductive system in men.",
      commonConditions: [
        "Painful urination",
        "Blood in urine",
        "Frequent urination",
        "Kidney pain"
      ]
    },
    "Dermatology": {
      name: "Dermatology",
      description: "A specialist who diagnoses and treats conditions affecting the skin, hair, and nails.",
      commonConditions: [
        "Skin rashes",
        "Itching",
        "Acne",
        "Eczema",
        "Infections"
      ]
    },
    "Endocrinology": {
      name: "Endocrinology",
      description: "A specialist who diagnoses and treats disorders of the endocrine system, which includes the glands that produce hormones.",
      commonConditions: [
        "Weight changes",
        "Fatigue",
        "Hormonal imbalance",
        "Thyroid issues"
      ]
    },
    "Radiology": {
      name: "Radiology",
      description: "A medical specialty that uses medical imaging to diagnose and treat diseases seen within the body.",
      commonConditions: [
        "Diagnostic imaging abnormalities (X-ray, MRI, CT)"
      ]
    },
    "Anesthesiology": {
      name: "Anesthesiology",
      description: "A medical specialty that provides anesthesia and manages pain during and after surgery, and for chronic conditions.",
      commonConditions: [
        "Pre-surgical sedation management",
        "Pain control issues"
      ]
    },
    "Pulmonology": {
      name: "Pulmonology",
      description: "A specialist who diagnoses and treats diseases and conditions of the respiratory system, including the lungs and bronchial tubes.",
      commonConditions: [
        "Cough",
        "Shortness of breath",
        "Wheezing",
        "Chest tightness"
      ]
    },
    "Nephrology": {
      name: "Nephrology",
      description: "A specialist who diagnoses and treats disorders of the kidneys and renal system.",
      commonConditions: [
        "Swelling",
        "Blood in urine",
        "Fatigue",
        "High blood pressure"
      ]
    },
    "Dentistry": {
      name: "Dentistry",
      description: "A healthcare professional who specializes in the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.",
      commonConditions: [
        "Toothache",
        "Bleeding gums",
        "Cavities",
        "Jaw pain"
      ]
    },
    "Physiotherapy": {
      name: "Physiotherapy",
      description: "A healthcare profession focused on restoring movement and function to individuals affected by injury, illness, or disability.",
      commonConditions: [
        "Muscle weakness",
        "Joint stiffness",
        "Post-injury rehabilitation"
      ]
    },
    "Psychiatry": {
      name: "Psychiatry",
      description: "A medical doctor who specializes in mental health, including substance use disorders.",
      commonConditions: [
        "Depression",
        "Anxiety",
        "Mood swings",
        "Insomnia"
      ]
    },
    "Oncology": {
      name: "Oncology",
      description: "A specialist who diagnoses and treats cancer and provides medical care for cancer patients.",
      commonConditions: [
        "Tumors",
        "Unexplained weight loss",
        "Fatigue",
        "Persistent pain"
      ]
    },
    "Neonatology": {
      name: "Neonatology",
      description: "A subspecialty of pediatrics that consists of the medical care of newborn infants, especially the ill or premature newborn infant.",
      commonConditions: [
        "Breathing difficulty",
        "Jaundice",
        "Feeding problems in newborns"
      ]
    },
    "Ophthalmic Surgery": {
      name: "Ophthalmic Surgery",
      description: "Surgical procedures performed on the eye or its adnexa.",
      commonConditions: [
        "Visual impairment",
        "Trauma-related eye conditions"
      ]
    },
    "ENT Surgery": {
      name: "ENT Surgery",
      description: "Surgical procedures related to the ear, nose, and throat.",
      commonConditions: [
        "Chronic sinusitis",
        "Tonsil problems",
        "Ear disorders"
      ]
    },
    "Ophthalmic Retina Surgery": {
      name: "Ophthalmic Retina Surgery",
      description: "Surgical treatment for conditions affecting the retina.",
      commonConditions: [
        "Retinal detachment",
        "Diabetic retinopathy",
        "Vision loss"
      ]
    },
    "Obstetrics & Gynecology Surgery": {
      name: "Obstetrics & Gynecology Surgery",
      description: "Surgical procedures related to pregnancy, childbirth, and the female reproductive system.",
      commonConditions: [
        "Pregnancy complications",
        "Fibroids",
        "Ovarian cysts"
      ]
    },
    "Pediatric Surgery": {
      name: "Pediatric Surgery",
      description: "A subspecialty of surgery that involves the surgery of fetuses, infants, children, adolescents, and young adults.",
      commonConditions: [
        "Congenital defects",
        "Appendicitis",
        "Trauma in children"
      ]
    },
    "Vascular Surgery": {
      name: "Vascular Surgery",
      description: "A surgical subspecialty in which diseases of the vascular system, or arteries, veins and lymphatic circulation, are managed by medical therapy, minimally-invasive catheter procedures, and surgical reconstruction.",
      commonConditions: [
        "Varicose veins",
        "Arterial blockage",
        "Swelling",
        "Pain in limbs"
      ]
    },
    "Plastic Surgery": {
      name: "Plastic Surgery",
      description: "A surgical specialty that deals with the reconstruction or repair of parts of the body.",
      commonConditions: [
        "Burns",
        "Scars",
        "Cosmetic reconstruction",
        "Deformities"
      ]
    }
  };
  
  /**
   * Get the description for a specific medical specialty
   * @param specialty - Name of the medical specialty
   * @returns Description object for the specialty or undefined if not found
   */
  export function getSpecialtyDescription(specialty: string): SpecialtyDescription | undefined {
    return specialtyDescriptions[specialty];
  }
  
  /**
   * Get a list of all available medical specialties
   * @returns Array of specialty names
   */
  export function getAllSpecialties(): string[] {
    return Object.keys(specialtyDescriptions);
  }