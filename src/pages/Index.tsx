
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorProfiles from "@/components/DoctorProfiles";
import Emergency from "@/components/Emergency";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <DoctorProfiles />
      <Emergency />
      <Footer />
    </div>
  );
};

export default Index;
