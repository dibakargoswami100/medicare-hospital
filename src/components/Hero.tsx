
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, CalendarPlus } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-12 lg:pt-28 lg:pb-20 relative bg-gradient-to-r from-hospital-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-hospital-primary font-medium animate-slide-in">
              WELCOME TO MEDICARE
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in delay-100">
              Your Health is <br />
              <span className="text-hospital-primary">Our Priority</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl animate-slide-in delay-200">
              Providing exceptional healthcare with compassion and cutting-edge technology. 
              Our team of expert doctors are committed to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in delay-300">
              <Button size="lg" className="bg-hospital-primary hover:bg-hospital-dark flex items-center gap-2">
                <CalendarPlus className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-hospital-primary text-hospital-primary hover:bg-hospital-light">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-full opacity-0 animate-fade-in delay-200">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl animate-float">
              <div className="absolute inset-0 bg-hospital-primary/5"></div>
              <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1723673116192-cceba25fb3c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="bg-hospital-accent rounded-full p-2 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Emergency Helpline</p>
                  <p className="font-bold text-hospital-primary">123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
