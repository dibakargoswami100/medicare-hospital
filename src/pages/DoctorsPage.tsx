import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Search, Star, GraduationCap, Clock3, MapPin } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
  education: string;
  availability: string;
  languages: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=687&auto=format&fit=crop",
    rating: 4.9,
    reviews: 312,
    experience: "15+ years",
    education: "Harvard Medical School",
    availability: "Mon, Wed, Fri",
    languages: "English, Spanish",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=687&auto=format&fit=crop",
    rating: 4.8,
    reviews: 268,
    experience: "12+ years",
    education: "Johns Hopkins University",
    availability: "Tue, Thu, Sat",
    languages: "English, Mandarin",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop",
    rating: 5.0,
    reviews: 421,
    experience: "10+ years",
    education: "Stanford University",
    availability: "Mon-Fri",
    languages: "English, French",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=687&auto=format&fit=crop",
    rating: 4.7,
    reviews: 195,
    experience: "20+ years",
    education: "Yale School of Medicine",
    availability: "Wed, Thu, Fri",
    languages: "English, German",
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Ophthalmology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=687&auto=format&fit=crop",
    rating: 4.9,
    reviews: 233,
    experience: "14+ years",
    education: "University of Oxford",
    availability: "Mon, Tue, Thu",
    languages: "English, Hindi",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Primary Care",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe96c7?q=80&w=687&auto=format&fit=crop",
    rating: 4.8,
    reviews: 389,
    experience: "11+ years",
    education: "University of Michigan",
    availability: "Mon-Sat",
    languages: "English, Korean",
  },
  {
    id: 7,
    name: "Dr. Laura Bennett",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=687&auto=format&fit=crop",
    rating: 4.6,
    reviews: 148,
    experience: "9+ years",
    education: "King's College London",
    availability: "Tue, Wed, Sat",
    languages: "English, Italian",
  },
  {
    id: 8,
    name: "Dr. David Okafor",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=687&auto=format&fit=crop",
    rating: 4.9,
    reviews: 274,
    experience: "18+ years",
    education: "Johns Hopkins University",
    availability: "Mon, Thu, Fri",
    languages: "English, Igbo",
  },
];

const specialties = ["All", ...Array.from(new Set(doctors.map((d) => d.specialty)))];

const DoctorsPage = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesSpecialty = specialty === "All" || d.specialty === specialty;
      const matchesSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.education.toLowerCase().includes(q);
      return matchesSpecialty && matchesSearch;
    });
  }, [search, specialty]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Page hero */}
        <section className="bg-gradient-to-r from-hospital-light to-white py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-hospital-primary font-medium mb-3 animate-fade-in">
                OUR TEAM
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
                Meet Our <span className="text-hospital-primary">Specialists</span>
              </h1>
              <p className="text-lg text-gray-600 animate-fade-in delay-200">
                Board-certified doctors across every major specialty — each one chosen
                as much for their empathy as for their expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Search + filters */}
        <section className="sticky top-[64px] z-30 bg-white/95 backdrop-blur border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="relative w-full lg:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or specialty..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-hospital-primary"
                  aria-label="Search doctors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpecialty(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      specialty === s
                        ? "bg-hospital-primary text-white"
                        : "bg-hospital-light text-hospital-dark hover:bg-hospital-primary/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground lg:ml-auto">
                {filtered.length} {filtered.length === 1 ? "doctor" : "doctors"} found
              </p>
            </div>
          </div>
        </section>

        {/* Doctors grid */}
        <section className="py-16 bg-hospital-gray">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">No doctors found</h3>
                <p className="text-muted-foreground mb-6">
                  Try a different name or specialty filter.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearch("");
                    setSpecialty("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((doctor, index) => {
                  const isExpanded = expandedId === doctor.id;
                  return (
                    <div
                      key={doctor.id}
                      className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in flex flex-col"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-hospital-dark">
                          {doctor.specialty}
                        </span>
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur px-2.5 py-1 rounded-full">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <span className="text-xs font-semibold text-white">{doctor.rating}</span>
                          <span className="text-[11px] text-gray-200">({doctor.reviews})</span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                          <GraduationCap className="h-4 w-4 text-hospital-primary" />
                          {doctor.education}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1.5">
                          <Clock3 className="h-4 w-4 text-hospital-secondary" />
                          {doctor.experience} · {doctor.availability}
                        </p>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5 pt-3 border-t border-border">
                            <MapPin className="h-4 w-4 text-hospital-primary" />
                            Languages: {doctor.languages}
                          </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border flex gap-2 mt-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-hospital-primary border-hospital-primary hover:bg-hospital-light"
                            onClick={() => setExpandedId(isExpanded ? null : doctor.id)}
                          >
                            {isExpanded ? "Less" : "Details"}
                          </Button>
                          <Link to="/book-appointment" className="flex-1">
                            <Button size="sm" className="w-full bg-hospital-primary hover:bg-hospital-dark">
                              <CalendarPlus className="h-4 w-4 mr-1" />
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-hospital-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to see a specialist?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Same-week appointments available in most departments. Book online in under two minutes.
            </p>
            <Link to="/book-appointment">
              <Button size="lg" className="bg-hospital-primary hover:bg-hospital-dark">
                <CalendarPlus className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorsPage;
