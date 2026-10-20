
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-hospital-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-hospital-primary pb-2">
              MediCare
            </h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare with compassion and cutting-edge technology since 1995. Our mission is to improve the health and well-being of our community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hospital-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-hospital-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-hospital-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-hospital-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-hospital-primary pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hospital-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hospital-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-hospital-primary transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-gray-300 hover:text-hospital-primary transition-colors">Appointments</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hospital-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-hospital-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-hospital-primary pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              {["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Primary Care", "Ophthalmology"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-300 hover:text-hospital-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-hospital-primary pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-hospital-primary mt-1" />
                <span className="text-gray-300">123 Healthcare Ave, Medical City, MC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-hospital-primary" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-hospital-primary" />
                <span className="text-gray-300">info@medicare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-hospital-primary mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center relative">
          <button 
            onClick={scrollToTop}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-hospital-primary text-white p-3 rounded-full hover:bg-hospital-dark transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MediCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
