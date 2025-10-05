
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Map form fields to EmailJS template variables
      const templateParams = {
        user_name: formState.name,
        user_email: formState.email,
        message: formState.message,
        phone: formState.phone,
        subject: formState.subject,
      };

      await emailjs.send(
        'service_dcgv6a6',
        'template_bn4v0pa',
        templateParams,
        '3VOSvocTx8lIPmKIL'
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });

      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-light to-white py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-hospital-primary font-medium mb-3 animate-fade-in">GET IN TOUCH</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
                Contact <span className="text-hospital-primary">Us</span>
              </h1>
              <p className="text-lg text-gray-600 animate-fade-in delay-200">
                Have questions or need assistance? We're here to help. Reach out to our team for prompt and professional support.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <p className="text-gray-600">
                  123 Healthcare Ave <br />
                  Medical City, MC 12345 <br />
                  United States
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Phone className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  Main: (123) 456-7890
                </p>
                <p className="text-gray-600">
                  Emergency: (123) 456-7890
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Clock className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <p className="text-gray-600 mb-1">
                  Mon-Fri: 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600 mb-1">
                  Sat: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600">
                  Sun: Emergency Only
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-16 bg-hospital-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Appointment Request"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-hospital-primary hover:bg-hospital-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1665610044295!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MediCare Location"
                ></iframe>
              </div>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-light p-3 rounded-full">
                    <Mail className="h-6 w-6 text-hospital-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">info@medicare.com</p>
                    <p className="text-gray-600">support@medicare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-light p-3 rounded-full">
                    <Phone className="h-6 w-6 text-hospital-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">(123) 456-7890</p>
                    <p className="text-gray-600">(123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-light p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-hospital-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Follow Up</h4>
                    <p className="text-gray-600">
                      We'll respond to your inquiry within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
