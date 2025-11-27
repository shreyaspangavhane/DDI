import type { Hospital } from "@/app/main/page"; // Adjust path as needed

export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experienceYears: number;
  contactNumber: string;
  email: string;
  qualifications: string;
  consultationFee: string; // Keeping as string due to '₹' symbol
  visitingHours: string;
  hospitalId: string;
  hospitalName: string; // To make it easier to display
  image?: string; // Optional image URL
}

const newHospitalsData: Hospital[] = [
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
      email: "info@shivameye.com", // Placeholder
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
];

const hospitalNameToIdMap: Map<string, string> = new Map(
  newHospitalsData.map((h) => [h.name, h._id])
);

let doctorIdCounter = 0;

function generateDoctorId(): string {
  return `doc_${(doctorIdCounter++).toString().padStart(4, '0')}`;
}

const doctorDataText = `Hospital Name: Amrutvinayak Hospital
1.	Doctor Name: Dr. Rahul Deshmukh
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543210
 Email Address: rahul.d@amrutvinayak.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Meera Joshi
 Department / Specialization: Pediatrics – 8 years
 Contact Number: +91 9876543211
 Email Address: meera.j@amrutvinayak.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹400
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Sandeep Kulkarni
 Department / Specialization: Orthopedics – 15 years
 Contact Number: +91 9876543212
 Email Address: sandeep.k@amrutvinayak.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Tue-Sat, 10:00 AM – 5:00 PM

Hospital Name: Ankur Maternity Home & Diagnostic Centre
1.	Doctor Name: Dr. Priya Patil
 Department / Specialization: Obstetrics & Gynecology – 10 years
 Contact Number: +91 9876543220
 Email Address: priya.p@ankurmaternity.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Nikhil More
 Department / Specialization: Pediatrics – 7 years
 Contact Number: +91 9876543221
 Email Address: nikhil.m@ankurmaternity.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹400
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 4:00 PM
3.	Doctor Name: Dr. Seema Rathi
 Department / Specialization: Radiology – 12 years
 Contact Number: +91 9876543222
 Email Address: seema.r@ankurmaternity.com
 Qualifications: MBBS, MD (Radiology)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: Ashwini Accident Multispeciality Hospital
1.	Doctor Name: Dr. Arjun Patankar
 Department / Specialization: Trauma & Emergency – 14 years
 Contact Number: +91 9876543230
 Email Address: arjun.p@ashwinihospital.com
 Qualifications: MBBS, MD (Emergency Medicine)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7
2.	Doctor Name: Dr. Kavita Desai
 Department / Specialization: General Surgery – 10 years
 Contact Number: +91 9876543231
 Email Address: kavita.d@ashwinihospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Sameer Kulkarni
 Department / Specialization: Orthopedics – 12 years
 Contact Number: +91 9876543232
 Email Address: sameer.k@ashwinihospital.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 5:00 PM

Hospital Name: Birla Superspeciality Eye Hospital
1.	Doctor Name: Dr. Ritu Sharma
 Department / Specialization: Ophthalmology – 9 years
 Contact Number: +91 9876543240
 Email Address: ritu.s@birlaeye.com
 Qualifications: MBBS, MS (Ophthalmology)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM
2.	Doctor Name: Dr. Anil Verma
 Department / Specialization: Retina Specialist – 11 years
 Contact Number: +91 9876543241
 Email Address: anil.v@birlaeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹700
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Pooja Kulkarni
 Department / Specialization: Pediatric Ophthalmology – 8 years
 Contact Number: +91 9876543242
 Email Address: pooja.k@birlaeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹550
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Curie Manavata Cancer Centre
1.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Oncology – 12 years
 Contact Number: +91 9876543250
 Email Address: neha.p@curiemanavata.com
 Qualifications: MBBS, MD (Oncology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Rohit Sharma
 Department / Specialization: Radiation Oncology – 10 years
 Contact Number: +91 9876543251
 Email Address: rohit.s@curiemanavata.com
 Qualifications: MBBS, DMRT
 Consultation Fee: ₹900
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anjali Deshmukh
 Department / Specialization: Medical Oncology – 9 years
 Contact Number: +91 9876543252
 Email Address: anjali.d@curiemanavata.com
 Qualifications: MBBS, MD (Medicine)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM

Hospital Name: Deogaonkar Hospital
1.	Doctor Name: Dr. Suresh Patankar
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543260
 Email Address: suresh.p@deogaonkar.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Meenal Joshi
 Department / Specialization: ENT – 10 years
 Contact Number: +91 9876543261
 Email Address: meenal.j@deogaonkar.com
 Qualifications: MBBS, MS (ENT)
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Rajesh Kulkarni
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543262
 Email Address: rajesh.k@deogaonkar.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹700
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Dr. Bagul Hospital
1.	Doctor Name: Dr. Priyanka Bagul
 Department / Specialization: Gynecology – 11 years
 Contact Number: +91 9876543270
 Email Address: priyanka.b@bagulhospital.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Amit Deshmukh
 Department / Specialization: General Surgery – 14 years
 Contact Number: +91 9876543271
 Email Address: amit.d@bagulhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Sneha Patil
 Department / Specialization: Pediatrics – 9 years
 Contact Number: +91 9876543272
 Email Address: sneha.p@bagulhospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Dr. Bapaye Hospital
1.	Doctor Name: Dr. Sanjay Bapaye
 Department / Specialization: Internal Medicine – 16 years
 Contact Number: +91 9876543280
 Email Address: sanjay.b@bapayehospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹550
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Radhika Joshi
 Department / Specialization: Dermatology – 10 years
 Contact Number: +91 9876543281
 Email Address: radhika.j@bapayehospital.com
 Qualifications: MBBS, DDV
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Manoj Kulkarni
 Department / Specialization: Orthopedics – 12 years
 Contact Number: +91 9876543282
 Email Address: manoj.k@bapayehospital.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: Dr. Dahale Hospital
1.	Doctor Name: Dr. Prakash Dahale
 Department / Specialization: Cardiology – 14 years
 Contact Number: +91 9876543290
 Email Address: prakash.d@dahalehospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹700
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Sunita Patil
 Department / Specialization: General Medicine – 11 years
 Contact Number: +91 9876543291
 Email Address: sunita.p@dahalehospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 4:00 PM
3.	Doctor Name: Dr. Rajesh More
 Department / Specialization: Orthopedics – 13 years
 Contact Number: +91 9876543292
 Email Address: rajesh.m@dahalehospital.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: Dr. Pimparikar Hospital
1.	Doctor Name: Dr. Neeta Pimparikar
 Department / Specialization: Obstetrics & Gynecology – 12 years
 Contact Number: +91 9876543300
 Email Address: neeta.p@pimparikarhospital.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Suresh Kulkarni
 Department / Specialization: General Surgery – 14 years
 Contact Number: +91 9876543301
 Email Address: suresh.k@pimparikarhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Anjali Joshi
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543302
 Email Address: anjali.j@pimparikarhospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM
Hospital Name: Dr. Suryawanshi Eye Hospital
1.	Doctor Name: Dr. Rajesh Suryawanshi
 Department / Specialization: Ophthalmology – 13 years
 Contact Number: +91 9876543310
 Email Address: rajesh.s@suryaeye.com
 Qualifications: MBBS, MS (Ophthalmology)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Pooja Deshmukh
 Department / Specialization: Cataract Specialist – 9 years
 Contact Number: +91 9876543311
 Email Address: pooja.d@suryaeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Retina Specialist – 11 years
 Contact Number: +91 9876543312
 Email Address: anil.p@suryaeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 4:00 PM

Hospital Name: Gaurav Accident Hospital
1.	Doctor Name: Dr. Sameer Gaurav
 Department / Specialization: Trauma & Emergency – 14 years
 Contact Number: +91 9876543320
 Email Address: sameer.g@gauravhospital.com
 Qualifications: MBBS, MD (Emergency Medicine)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7
2.	Doctor Name: Dr. Kavita More
 Department / Specialization: Orthopedics – 12 years
 Contact Number: +91 9876543321
 Email Address: kavita.m@gauravhospital.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 5:00 PM
3.	Doctor Name: Dr. Rohan Patil
 Department / Specialization: General Surgery – 10 years
 Contact Number: +91 9876543322
 Email Address: rohan.p@gauravhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Healing Touch Angiography & Cardiac Surgery Centre Pvt. Ltd.
1.	Doctor Name: Dr. Anil Rathi
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543330
 Email Address: anil.r@healingtouch.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Kulkarni
 Department / Specialization: Cardiothoracic Surgery – 12 years
 Contact Number: +91 9876543331
 Email Address: neha.k@healingtouch.com
 Qualifications: MBBS, MCh (Cardiothoracic Surgery)
 Consultation Fee: ₹900
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM
3.	Doctor Name: Dr. Suresh Patil
 Department / Specialization: Interventional Cardiology – 14 years
 Contact Number: +91 9876543332
 Email Address: suresh.p@healingtouch.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 4:00 PM

Hospital Name: Jantara Hospital
1.	Doctor Name: Dr. Priya Rathi
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543340
 Email Address: priya.r@jantarahospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Rohit Deshmukh
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543341
 Email Address: rohit.d@jantarahospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anjali Patil
 Department / Specialization: Surgery – 11 years
 Contact Number: +91 9876543342
 Email Address: anjali.p@jantarahospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Joshi Nursing Home
1.	Doctor Name: Dr. Sunita Joshi
 Department / Specialization: Gynecology – 13 years
 Contact Number: +91 9876543350
 Email Address: sunita.j@joshihome.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543351
 Email Address: ramesh.p@joshihome.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Neha More
 Department / Specialization: Pediatrics – 9 years
 Contact Number: +91 9876543352
 Email Address: neha.m@joshihome.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Karandikar Hospital
1.	Doctor Name: Dr. Anil Karandikar
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543360
 Email Address: anil.k@karandikar.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya Patil
 Department / Specialization: Pediatrics – 11 years
 Contact Number: +91 9876543361
 Email Address: priya.p@karandikar.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Suresh More
 Department / Specialization: Orthopedics – 13 years
 Contact Number: +91 9876543362
 Email Address: suresh.m@karandikar.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: Krishna Hospital & Critical Care Centre
1.	Doctor Name: Dr. Rohit Krishna
 Department / Specialization: Critical Care – 15 years
 Contact Number: +91 9876543370
 Email Address: rohit.k@krishnahospital.com
 Qualifications: MBBS, MD (Critical Care)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7
2.	Doctor Name: Dr. Neha More
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543371
 Email Address: neha.m@krishnahospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Cardiology – 14 years
 Contact Number: +91 9876543372
 Email Address: anil.p@krishnahospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Kshitij Endoscopy Centre
1.	Doctor Name: Dr. Sanjay Kshitij
 Department / Specialization: Gastroenterology – 12 years
 Contact Number: +91 9876543380
 Email Address: sanjay.k@kshitijendoscopy.com
 Qualifications: MBBS, MD (Gastroenterology)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Endoscopy Specialist – 10 years
 Contact Number: +91 9876543381
 Email Address: priya.m@kshitijendoscopy.com
 Qualifications: MBBS, DM (Gastroenterology)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: General Medicine – 13 years
 Contact Number: +91 9876543382
 Email Address: ramesh.p@kshitijendoscopy.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Kute Eye Hospital
1.	Doctor Name: Dr. Hari Kute
 Department / Specialization: Ophthalmology – 14 years
 Contact Number: +91 9876543390
 Email Address: hari.k@kuteeye.com
 Qualifications: MBBS, MS (Ophthalmology)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Sneha Kulkarni
 Department / Specialization: Retina Specialist – 11 years
 Contact Number: +91 9876543391
 Email Address: sneha.k@kuteeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 4:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Pediatric Ophthalmology – 9 years
 Contact Number: +91 9876543392
 Email Address: anil.p@kuteeye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹550
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM

Hospital Name: Lakshmi Clinic and Hospital
1.	Doctor Name: Dr. Vijay Lakshmi
 Department / Specialization: General Medicine – 13 years
 Contact Number: +91 9876543400
 Email Address: vijay.l@lakshmihospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543401
 Email Address: priya.m@lakshmihospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Suresh Patil
 Department / Specialization: ENT – 12 years
 Contact Number: +91 9876543402
 Email Address: suresh.p@lakshmihospital.com
 Qualifications: MBBS, MS (ENT)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Life Care Hospital
1.	Doctor Name: Dr. Anjali More
 Department / Specialization: Cardiology – 14 years
 Contact Number: +91 9876543410
 Email Address: anjali.m@lifecarehospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Rahul Patil
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543411
 Email Address: rahul.p@lifecarehospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Meera Joshi
 Department / Specialization: Pediatrics – 9 years
 Contact Number: +91 9876543412
 Email Address: meera.j@lifecarehospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Maharshi Heart & Critical Care Hospital
1.	Doctor Name: Dr. Sanjay Maharshi
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543420
 Email Address: sanjay.m@maharshihospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Critical Care – 12 years
 Contact Number: +91 9876543421
 Email Address: neha.p@maharshihospital.com
 Qualifications: MBBS, MD (Critical Care)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: General Medicine – 13 years
 Contact Number: +91 9876543422
 Email Address: ramesh.m@maharshihospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Maher Hospital
1.	Doctor Name: Dr. Priya Maher
 Department / Specialization: Gynecology – 12 years
 Contact Number: +91 9876543430
 Email Address: priya.m@maherhospital.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Anil Patil
 Department / Specialization: General Surgery – 14 years
 Contact Number: +91 9876543431
 Email Address: anil.p@maherhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Meena More
 Department / Specialization: Pediatrics – 11 years
 Contact Number: +91 9876543432
 Email Address: meena.m@maherhospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Malegaon Medical Research Foundation Pvt. Ltd.
1.	Doctor Name: Dr. Ramesh Malegaon
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543440
 Email Address: ramesh.m@mmrf.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543441
 Email Address: neha.p@mmrf.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anil More
 Department / Specialization: Orthopedics – 13 years
 Contact Number: +91 9876543442
 Email Address: anil.m@mmrf.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: MVPA Vasantrao Pawar Medical College
1.	Doctor Name: Dr. Sanjay Pawar
 Department / Specialization: Medicine – 16 years
 Contact Number: +91 9876543450
 Email Address: sanjay.p@mvpa.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya Deshmukh
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543451
 Email Address: priya.d@mvpa.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Surgery – 14 years
 Contact Number: +91 9876543452
 Email Address: ramesh.m@mvpa.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Navsanjeevani Hospital
1.	Doctor Name: Dr. Anil Navsanjeevani
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543460
 Email Address: anil.n@navsanjeevani.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543461
 Email Address: neha.p@navsanjeevani.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Orthopedics – 13 years
 Contact Number: +91 9876543462
 Email Address: ramesh.m@navsanjeevani.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM

Hospital Name: Nelson Memorial Children Hospital
1.	Doctor Name: Dr. Priya Nelson
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543470
 Email Address: priya.n@nelsonchildren.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Neonatology – 11 years
 Contact Number: +91 9876543471
 Email Address: ramesh.p@nelsonchildren.com
 Qualifications: MBBS, DCH, Neonatology Certification
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anjali More
 Department / Specialization: Pediatric Surgery – 9 years
 Contact Number: +91 9876543472
 Email Address: anjali.m@nelsonchildren.com
 Qualifications: MBBS, MS (Pediatric Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM

Hospital Name: Om Hospital
1.	Doctor Name: Dr. Anil Omkar
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543480
 Email Address: anil.o@omhospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Gynecology – 12 years
 Contact Number: +91 9876543481
 Email Address: neha.p@omhospital.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
3.	Doctor Name: Dr. Ramesh Kulkarni
 Department / Specialization: Surgery – 14 years
 Contact Number: +91 9876543482
 Email Address: ramesh.k@omhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM


Hospital Name: Prasanna Balrugnalay
1.	Doctor Name: Dr. Anjali Prasanna
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543490
 Email Address: anjali.p@prasannabalrugnalay.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Ramesh More
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543491
 Email Address: ramesh.m@prasannabalrugnalay.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Priya Patil
 Department / Specialization: Neonatology – 10 years
 Contact Number: +91 9876543492
 Email Address: priya.p@prasannabalrugnalay.com
 Qualifications: MBBS, DCH, Neonatology Certification
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM

Hospital Name: Rajebahadur Hospital & Research Centre Pvt. Ltd.
1.	Doctor Name: Dr. Sanjay Rajebahadur
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543500
 Email Address: sanjay.r@rajebahadur.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha More
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543501
 Email Address: neha.m@rajebahadur.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 14 years
 Contact Number: +91 9876543502
 Email Address: ramesh.p@rajebahadur.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Ramalayam Hospital
1.	Doctor Name: Dr. Anil Ramalayam
 Department / Specialization: Orthopedics – 13 years
 Contact Number: +91 9876543510
 Email Address: anil.r@ramalayamhospital.com
 Qualifications: MBBS, MS (Orthopedics)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 5:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: General Medicine – 11 years
 Contact Number: +91 9876543511
 Email Address: priya.m@ramalayamhospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Sat, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Pediatrics – 10 years
 Contact Number: +91 9876543512
 Email Address: ramesh.p@ramalayamhospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Fri, 11:00 AM – 3:00 PM

Hospital Name: Sai Hospital
1.	Doctor Name: Dr. Sanjay Sai
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543520
 Email Address: sanjay.s@saihospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543521
 Email Address: neha.p@saihospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543522
 Email Address: ramesh.m@saihospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Sanjeevani Hospital
1.	Doctor Name: Dr. Anil Sanjeevani
 Department / Specialization: General Medicine – 13 years
 Contact Number: +91 9876543530
 Email Address: anil.s@sanjeevanihospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Pediatrics – 11 years
 Contact Number: +91 9876543531
 Email Address: priya.m@sanjeevanihospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 12 years
 Contact Number: +91 9876543532
 Email Address: ramesh.p@sanjeevanihospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Shivam Eye Hospital
1.	Doctor Name: Dr. Rajesh Shivam
 Department / Specialization: Ophthalmology – 13 years
 Contact Number: +91 9876543540
 Email Address: rajesh.s@shivameye.com
 Qualifications: MBBS, MS (Ophthalmology)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Sneha Kulkarni
 Department / Specialization: Retina Specialist – 11 years
 Contact Number: +91 9876543541
 Email Address: sneha.k@shivameye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹650
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 4:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Cataract Specialist – 9 years
 Contact Number: +91 9876543542
 Email Address: anil.p@shivameye.com
 Qualifications: MBBS, DNB (Ophthalmology)
 Consultation Fee: ₹550
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM

Hospital Name: Shree Balaji Super Speciality Hospital
1.	Doctor Name: Dr. Sanjay Balaji
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543550
 Email Address: sanjay.b@balajihospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha More
 Department / Specialization: Neurology – 12 years
 Contact Number: +91 9876543551
 Email Address: neha.m@balajihospital.com
 Qualifications: MBBS, MD, DM (Neurology)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: General Surgery – 14 years
 Contact Number: +91 9876543552
 Email Address: ramesh.p@balajihospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Shree Saibaba Heart Institute & Research Centre
1.	Doctor Name: Dr. Anil Saibaba
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543560
 Email Address: anil.s@saibabaheart.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya Patil
 Department / Specialization: Cardiac Surgery – 12 years
 Contact Number: +91 9876543561
 Email Address: priya.p@saibabaheart.com
 Qualifications: MBBS, MCh (Cardiothoracic Surgery)
 Consultation Fee: ₹900
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Critical Care – 13 years
 Contact Number: +91 9876543562
 Email Address: ramesh.m@saibabaheart.com
 Qualifications: MBBS, MD (Critical Care)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7


Hospital Name: Shreeyash Hospital
1.	Doctor Name: Dr. Ramesh Shreeyash
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543570
 Email Address: ramesh.s@shreeyashhospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543571
 Email Address: priya.m@shreeyashhospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543572
 Email Address: anil.p@shreeyashhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Six Sigma Medicare & Research Ltd.
1.	Doctor Name: Dr. Sanjay Sixsigma
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543580
 Email Address: sanjay.s@sixsigmamedicare.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha Patil
 Department / Specialization: General Medicine – 12 years
 Contact Number: +91 9876543581
 Email Address: neha.p@sixsigmamedicare.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543582
 Email Address: ramesh.m@sixsigmamedicare.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Sonawane Heart Care Hospital and Research Centre
1.	Doctor Name: Dr. Anil Sonawane
 Department / Specialization: Cardiology – 15 years
 Contact Number: +91 9876543590
 Email Address: anil.s@sonawaneheart.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹850
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Cardiac Surgery – 12 years
 Contact Number: +91 9876543591
 Email Address: priya.m@sonawaneheart.com
 Qualifications: MBBS, MCh (Cardiothoracic Surgery)
 Consultation Fee: ₹900
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Critical Care – 13 years
 Contact Number: +91 9876543592
 Email Address: ramesh.p@sonawaneheart.com
 Qualifications: MBBS, MD (Critical Care)
 Consultation Fee: ₹700
 Visiting Hours / Timings: 24x7

Hospital Name: Sonawane Hospital Yeola
1.	Doctor Name: Dr. Sanjay Yeola
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543600
 Email Address: sanjay.y@sonawanehospitalyeola.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Neha More
 Department / Specialization: Pediatrics – 11 years
 Contact Number: +91 9876543601
 Email Address: neha.m@sonawanehospitalyeola.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543602
 Email Address: ramesh.p@sonawanehospitalyeola.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Sujata Birla Hospital & Medical Research Center
1.	Doctor Name: Dr. Ramesh Birla
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543610
 Email Address: ramesh.b@sujatabirla.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543611
 Email Address: priya.m@sujatabirla.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543612
 Email Address: anil.p@sujatabirla.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Sukhatme Maternity Home
1.	Doctor Name: Dr. Priya Sukhatme
 Department / Specialization: Gynecology – 12 years
 Contact Number: +91 9876543620
 Email Address: priya.s@sukhatmematernity.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 9:00 AM – 2:00 PM
2.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Obstetrics – 14 years
 Contact Number: +91 9876543621
 Email Address: anil.p@sukhatmematernity.com
 Qualifications: MBBS, MS (OBGYN)
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh More
 Department / Specialization: Pediatrics – 11 years
 Contact Number: +91 9876543622
 Email Address: ramesh.m@sukhatmematernity.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM

Hospital Name: Surya Multispeciality Hospitals Pvt. Ltd.
1.	Doctor Name: Dr. Sanjay Surya
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543630
 Email Address: sanjay.s@suryahospitals.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543631
 Email Address: priya.m@suryahospitals.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543632
 Email Address: ramesh.p@suryahospitals.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Surya Nursing Home
1.	Doctor Name: Dr. Anil Surya
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543640
 Email Address: anil.s@suryanursing.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543641
 Email Address: priya.m@suryanursing.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543642
 Email Address: ramesh.p@suryanursing.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Suvichar Hospital
1.	Doctor Name: Dr. Sanjay Suvichar
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543650
 Email Address: sanjay.s@suvicharhospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543651
 Email Address: priya.m@suvicharhospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543652
 Email Address: ramesh.p@suvicharhospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Suyog Hospital
1.	Doctor Name: Dr. Ramesh Suyog
 Department / Specialization: General Medicine – 14 years
 Contact Number: +91 9876543660
 Email Address: ramesh.s@suyoghospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Pediatrics – 12 years
 Contact Number: +91 9876543661
 Email Address: priya.m@suyoghospital.com
 Qualifications: MBBS, DCH
 Consultation Fee: ₹450
 Visiting Hours / Timings: Mon-Sat, 11:00 AM – 3:00 PM
3.	Doctor Name: Dr. Anil Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543662
 Email Address: anil.p@suyoghospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM

Hospital Name: Tanmayee Hospital
1.	Doctor Name: Dr. Sanjay Tanmayee
 Department / Specialization: General Medicine – 15 years
 Contact Number: +91 9876543670
 Email Address: sanjay.t@tanmayeehospital.com
 Qualifications: MBBS, MD
 Consultation Fee: ₹500
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
2.	Doctor Name: Dr. Priya More
 Department / Specialization: Cardiology – 12 years
 Contact Number: +91 9876543671
 Email Address: priya.m@tanmayeehospital.com
 Qualifications: MBBS, MD, DM (Cardiology)
 Consultation Fee: ₹800
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM
3.	Doctor Name: Dr. Ramesh Patil
 Department / Specialization: Surgery – 13 years
 Contact Number: +91 9876543672
 Email Address: ramesh.p@tanmayeehospital.com
 Qualifications: MBBS, MS (Surgery)
 Consultation Fee: ₹600
 Visiting Hours / Timings: Mon-Fri, 10:00 AM – 4:00 PM`;

const newDoctorsData: Doctor[] = [];

const parseDoctorData = () => {
  const lines = doctorDataText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  let currentHospitalName: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("Hospital Name:")) {
      currentHospitalName = line.replace("Hospital Name:", "").trim();
    } else if (line.match(/^\d+\.\tDoctor Name:/)) {
      if (!currentHospitalName) {
        console.error("Doctor data found without a preceding hospital name.");
        continue;
      }

      const doctorName = line.replace(/^\d+\.\tDoctor Name:/, "").trim();
      const specializationLine = lines[++i];
      const contactNumberLine = lines[++i];
      const emailAddressLine = lines[++i];
      const qualificationsLine = lines[++i];
      const consultationFeeLine = lines[++i];
      const visitingHoursLine = lines[++i];

      const specializationMatch = specializationLine.match(/Department \/ Specialization: (.*) – (\d+) years/);
      const specialization = specializationMatch ? specializationMatch[1].trim() : "N/A";
      const experienceYears = specializationMatch ? parseInt(specializationMatch[2], 10) : 0;

      const contactNumber = contactNumberLine.replace("Contact Number:", "").trim();
      const email = emailAddressLine.replace("Email Address:", "").trim();
      const qualifications = qualificationsLine.replace("Qualifications:", "").trim();
      const consultationFee = consultationFeeLine.replace("Consultation Fee:", "").trim();
      const visitingHours = visitingHoursLine.replace("Visiting Hours / Timings:", "").trim();

      const hospitalId = hospitalNameToIdMap.get(currentHospitalName);

      if (hospitalId) {
        newDoctorsData.push({
          _id: generateDoctorId(),
          name: doctorName,
          specialization,
          experienceYears,
          contactNumber,
          email,
          qualifications,
          consultationFee,
          visitingHours,
          hospitalId,
          hospitalName: currentHospitalName,
        });
      } else {
        console.warn(`Hospital ID not found for hospital: ${currentHospitalName}. Doctor ${doctorName} will not be added.`);
      }
    }
  }
};

parseDoctorData();

export { newDoctorsData };