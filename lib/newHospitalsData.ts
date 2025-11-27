export interface Hospital {
  _id: string
  name: string
  location: {
    address: string
    city: string
    state: string
    pincode: string
  }
  contact: {
    phone: string
    email: string
    website?: string
  }
  departments: string[]
  facilities: string[]
  ratings: {
    average: number
    reviews: number
  }
  bedsInEmergency?: number
  totalBeds?: number
  doctors?: number
  nurses?: number
  midwives?: number
  patientFootfall?: number
  image?: string
  description?: string
  status: "active" | "inactive"
}

export const newHospitalsData: Hospital[] = [
  {
    _id: "65c36149159048f766e133e0",
    name: "CityLine Hospital",
    location: {
      address: "123 MG Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
    },
    contact: {
      phone: "+91 9876543210",
      email: "info@cityline.com",
      website: "https://www.citylinehospital.com",
    },
    departments: ["Dermatologiest", "Neurology", "General surgeon", "Cardiology"],
    facilities: ["24/7 Emergency", "Pharmacy", "Laboratory", "ICU"],
    ratings: {
      average: 4.6,
      reviews: 150,
    },
    bedsInEmergency: 20,
    totalBeds: 100,
    doctors: 30,
    nurses: 50,
    midwives: 10,
    patientFootfall: 2000,
    image:
      "https://plus.unsplash.com/focused/750x420/409605581?cache=retina&bg=FFFFFFFF&exp=3&q=80",
    description: "CityLine Hospital is a leading multi-speciality hospital in Pune, offering advanced medical care across various departments. We are committed to providing exceptional patient care with state-of-the-art facilities and a team of experienced doctors and compassionate staff. Our services include 24/7 emergency care, advanced surgical procedures, and comprehensive diagnostic services.",
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e1",
    name: "Amrutvinayak Hospital",
    location: {
      address: "B/H Kannamww Bridge, Mumbai Agra Highway, Dwarka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345678", // Placeholder
      email: "info@amrutvinayak.com", // Placeholder
    },
    departments: ["General Medicine", "Emergency"],
    facilities: ["24/7 Emergency"],
    ratings: {
      average: 4.5,
      reviews: 100,
    },
    bedsInEmergency: 15,
    totalBeds: 120,
    doctors: 25,
    nurses: 40,
    patientFootfall: 2500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e2",
    name: "Ankur Maternity Home & Diagnostic Centre",
    location: {
      address: "Plot No. 1, Vrundavan Nagar, Opp Sai Bharat Petrol Pump, Ambad",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422010", // Placeholder
    },
    contact: {
      phone: "+91 2532345679", // Placeholder
      email: "info@ankurmaternity.com", // Placeholder
    },
    departments: ["Gynecology", "Pediatrics", "Diagnostic Services"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 50,
    },
    bedsInEmergency: 5,
    totalBeds: 35,
    doctors: 10,
    nurses: 20,
    patientFootfall: 800,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e3",
    name: "Ashwini Accident Multispeciality Hospital",
    location: {
      address: "Govindnagar Chowk No.5, Behind Hotel Prakash, Mumbai Naka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345680", // Placeholder
      email: "info@ashwinihospital.com", // Placeholder
    },
    departments: ["Emergency Medicine", "Orthopedics", "General Surgery"],
    facilities: ["24/7 Emergency"],
    ratings: {
      average: 4.3,
      reviews: 75,
    },
    bedsInEmergency: 12,
    totalBeds: 75,
    doctors: 18,
    nurses: 30,
    patientFootfall: 1500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e4",
    name: "Birla Superspeciality Eye Hospital",
    location: {
      address: "Riddhi Park, 2nd Floor, Nr Rajiv Gandhi Bhavan, Sharanpur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345681", // Placeholder
      email: "info@birlaeye.com", // Placeholder
    },
    departments: ["Ophthalmology"],
    facilities: [],
    ratings: {
      average: 4.7,
      reviews: 40,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 8,
    nurses: 12,
    patientFootfall: 600,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e5",
    name: "Curie Manavata Cancer Centre",
    location: {
      address: "Opp Mahamarg Bus Stand, Mumbai Naka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345682", // Placeholder
      email: "info@curiemanavata.com", // Placeholder
    },
    departments: ["Oncology", "Radiation Therapy"],
    facilities: [],
    ratings: {
      average: 4.6,
      reviews: 60,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 20,
    nurses: 35,
    patientFootfall: 1100,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e6",
    name: "Deogaonkar Hospital",
    location: {
      address: "Old Pandit Colony, Gangapur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345683", // Placeholder
      email: "info@deogaonkarhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 30,
    },
    bedsInEmergency: 6,
    totalBeds: 50,
    doctors: 12,
    nurses: 22,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e7",
    name: "Dr. Bagul Hospital",
    location: {
      address: "Near Prasad Circle, Maniknagar, Gangapur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345684", // Placeholder
      email: "info@drbagulhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.4,
      reviews: 55,
    },
    bedsInEmergency: 8,
    totalBeds: 60,
    doctors: 15,
    nurses: 25,
    patientFootfall: 1200,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e8",
    name: "Dr. Bapaye Hospital",
    location: {
      address: "Behind NDCC Bank, Old Agra Road, Near CBS",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345685", // Placeholder
      email: "info@drbapayehospital.com", // Placeholder
    },
    departments: ["General Medicine", "Cardiology"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 50,
    },
    bedsInEmergency: 7,
    totalBeds: 55,
    doctors: 14,
    nurses: 23,
    patientFootfall: 1100,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133e9",
    name: "Dr. Dahale Hospital",
    location: {
      address: "Dsouza Colony, Near Hotel Sun, New Gangapur Naka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345686", // Placeholder
      email: "info@drdahalehospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 40,
    doctors: 9,
    nurses: 16,
    patientFootfall: 750,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ea",
    name: "Dr. Pimparikar Hospital",
    location: {
      address: "Govindnagar Chowk, Behind Hotel Prakash, Mumbai Naka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345687", // Placeholder
      email: "info@drpimparikarhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 35,
    },
    bedsInEmergency: 5,
    totalBeds: 45,
    doctors: 11,
    nurses: 18,
    patientFootfall: 850,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133eb",
    name: "Dr. Suryawanshi Eye Hospital",
    location: {
      address: "Near Hotel Sandeep, Old Agra Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345688", // Placeholder
      email: "info@drsuryawanshieye.com", // Placeholder
    },
    departments: ["Ophthalmology"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 20,
    doctors: 7,
    nurses: 10,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ec",
    name: "Gaurav Accident Hospital",
    location: {
      address: "Old Pandit Colony, Gangapur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345689", // Placeholder
      email: "info@gauravhospital.com", // Placeholder
    },
    departments: ["Emergency Medicine", "Orthopedics"],
    facilities: ["24/7 Emergency"],
    ratings: {
      average: 4.3,
      reviews: 65,
    },
    bedsInEmergency: 10,
    totalBeds: 70,
    doctors: 16,
    nurses: 28,
    patientFootfall: 1400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ed",
    name: "Healing Touch Angiography & Cardiac Surgery Centre Pvt. Ltd.",
    location: {
      address: "Gole Colony, Old Agra Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345690", // Placeholder
      email: "info@healingtouch.com", // Placeholder
    },
    departments: ["Cardiology", "Cardiac Surgery"],
    facilities: [],
    ratings: {
      average: 4.8,
      reviews: 80,
    },
    bedsInEmergency: 12,
    totalBeds: 90,
    doctors: 22,
    nurses: 38,
    patientFootfall: 1300,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ee",
    name: "Jantara Hospital",
    location: {
      address: "Suyogit Sankul, 1st Floor, Sharanpur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345691", // Placeholder
      email: "info@jantarahospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 30,
    },
    bedsInEmergency: 6,
    totalBeds: 45,
    doctors: 10,
    nurses: 18,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ef",
    name: "Joshi Nursing Home",
    location: {
      address: "Plot No.21, Near Papaya Nursery, Trimbak Road, Satpur",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422007", // Placeholder
    },
    contact: {
      phone: "+91 2532345692", // Placeholder
      email: "info@joshinursinghome.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 3.9,
      reviews: 15,
    },
    bedsInEmergency: 3,
    totalBeds: 25,
    doctors: 6,
    nurses: 12,
    patientFootfall: 450,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f0",
    name: "Karandikar Hospital",
    location: {
      address: "Govind Nagar, Behind Prakash Petrol Pump",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345693", // Placeholder
      email: "info@karandikarhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 30,
    },
    bedsInEmergency: 5,
    totalBeds: 50,
    doctors: 12,
    nurses: 20,
    patientFootfall: 950,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f1",
    name: "Krishna Hospital & Critical Care Centre",
    location: {
      address: "Umiya Apartment, Opp People's Bank, Canada Corner Signal, Sharanpur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345694", // Placeholder
      email: "info@krishnahospital.com", // Placeholder
    },
    departments: ["Critical Care", "Cardiology", "General Medicine"],
    facilities: ["ICU"],
    ratings: {
      average: 4.5,
      reviews: 70,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 18,
    nurses: 32,
    patientFootfall: 1600,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f2",
    name: "Kshitij Endoscopy Centre",
    location: {
      address: "Plot No. 53/787, Near Ashwini Hospital, Govindnagar",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345695", // Placeholder
      email: "info@kshitijendoscopy.com", // Placeholder
    },
    departments: ["Gastroenterology", "Endoscopy"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 25,
    },
    bedsInEmergency: 2,
    totalBeds: 30,
    doctors: 8,
    nurses: 14,
    patientFootfall: 600,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f3",
    name: "Kute Eye Hospital",
    location: {
      address: "Shri Hari Kute Marg, Chandak Circle to Sandeep Hotel Link Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345696", // Placeholder
      email: "info@kuteeye.com", // Placeholder
    },
    departments: ["Ophthalmology"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 10,
    },
    bedsInEmergency: 1,
    totalBeds: 20,
    doctors: 6,
    nurses: 10,
    patientFootfall: 400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f4",
    name: "Lakshmi Clinic and Hospital",
    location: {
      address: "Kardile Bhavan, Shani Chowk, Niphad",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422303", // Placeholder
    },
    contact: {
      phone: "+91 2532345697", // Placeholder
      email: "info@lakshmihospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 3.8,
      reviews: 8,
    },
    bedsInEmergency: 1,
    totalBeds: 18,
    doctors: 5,
    nurses: 8,
    patientFootfall: 350,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f5",
    name: "Life Care Hospital",
    location: {
      address: "Saptashrungi Complex, Lekha Nagar",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422009", // Placeholder
    },
    contact: {
      phone: "+91 2532345698", // Placeholder
      email: "info@lifecarehospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 50,
    },
    bedsInEmergency: 8,
    totalBeds: 60,
    doctors: 14,
    nurses: 25,
    patientFootfall: 1200,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f6",
    name: "Maharshi Heart & Critical Care Hospital",
    location: {
      address: "Anand Nagar, Behind Muktidham, Datta Mandir Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345699", // Placeholder
      email: "info@maharshihospital.com", // Placeholder
    },
    departments: ["Cardiology", "Critical Care"],
    facilities: ["ICU"],
    ratings: {
      average: 4.6,
      reviews: 70,
    },
    bedsInEmergency: 12,
    totalBeds: 85,
    doctors: 20,
    nurses: 36,
    patientFootfall: 1450,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f7",
    name: "Maher Hospital",
    location: {
      address: "Plot No.54, Lahoti Nagar, Behind Maule Hall, Satpur",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422007", // Placeholder
    },
    contact: {
      phone: "+91 2532345700", // Placeholder
      email: "info@maherhospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 30,
    },
    bedsInEmergency: 6,
    totalBeds: 50,
    doctors: 10,
    nurses: 18,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f8",
    name: "Malegaon Medical Research Foundation Pvt. Ltd.",
    location: {
      address: "Mosum Pul, Malegaon",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "423203", // Placeholder
    },
    contact: {
      phone: "+91 2532345701", // Placeholder
      email: "info@malegaonmedical.com", // Placeholder
    },
    departments: ["General Medicine", "Research"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 40,
    },
    bedsInEmergency: 7,
    totalBeds: 55,
    doctors: 12,
    nurses: 22,
    patientFootfall: 950,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133f9",
    name: "MVPA Vasantrao Pawar Medical College",
    location: {
      address: "Vasantdada Nagar, Adgoan",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345702", // Placeholder
      email: "info@mvpamedical.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    facilities: ["Teaching Hospital"],
    ratings: {
      average: 4.7,
      reviews: 150,
    },
    bedsInEmergency: 20,
    totalBeds: 150,
    doctors: 30,
    nurses: 50,
    patientFootfall: 3000,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133fa",
    name: "Navsanjeevani Hospital",
    location: {
      address: "Plot No.8, Motkari Nagar, Behind Tupsakhare Lawn, Tidke Colony",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345703", // Placeholder
      email: "info@navsanjeevani.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 35,
    doctors: 8,
    nurses: 15,
    patientFootfall: 700,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133fb",
    name: "Nelson Memorial Children Hospital",
    location: {
      address: "Near Mahamarg Bus Stand, Next to Tupasakhare Lawn, Tidke Colony",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345704", // Placeholder
      email: "info@nelsonchildrenhospital.com", // Placeholder
    },
    departments: ["Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 6,
    nurses: 12,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133fc",
    name: "Om Hospital",
    location: {
      address: "Behind Regimental Plaza, Gaikwad Mala Road, Nashik Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422101", // Placeholder
    },
    contact: {
      phone: "+91 2532345705", // Placeholder
      email: "info@omhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.4,
      reviews: 60,
    },
    bedsInEmergency: 8,
    totalBeds: 70,
    doctors: 15,
    nurses: 28,
    patientFootfall: 1300,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133fd",
    name: "Prasanna Balrugnalay",
    location: {
      address: "New Pandit Colony, Opp Old NMC, Sharanpur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345706", // Placeholder
      email: "info@prasannabalrugnalay.com", // Placeholder
    },
    departments: ["Pediatrics"],
    facilities: [],
    ratings: {
      average: 3.9,
      reviews: 12,
    },
    bedsInEmergency: 1,
    totalBeds: 20,
    doctors: 5,
    nurses: 10,
    patientFootfall: 400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133fe",
    name: "Rajebahadur Hospital & Research Centre Pvt. Ltd.",
    location: {
      address: "Plot No.13-14/199, Rajebahadur Colony, Tilak Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345707", // Placeholder
      email: "info@rajebahadurhospital.com", // Placeholder
    },
    departments: ["General Medicine", "Research"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 70,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 18,
    nurses: 32,
    patientFootfall: 1600,
    status: "active",
  },
  {
    _id: "65c36149159048f766e133ff",
    name: "Ramalayam Hospital",
    location: {
      address: "Dr. Gondkar Building, Near Panchavati Karanja",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345708", // Placeholder
      email: "info@ramalayamhospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 45,
    },
    bedsInEmergency: 7,
    totalBeds: 55,
    doctors: 12,
    nurses: 22,
    patientFootfall: 1000,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13400",
    name: "Sai Hospital",
    location: {
      address: "Crown Complex, Sharanpur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345709", // Placeholder
      email: "info@saihospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 55,
    },
    bedsInEmergency: 8,
    totalBeds: 60,
    doctors: 14,
    nurses: 25,
    patientFootfall: 1200,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13401",
    name: "Sanjeevani Hospital",
    location: {
      address: "Opp Rural Hospital, Dindori",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422202", // Placeholder
    },
    contact: {
      phone: "+91 2532345710", // Placeholder
      email: "info@sanjeevanihospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 35,
    },
    bedsInEmergency: 5,
    totalBeds: 45,
    doctors: 10,
    nurses: 18,
    patientFootfall: 850,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13402",
    name: "Shivam Eye Hospital",
    location: {
      address: "Deore Bhavan, Near Rishikesh Hospital, Gangapur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345711", // Placeholder
      email: "info@shivamhospital.com", // Placeholder
    },
    departments: ["Ophthalmology"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 7,
    nurses: 12,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13403",
    name: "Shree Balaji Super Speciality Hospital",
    location: {
      address: "Opp Mhasoba Mandir, Deolali Gaon, Nashik Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422101", // Placeholder
    },
    contact: {
      phone: "+91 2532345712", // Placeholder
      email: "info@shreebalajihospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery", "Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 70,
    },
    bedsInEmergency: 12,
    totalBeds: 85,
    doctors: 20,
    nurses: 38,
    patientFootfall: 1500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13404",
    name: "Shree Saibaba Heart Institute & Research Centre",
    location: {
      address: "Near Kalidas Kala Mandir, Shalimar",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345713", // Placeholder
      email: "info@shreesaibabainstitute.com", // Placeholder
    },
    departments: ["Cardiology", "Research"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 65,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 18,
    nurses: 32,
    patientFootfall: 1400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13405",
    name: "Shreeyash Hospital",
    location: {
      address: "Prasanna Colony, Behind Hotel Surya, Indiranagar",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422009", // Placeholder
    },
    contact: {
      phone: "+91 2532345714", // Placeholder
      email: "info@shreeyashhospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 40,
    },
    bedsInEmergency: 6,
    totalBeds: 50,
    doctors: 10,
    nurses: 18,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13406",
    name: "Six Sigma Medicare & Research Ltd.",
    location: {
      address: "Satgurus, Opp Water Tank, Mahatma Nagar",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345715", // Placeholder
      email: "info@sixsigmamedicare.com", // Placeholder
    },
    departments: ["General Medicine", "Research"],
    facilities: [],
    ratings: {
      average: 4.4,
      reviews: 55,
    },
    bedsInEmergency: 8,
    totalBeds: 70,
    doctors: 15,
    nurses: 28,
    patientFootfall: 1300,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13407",
    name: "Sonawane Heart Care Hospital and Research Centre",
    location: {
      address: "Shrihari Kute Marg, Near Baba Darga, Tidke Colony",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345716", // Placeholder
      email: "info@sonawaneheartcare.com", // Placeholder
    },
    departments: ["Cardiology", "Research"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 60,
    },
    bedsInEmergency: 10,
    totalBeds: 75,
    doctors: 16,
    nurses: 30,
    patientFootfall: 1400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13408",
    name: "Sonawane Hospital Yeola",
    location: {
      address: "Paregaon Road, At Post Yeola, Tal. Yeola",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "423401", // Placeholder
    },
    contact: {
      phone: "+91 2532345717", // Placeholder
      email: "info@sonawanehospitalyeola.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 35,
    doctors: 8,
    nurses: 15,
    patientFootfall: 700,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13409",
    name: "Sujata Birla Hospital & Medical Research Center",
    location: {
      address: "Opp Bytco College, Nashik-Pune Road, Nashik Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422101", // Placeholder
    },
    contact: {
      phone: "+91 2532345718", // Placeholder
      email: "info@sujatabirla.com", // Placeholder
    },
    departments: ["General Medicine", "Research"],
    facilities: [],
    ratings: {
      average: 4.5,
      reviews: 65,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 18,
    nurses: 32,
    patientFootfall: 1500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340a",
    name: "Sukhatme Maternity Home",
    location: {
      address: "Ashtavinayak Apartment, Behind Dholya Ganpati Mandir, Ashok Stambh",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345719", // Placeholder
      email: "info@sukhatmematernity.com", // Placeholder
    },
    departments: ["Gynecology", "Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 6,
    nurses: 12,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340b",
    name: "Surya Multispeciality Hospitals Pvt. Ltd.",
    location: {
      address: "2nd Floor, Surya Arcade, Infront of Nimani Bus Stand, Panchavati",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345720", // Placeholder
      email: "info@suryamultispeciality.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery", "Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.6,
      reviews: 75,
    },
    bedsInEmergency: 12,
    totalBeds: 85,
    doctors: 20,
    nurses: 36,
    patientFootfall: 1600,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340c",
    name: "Surya Nursing Home",
    location: {
      address: "Bytco Point, Behind Regimental Plaza",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422101", // Placeholder
    },
    contact: {
      phone: "+91 2532345721", // Placeholder
      email: "info@suryanursinghome.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 35,
    doctors: 8,
    nurses: 15,
    patientFootfall: 700,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340d",
    name: "Suvichar Hospital",
    location: {
      address: "856/857, Ganesh Baba Nagar, Behind Hotel Siddarth, Nashik-Poona Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345722", // Placeholder
      email: "info@suvicharhospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 35,
    },
    bedsInEmergency: 5,
    totalBeds: 45,
    doctors: 10,
    nurses: 18,
    patientFootfall: 850,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340e",
    name: "Suyog Hospital",
    location: {
      address: "2nd Floor, Srushi Utpanna Bazar Samiti Sankul, Dindori Road, Panchavati",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345723", // Placeholder
      email: "info@suyoghospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 40,
    },
    bedsInEmergency: 6,
    totalBeds: 50,
    doctors: 12,
    nurses: 22,
    patientFootfall: 950,
    status: "active",
  },
  {
    _id: "65c36149159048f766e1340f",
    name: "Tanmayee Hospital",
    location: {
      address: "Akshay Bungalow, Sainagar, RTO Corner, Dindori Road, Panchavati",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422003", // Placeholder
    },
    contact: {
      phone: "+91 2532345724", // Placeholder
      email: "info@tanmayeehospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 35,
    doctors: 8,
    nurses: 14,
    patientFootfall: 700,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13410",
    name: "Trimurti Multispecialty Hospital",
    location: {
      address: "2nd Floor, Purab Paschim Plaza, Near Divya Adlab, Trimurti Chowk, Cidco",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422008", // Placeholder
    },
    contact: {
      phone: "+91 2532345725", // Placeholder
      email: "info@trimurtihospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery", "Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.4,
      reviews: 55,
    },
    bedsInEmergency: 8,
    totalBeds: 70,
    doctors: 15,
    nurses: 28,
    patientFootfall: 1300,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13411",
    name: "Tulsi Eye Hospitals",
    location: {
      address: "Happy Home Colony, Near Gen. Vaidya Nagar, Off Nashik-Pune Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422006", // Placeholder
    },
    contact: {
      phone: "+91 2532345726", // Placeholder
      email: "info@tulsieye.com", // Placeholder
    },
    departments: ["Ophthalmology"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 6,
    nurses: 12,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13412",
    name: "Usha Hospital",
    location: {
      address: "Bhujbal Farm Road, Mumbai Agra Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345727", // Placeholder
      email: "info@ushahospital.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 30,
    },
    bedsInEmergency: 5,
    totalBeds: 45,
    doctors: 10,
    nurses: 18,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13413",
    name: "Vakratunda Multispeciality Hospital",
    location: {
      address: "1st Floor, Ragukul Sankul, B/H Hotel Bandahurai, Sales Tax Office, Pathardi Phata",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422009", // Placeholder
    },
    contact: {
      phone: "+91 2532345728", // Placeholder
      email: "info@vakratundahospital.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery"],
    facilities: [],
    ratings: {
      average: 4.3,
      reviews: 40,
    },
    bedsInEmergency: 6,
    totalBeds: 50,
    doctors: 12,
    nurses: 22,
    patientFootfall: 950,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13414",
    name: "Vijan Cardiac & Critical Care Centre",
    location: {
      address: "Vijan Hospital, HPT College Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422005", // Placeholder
    },
    contact: {
      phone: "+91 2532345729", // Placeholder
      email: "info@vijancardiac.com", // Placeholder
    },
    departments: ["Cardiology", "Critical Care"],
    facilities: ["ICU"],
    ratings: {
      average: 4.5,
      reviews: 65,
    },
    bedsInEmergency: 10,
    totalBeds: 80,
    doctors: 18,
    nurses: 32,
    patientFootfall: 1400,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13415",
    name: "Vijay Nursing Home",
    location: {
      address: "Old Gangapur Naka, Near Khatib Dairy, Gangapur Road",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422002", // Placeholder
    },
    contact: {
      phone: "+91 2532345730", // Placeholder
      email: "info@vijaynursinghome.com", // Placeholder
    },
    departments: ["General Medicine"],
    facilities: [],
    ratings: {
      average: 4.1,
      reviews: 25,
    },
    bedsInEmergency: 4,
    totalBeds: 35,
    doctors: 8,
    nurses: 14,
    patientFootfall: 700,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13416",
    name: "Vimal ENT Hospital",
    location: {
      address: "2nd Floor, M.G. Road, Sathaye Baug",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345731", // Placeholder
      email: "info@vimalent.com", // Placeholder
    },
    departments: ["ENT"],
    facilities: [],
    ratings: {
      average: 4.0,
      reviews: 20,
    },
    bedsInEmergency: 2,
    totalBeds: 25,
    doctors: 7,
    nurses: 12,
    patientFootfall: 500,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13417",
    name: "Vishwesh Children's Hospital",
    location: {
      address: "Behind Tupsakhare Lawns, Mumbai Naka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345732", // Placeholder
      email: "info@vishweshchildrenhospital.com", // Placeholder
    },
    departments: ["Pediatrics"],
    facilities: [],
    ratings: {
      average: 4.2,
      reviews: 30,
    },
    bedsInEmergency: 5,
    totalBeds: 45,
    doctors: 10,
    nurses: 18,
    patientFootfall: 900,
    status: "active",
  },
  {
    _id: "65c36149159048f766e13418",
    name: "Wockhardt Hospitals Ltd.",
    location: {
      address: "Plot No.39, Nr. Mumbai-Agra Road, Wadalanka",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422001", // Placeholder
    },
    contact: {
      phone: "+91 2532345733", // Placeholder
      email: "info@wockhardthospitals.com", // Placeholder
    },
    departments: ["General Medicine", "Surgery", "Cardiology", "Neurology"],
    facilities: ["24/7 Emergency", "Pharmacy", "Laboratory", "ICU"],
    ratings: {
      average: 4.7,
      reviews: 100,
    },
    bedsInEmergency: 15,
    totalBeds: 120,
    doctors: 25,
    nurses: 45,
    patientFootfall: 2500,
    status: "active",
  },
]
