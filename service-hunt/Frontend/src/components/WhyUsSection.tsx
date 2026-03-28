import { Shield, Clock, Star, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Verified Professionals",
    desc: "Every service provider is identity-verified and admin-approved before they appear on the platform.",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    desc: "Book a service in under a minute. Providers get real-time requests and respond quickly.",
  },
  {
    icon: Star,
    title: "Top-Rated Quality",
    desc: "Browse ratings and reviews from real customers to choose the best professional for your needs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to help resolve any issues or questions.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 bg-secondary/50">
    <div className="container text-center space-y-12">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Why Choose <span className="text-primary">Service Hunt</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We're building the most trusted marketplace for local services — here's what makes us different.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow text-left space-y-3 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
              <r.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold font-display text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
