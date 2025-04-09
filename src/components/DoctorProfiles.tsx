
import React, { useState } from "react";
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: string;
  education: string;
  availability: string;
}

const DoctorProfiles = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      experience: "15+ years",
      education: "Harvard Medical School",
      availability: "Mon, Wed, Fri",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      experience: "12+ years",
      education: "Johns Hopkins University",
      availability: "Tue, Thu, Sat",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5.0,
      experience: "10+ years",
      education: "Stanford University",
      availability: "Mon-Fri",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      rating: 4.7,
      experience: "20+ years",
      education: "Yale School of Medicine",
      availability: "Wed, Thu, Fri",
    },
  ];

  const handleDoctorClick = (id: number) => {
    setSelectedDoctor(selectedDoctor === id ? null : id);
  };

  return (
    <section id="doctors" className="py-20 bg-hospital-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Meet Our <span className="text-hospital-primary">Specialists</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team of highly qualified doctors are committed to providing exceptional care.
            With years of experience and expertise in their respective fields, they ensure
            the best treatment for all our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                selectedDoctor === doctor.id ? "scale-105" : ""
              } opacity-0 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleDoctorClick(doctor.id)}
            >
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{doctor.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(doctor.rating) 
                            ? "text-yellow-400" 
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({doctor.rating})</span>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  selectedDoctor === doctor.id ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="py-2 space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Experience:</span> {doctor.experience}</p>
                    <p><span className="font-semibold">Education:</span> {doctor.education}</p>
                    <p><span className="font-semibold">Availability:</span> {doctor.availability}</p>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    <Button size="sm" className="bg-hospital-primary hover:bg-hospital-dark flex-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Schedule
                    </Button>
                    <Button size="sm" variant="outline" className="border-hospital-primary text-hospital-primary hover:bg-hospital-light flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-hospital-primary hover:bg-hospital-dark">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;
