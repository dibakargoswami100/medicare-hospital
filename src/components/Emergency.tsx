
import React from "react";
import { Phone, MapPin, Ambulance, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Emergency = () => {
  return (
    <section className="py-20 relative bg-hospital-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden opacity-0 animate-fade-in">
              <div className="absolute top-0 left-0 w-full h-2 bg-hospital-accent"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Emergency <span className="text-hospital-accent">Contact</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-hospital-accent/10 p-3 rounded-full text-hospital-accent animate-pulse">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency Hotline (24/7)</p>
                    <p className="text-xl font-bold text-hospital-accent">123-456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-hospital-accent/10 p-3 rounded-full text-hospital-accent">
                    <Ambulance className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ambulance Service</p>
                    <p className="text-xl font-bold text-hospital-accent">911</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-hospital-accent/10 p-3 rounded-full text-hospital-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency Department Location</p>
                    <p className="font-medium text-gray-700">123 Healthcare Ave, Medical City, MC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-hospital-accent/10 p-3 rounded-full text-hospital-accent">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency Department Hours</p>
                    <p className="font-medium text-gray-700">24 hours / 7 days a week</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-hospital-accent hover:bg-hospital-accent/90 text-white">
                  Call Emergency Hotline
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in delay-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              24/7 Emergency <span className="text-hospital-accent">Care</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our emergency department is equipped with state-of-the-art technology and staffed by
              expert emergency physicians, nurses, and specialists ready to provide immediate care 
              for any medical emergency, 24 hours a day, 7 days a week.
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-1">When to seek emergency care:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Chest pain or difficulty breathing</li>
                  <li>Severe bleeding or trauma</li>
                  <li>Sudden severe headache or loss of consciousness</li>
                  <li>Severe burns or injuries</li>
                  <li>Stroke symptoms (face drooping, arm weakness, speech difficulty)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 italic">
              If you're experiencing a life-threatening emergency, please call 911 immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
