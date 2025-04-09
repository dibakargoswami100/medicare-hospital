
import React, { useState } from "react";
import { Heart, Brain, Stethoscope, Baby, Bone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Expert care for heart health including advanced diagnostics and treatments for cardiovascular conditions.",
      color: "bg-red-100 text-red-500",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for nervous system disorders with state-of-the-art diagnostics and treatment options.",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: Stethoscope,
      title: "Primary Care",
      description: "Comprehensive healthcare services for individuals and families, focusing on preventive care and wellness.",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Dedicated care for children from birth through adolescence, ensuring healthy development and well-being.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal conditions, including joint replacements and sports medicine.",
      color: "bg-amber-100 text-amber-500",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Advanced eye care services including routine exams, surgical procedures, and treatment for eye disorders.",
      color: "bg-indigo-100 text-indigo-500",
    },
  ];

  const handleMouseEnter = (index: number) => {
    setActiveService(index);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Medical <span className="text-hospital-primary">Services</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide comprehensive healthcare services with a focus on quality, compassion, and 
            cutting-edge technology to ensure the best possible outcomes for our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer bg-white hover:shadow-lg opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${service.color} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-hospital-primary hover:text-hospital-dark hover:bg-hospital-light"
                >
                  Learn More
                </Button>

                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    activeService === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-500 italic">
                    Our {service.title.toLowerCase()} department is staffed with board-certified specialists 
                    dedicated to providing exceptional care using the latest medical technologies and evidence-based practices.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
