
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Ophthalmology",
  "Gynecology",
  "Dentistry",
  "General Medicine",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email template parameters
      const templateParams = {
        to_name: `${formData.firstName} ${formData.lastName}`,
        to_email: formData.email,
        from_name: "MediCare Hospital",
        patient_name: `${formData.firstName} ${formData.lastName}`,
        patient_email: formData.email,
        patient_phone: formData.phone,
        department: formData.department,
        appointment_date: date ? format(date, "PPP") : "",
        appointment_time: timeSlot,
        additional_message: formData.message || "No additional information provided",
      };

      // Send confirmation email using EmailJS
      await emailjs.send(
        'service_dcgv6a6',
        'template_bn4v0pa',
        templateParams,
        '3VOSvocTx8lIPmKIL'
      );

      toast({
        title: "Appointment Booked Successfully!",
        description: "We've sent a confirmation email to your address. We'll contact you to confirm your appointment.",
        variant: "default",
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Appointment Booked",
        description: "Your appointment is booked but we couldn't send a confirmation email. We'll still contact you to confirm.",
        variant: "destructive",
      });
    }
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    });
    setDate(undefined);
    setTimeSlot("");
    setStep(1);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-light to-white py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-hospital-primary font-medium mb-3 animate-fade-in">SCHEDULE A VISIT</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
                Book an <span className="text-hospital-primary">Appointment</span>
              </h1>
              <p className="text-lg text-gray-600 animate-fade-in delay-200">
                Schedule your appointment with our expert medical professionals in just a few easy steps.
              </p>
            </div>
          </div>
        </section>
        
        {/* Appointment Form */}
        <section className="py-16 bg-hospital-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Progress Steps */}
              <div className="bg-hospital-primary text-white p-6">
                <div className="flex justify-between items-center">
                  <div className={`flex items-center ${step >= 1 ? "text-white" : "text-white/50"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? "bg-white text-hospital-primary" : "bg-white/20 text-white"}`}>
                      1
                    </div>
                    <span className="hidden sm:inline">Personal Information</span>
                  </div>
                  <div className="flex-1 mx-4 h-1 bg-white/20">
                    <div className={`h-full bg-white transition-all ${step >= 2 ? "w-full" : "w-0"}`}></div>
                  </div>
                  <div className={`flex items-center ${step >= 2 ? "text-white" : "text-white/50"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? "bg-white text-hospital-primary" : "bg-white/20 text-white"}`}>
                      2
                    </div>
                    <span className="hidden sm:inline">Schedule</span>
                  </div>
                  <div className="flex-1 mx-4 h-1 bg-white/20">
                    <div className={`h-full bg-white transition-all ${step >= 3 ? "w-full" : "w-0"}`}></div>
                  </div>
                  <div className={`flex items-center ${step >= 3 ? "text-white" : "text-white/50"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? "bg-white text-hospital-primary" : "bg-white/20 text-white"}`}>
                      3
                    </div>
                    <span className="hidden sm:inline">Confirmation</span>
                  </div>
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name*
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name*
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number*
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                          Department/Specialty*
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide any specific concerns or questions you have."
                          rows={4}
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          onClick={handleNextStep}
                          className="bg-hospital-primary hover:bg-hospital-dark"
                          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.department}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Schedule */}
                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold mb-6">Choose Date & Time</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Select Date*
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 pointer-events-auto">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return date < today || date > new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Select Time Slot*
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={timeSlot === time ? "default" : "outline"}
                                className={`${
                                  timeSlot === time
                                    ? "bg-hospital-primary hover:bg-hospital-dark"
                                    : "hover:bg-hospital-light hover:text-hospital-primary"
                                }`}
                                onClick={() => handleTimeSelect(time)}
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={handlePrevStep}
                        >
                          Previous Step
                        </Button>
                        <Button 
                          type="button" 
                          onClick={handleNextStep}
                          className="bg-hospital-primary hover:bg-hospital-dark"
                          disabled={!date || !timeSlot}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <h2 className="text-2xl font-bold mb-6">Confirm Your Appointment</h2>
                      
                      <div className="bg-hospital-light rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Department</p>
                            <p className="font-medium">{formData.department}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-medium">{date ? format(date, "PPP") : "Not selected"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Time</p>
                            <p className="font-medium">{timeSlot}</p>
                          </div>
                        </div>
                        
                        {formData.message && (
                          <div className="mb-4">
                            <p className="text-sm text-gray-500">Additional Information</p>
                            <p className="font-medium">{formData.message}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-blue-700">
                              Please verify your information is correct before submitting. We'll send you a confirmation email with your appointment details.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={handlePrevStep}
                        >
                          Previous Step
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-hospital-primary hover:bg-hospital-dark"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            "Confirm Appointment"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-hospital-primary">MediCare</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We are committed to providing exceptional care in a comfortable and welcoming environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Doctors</h3>
                <p className="text-gray-600">
                  Our team consists of highly qualified medical professionals dedicated to your health.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Modern Technology</h3>
                <p className="text-gray-600">
                  We utilize the latest medical technology to provide accurate diagnoses and treatments.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Personalized Care</h3>
                <p className="text-gray-600">
                  We develop individualized treatment plans tailored to your specific needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-hospital-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accessible Location</h3>
                <p className="text-gray-600">
                  Conveniently located with ample parking and easy access to public transportation.
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

export default BookAppointment;
