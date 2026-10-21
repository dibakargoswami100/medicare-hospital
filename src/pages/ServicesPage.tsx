import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Bone,
  Eye,
  Activity,
  Microscope,
  CheckCircle2,
  CalendarPlus,
  PhoneCall,
  ClipboardList,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Expert care for heart health, from prevention to advanced interventional treatment.",
    features: ["Echocardiography & ECG", "Angioplasty & stenting", "Heart failure clinic", "Cardiac rehabilitation"],
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Specialized diagnosis and treatment of brain, spine and nervous system disorders.",
    features: ["Stroke unit", "Epilepsy monitoring", "MRI & CT imaging", "Movement disorder care"],
  },
  {
    icon: Stethoscope,
    title: "Primary Care",
    description:
      "Your first point of contact for everyday health, prevention and long-term wellness.",
    features: ["Annual health checks", "Vaccinations", "Chronic disease management", "Family medicine"],
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Dedicated care for children from birth through adolescence in a child-friendly setting.",
    features: ["Well-baby visits", "Childhood immunizations", "Growth & development", "Pediatric ER access"],
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Complete musculoskeletal care, from sports injuries to joint replacement surgery.",
    features: ["Joint replacements", "Sports medicine", "Physiotherapy suite", "Fracture care"],
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description:
      "Advanced eye care including routine exams, laser procedures and cataract surgery.",
    features: ["Comprehensive eye exams", "Cataract surgery", "Glaucoma management", "LASIK consultation"],
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description:
      "A fully equipped 24/7 emergency department staffed by specialists around the clock.",
    features: ["24/7 trauma response", "Ambulance dispatch", "Rapid triage", "Intensive care backup"],
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab",
    description:
      "State-of-the-art laboratory and imaging services with fast, accurate results.",
    features: ["Digital X-ray & MRI", "Ultrasound & CT", "Full pathology lab", "Same-day reports"],
  },
];

const steps = [
  { icon: CalendarPlus, title: "Book", text: "Choose a department, doctor and time that suits you." },
  { icon: ClipboardList, title: "Consult", text: "Meet your specialist and get a clear diagnosis." },
  { icon: Heart, title: "Treat", text: "Receive a personalized treatment plan and care." },
  { icon: ShieldCheck, title: "Follow-up", text: "Ongoing reviews until you are fully recovered." },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Page hero */}
        <section className="bg-gradient-to-r from-hospital-light to-white py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-hospital-primary font-medium mb-3 animate-fade-in">
                WHAT WE DO
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
                Our Medical <span className="text-hospital-primary">Services</span>
              </h1>
              <p className="text-lg text-gray-600 animate-fade-in delay-200">
                From routine check-ups to complex surgery, every department at MediCare
                is built around one goal: getting you back to full health with the
                least stress possible.
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group bg-white rounded-xl border border-hospital-light shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="h-1 bg-hospital-light group-hover:bg-hospital-primary transition-colors duration-300"></div>
                    <div className="p-6">
                      <div className="bg-hospital-light rounded-lg p-3 w-fit mb-5 group-hover:bg-hospital-primary transition-colors duration-300">
                        <Icon className="h-7 w-7 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-hospital-secondary shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-border">
                        <Link
                          to="/book-appointment"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-hospital-primary hover:text-hospital-dark transition-colors"
                        >
                          Book this department
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-hospital-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Your Care <span className="text-hospital-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground">
                Four simple steps from first contact to full recovery — we guide you through each one.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative bg-white rounded-xl p-6 shadow-sm opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <span className="absolute -top-4 -left-2 text-6xl font-black text-hospital-primary/10 select-none">
                      {index + 1}
                    </span>
                    <div className="bg-hospital-primary text-white rounded-full p-3 w-fit mb-4 relative">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-hospital-dark">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Not sure which department you need?
                </h2>
                <p className="text-gray-300">
                  Our team will help you find the right specialist — or call us any time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment">
                  <Button size="lg" className="bg-hospital-primary hover:bg-hospital-dark w-full">
                    <CalendarPlus className="mr-2 h-5 w-5" />
                    Book an Appointment
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 w-full"
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    123-456-7890
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
