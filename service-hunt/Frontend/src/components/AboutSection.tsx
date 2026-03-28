import { Users, Building2, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Building2, value: "50+", label: "Cities Covered" },
  { icon: Award, value: "500+", label: "Verified Providers" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/50">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          About <span className="text-primary">Service Hunt</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Service Hunt is the bridge between people who need help and professionals who provide it.
          We believe everyone deserves access to reliable, verified services at fair prices.
          Our platform ensures every service provider is identity-verified and approved by our team,
          so you can book with confidence.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need a plumber at midnight or a tutor for your child, Service Hunt connects you
          with the right person — fast. We're on a mission to organize local services and make them
          accessible to everyone.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-14 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto">
              <s.icon size={24} />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
