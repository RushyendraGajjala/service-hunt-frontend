import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-28 pb-20 overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          <MapPin size={14} /> Your city, your services
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          Find Trusted <span className="text-primary">Local Services</span> in Minutes
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          From electricians to tutors, book verified professionals near you. Fast, reliable, and hassle-free — that's Service Hunt.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              <Search size={18} /> Get Started
            </Button>
          </Link>
          <a href="#services">
            <Button variant="outline" size="lg">Browse Services</Button>
          </a>
        </div>
      </div>

      <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <img
          src={heroImg}
          alt="Local professionals providing services"
          className="rounded-2xl shadow-[var(--shadow-elevated)] w-full"
        />
        {/* Floating stat card */}
        <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-[var(--shadow-card)] p-4 border border-border">
          <p className="text-2xl font-bold text-primary">500+</p>
          <p className="text-xs text-muted-foreground">Verified Professionals</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
