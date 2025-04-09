
import React from "react";

const HomeImage = () => {
  return (
    <section className="py-16 bg-hospital-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Dedicated to <span className="text-hospital-primary">Excellence</span> in Healthcare
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              At MediCare, we believe in providing comprehensive healthcare services that address not just the symptoms, 
              but the overall well-being of our patients. Our state-of-the-art facilities, combined with our team of 
              experienced healthcare professionals, ensure that you receive the best medical care possible.
            </p>
            <p className="text-gray-600 text-lg">
              From preventive care to specialized treatments, we are committed to improving your quality of life 
              through personalized healthcare solutions and compassionate service.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-hospital-primary mb-2">50+</h3>
                <p className="text-gray-600">Specialized Doctors</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-hospital-primary mb-2">25+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Medical professionals in a hospital" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="flex items-center gap-3">
                <div className="bg-hospital-primary rounded-full p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trusted by</p>
                  <p className="font-bold text-hospital-primary">10,000+ Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImage;
