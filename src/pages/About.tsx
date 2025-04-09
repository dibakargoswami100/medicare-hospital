
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Stethoscope, Award, HeartPulse, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-light to-white py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-hospital-primary font-medium mb-3 animate-fade-in">OUR STORY</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
                About <span className="text-hospital-primary">MediCare</span>
              </h1>
              <p className="text-lg text-gray-600 animate-fade-in delay-200">
                Providing exceptional healthcare with compassion and cutting-edge technology since 1995.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our <span className="text-hospital-primary">Mission</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  At MediCare, our mission is to provide exceptional healthcare with compassion, 
                  integrity, and respect. We are committed to improving the health and well-being 
                  of our community through innovative medical practices, cutting-edge technology, 
                  and a patient-centered approach to care.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  We strive to create a healing environment where patients and their families feel 
                  supported, informed, and empowered. Our team of dedicated healthcare professionals 
                  works collaboratively to deliver personalized care that addresses the unique needs 
                  of each patient.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-hospital-primary text-white p-3 rounded-full">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Patient Care</h4>
                      <p className="text-gray-600">Personalized attention to every patient</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-hospital-primary text-white p-3 rounded-full">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Excellence</h4>
                      <p className="text-gray-600">Committed to highest standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1587351021759-3e6f2a10bbc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Doctor with patient" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-hospital-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold text-hospital-primary mb-2">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold text-hospital-primary mb-2">50+</h3>
                <p className="text-gray-600">Specialized Doctors</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold text-hospital-primary mb-2">10k+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold text-hospital-primary mb-2">15+</h3>
                <p className="text-gray-600">Medical Specialties</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-hospital-primary">Values</span>
              </h2>
              <p className="text-gray-600 text-lg">
                These core values guide our actions and decisions, ensuring that we provide the highest quality care to our patients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <HeartPulse className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Compassionate Care</h3>
                <p className="text-gray-600">
                  We treat every patient with kindness, empathy, and respect, recognizing their unique needs and concerns.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, continuously improving our services and enhancing our skills.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Teamwork</h3>
                <p className="text-gray-600">
                  We collaborate effectively, valuing each team member's contributions to provide coordinated care.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Stethoscope className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovative approaches and technologies to advance healthcare delivery and patient outcomes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest standards of professional conduct, honesty, and transparency in all our interactions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <HeartPulse className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Patient-Centered</h3>
                <p className="text-gray-600">
                  We place patients at the center of everything we do, respecting their choices and involving them in care decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
