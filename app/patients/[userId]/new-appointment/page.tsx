"use client"

import { useEffect, useState } from "react"
import AppointmentForm from "@/components/forms/Appointment"
import { Card, CardContent } from "@/components/ui/card"
import { getRegisteredPatient } from "@/lib/actions/patient.actions"
import { Star, Search, ChevronDown, ChevronUp, Clock, Calendar, Phone, Mail, Award } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useSelector } from "react-redux"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { newDoctorsData } from "@/lib/newDoctorsData"; // Import newDoctorsData
import { useSearchParams } from "next/navigation"; // Import useSearchParams

export default function NewAppointment({ params }: { params: { userId: string } }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [patient, setPatient] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState<string | null>(null) // Initialize to null
  const selectedHospital = useSelector((state: any) => state.hospital.selectedHospital)
  const [doctors, setDoctors] = useState<any[]>([])
  const [isSmallLoading, setIsSmallLoading] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [expandedDoctorId, setExpandedDoctorId] = useState<string | null>(null)
  const searchParams = useSearchParams(); // Initialize useSearchParams

  // Store userId in local storage and retrieve it when needed
  useEffect(() => {
    const currentUserId = params.userId || localStorage.getItem("userId");
    if (currentUserId) {
      setUserId(currentUserId);
      localStorage.setItem("userId", currentUserId);
    }
  }, [params.userId]); // Only re-run when params.userId changes

  // Fetch patient details
  useEffect(() => {
    // Only fetch if userId is available and patient is not already loaded
    if (userId && !patient) {
      const getPatient = async () => {
        try {
          setLoading(true);
          const patientData = await getRegisteredPatient(userId);
          console.log("Registered Patient:", patientData);
          setPatient(patientData);
        } catch (error) {
          console.error("Error fetching patient:", error);
          setPatient(null); // Explicitly set patient to null on error
        } finally {
          setLoading(false);
        }
      };

      getPatient();
    }
  }, [userId, patient]); // Depend on userId and patient to prevent unnecessary re-fetches

  // Store hospitalId in local storage and retrieve it when needed
  useEffect(() => {
    if (selectedHospital && selectedHospital._id) {
      localStorage.setItem("hospitalId", selectedHospital._id)
    }
  }, [selectedHospital])

  useEffect(() => {
    const storedHospitalId = localStorage.getItem("hospitalId")
    const doctorIdFromUrl = searchParams.get("doctorId"); // Get doctorId from URL
    const hospitalIdFromUrl = searchParams.get("hospitalId"); // Get hospitalId from URL

    let effectiveHospitalId = storedHospitalId;

    if (hospitalIdFromUrl) {
      effectiveHospitalId = hospitalIdFromUrl;
      localStorage.setItem("hospitalId", hospitalIdFromUrl); // Persist URL hospitalId
    } else if (selectedHospital && selectedHospital._id) {
      effectiveHospitalId = selectedHospital._id;
    }

    if (effectiveHospitalId) {
      setDoctors([]); // Reset doctors before fetching
      fetchDoctors(effectiveHospitalId);
    }

    if (doctorIdFromUrl) {
      const doctorToSelect = newDoctorsData.find(doc => doc._id === doctorIdFromUrl);
      if (doctorToSelect) {
        setSelectedDoctor(doctorToSelect);
        setExpandedDoctorId(doctorIdFromUrl);
      }
    }
  }, [selectedHospital, searchParams]) // Add searchParams to dependencies

  const fetchDoctors = async (id: string) => {
    setIsSmallLoading(true)
    try {
      // Filter doctors from newDoctorsData based on hospitalId
      const fetchedDoctors = newDoctorsData.filter(doc => doc.hospitalId === id);
      setDoctors(fetchedDoctors)
    } catch (error) {
      console.error("Error fetching doctors:", error)
    } finally {
      setIsSmallLoading(false)
    }
  }

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialization} ${doctor.hospitalName}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleDoctorExpand = (doctorId: string) => {
    if (expandedDoctorId === doctorId) {
      setExpandedDoctorId(null)
      setSelectedDoctor(null); // Clear selected doctor when collapsing
    } else {
      setExpandedDoctorId(doctorId)
      const doctor = doctors.find((d) => d._id === doctorId)
      if (doctor) {
        setSelectedDoctor(doctor)
      }
    }
  }

  // Format time from 24h to 12h format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen max-h-screen w-full bg-[linear-gradient(to_right,#012621,#002A1C)]">
      {/* Sidebar - Doctor List */}
      <div className="hidden lg:block w-full lg:w-2/5 xl:w-1/3 p-4 sm:p-6 overflow-y-auto bg-[linear-gradient(to_right,#042F2E)] remove-scrollbar border-b lg:border-b-0 lg:border-r border-teal-900/30">
        <div className="mb-7">
          <Link href={"/dashboard"} >
          <div className="flex items-center mb-5 sm:mb-7">
            <img
              src="https://img.icons8.com/arcade/64/hospital.png"
              alt="Logo"
              className="h-8 sm:h-10 w-auto mr-3"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-teal-300"></h1>
          </div>
          </Link>
          <h2 className="text-sm sm:text-sm mt-4 font-semibold text-teal-100 mb-1">Choose Your Physician</h2>
          <div className="relative mb-5 mt-8">
            <Input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 sm:h-11 shad-input border rounded-lg px-4"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-400/50" size={20} />
          </div>
        </div>

        {/* Doctor List */}
        <div className="grid grid-cols-1 gap-4">
          {isSmallLoading ? (
            <p className="text-teal-300 text-center">Loading doctors...</p>
          ) : filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Collapsible
                key={doctor._id}
                open={expandedDoctorId === doctor._id}
                onOpenChange={() => toggleDoctorExpand(doctor._id)}
                className="w-full"
              >
                <Card
                  className={`bg-teal-900/20 border-teal-400/10 hover:bg-teal-900/30 transition-all ${expandedDoctorId === doctor._id ? "bg-teal-900/40 border-teal-400/20" : ""}`}
                >
                  <CollapsibleTrigger className="w-full text-left">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-5">
                        <div className="relative w-16 h-12 sm:w-15 sm:h-12 mr-3 sm:mr-4">
                          <Image
                            src={doctor?.image || "/placeholder.svg"}
                            alt="Doctor"
                            width={80}
                            height={80}
                            className="rounded-xl object-fit w-full h-full border-2 border-teal-700 shadow-md"
                          />
                          <div className="absolute -top-1 -right-1 bg-teal-900/90 px-1.5 py-0.5 rounded-full flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                            <span className="text-white text-xs font-medium">{doctor?.ratings?.average || 'N/A'}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between w-full">
                          <div>
                            <p className="text-teal-300 font-semibold">{doctor?.name}</p>
                            <p className="text-sm text-white">{doctor?.specialization}</p>
                          </div>
                          <div className="flex items-center justify-between mt-1 sm:mt-0">
                            <div className="mr-2">
                              <p className="text-sm text-white">{doctor?.experienceYears} years</p>
                              <Badge
                                variant="outline"
                                className={`mt-2 text-xs ${doctor?.status === "active" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}`}
                              >
                                {doctor?.status}
                              </Badge>
                            </div>
                            {expandedDoctorId === doctor._id ? (
                              <ChevronUp className="text-teal-300 h-5 w-5" />
                            ) : (
                              <ChevronDown className="text-teal-300 h-5 w-5" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="px-4 pb-4 pt-1 border-t border-teal-700/30 mt-1">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex mt-2 items-center gap-2">
                          <Mail className="h-4 w-4 text-teal-300" />
                          <p className="text-sm text-white">{doctor?.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-teal-300" />
                          <p className="text-sm text-white">{doctor?.contactNumber}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-teal-300" />
                          <p className="text-sm text-white">{doctor?.qualifications}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-teal-300" />
                          <p className="text-sm text-white">{doctor?.visitingHours}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-teal-300" />
                          <p className="text-sm text-white">Fee: {doctor?.consultationFee}</p>
                        </div>

                        <div className="">
   
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))
          ) : (
            <p className="text-teal-400/60 text-center text-sm">No doctors found.</p>
          )}
        </div>
      </div>

      {/* Right Section - Appointment Form */}
      <div className="lg:w-3/5 xl:w-2/3 p-8 overflow-y-auto custom-scrollbar bg-[#012621]/70 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-teal-100 mb-8">Book an Appointment</h2>

        {/* Show loading or patient details */}
        {loading ? (
          <p className="text-teal-300">Loading patient details...</p>
        ) : patient ? (
          <AppointmentForm
            type="create"
            patientId={patient._id}
            patientName={patient.name}
            userId={userId || ""}
            selectedDoctor={selectedDoctor} // Pass selectedDoctor prop
          />
        ) : (
          <p className="text-red-400">No patient data found.</p>
        )}
      </div>
    </div>
  )
}

