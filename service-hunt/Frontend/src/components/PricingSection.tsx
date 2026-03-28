import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "For users exploring the platform",
    features: ["Browse all services", "Book up to 3 services/month", "Basic support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/mo",
    desc: "For regular users who need more",
    features: ["Unlimited bookings", "Priority matching", "24/7 dedicated support", "Exclusive discounts"],
    highlight: true,
  },
  {
    name: "Provider",
    price: "₹499",
    period: "/mo",
    desc: "For service professionals",
    features: ["Get listed & verified", "Receive real-time requests", "Analytics dashboard", "Featured placement"],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-secondary/50">
    <div className="container text-center space-y-12">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Simple, Transparent <span className="text-primary">Pricing</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose a plan that works for you — no hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl p-6 border text-left flex flex-col gap-5 transition-shadow ${
              p.highlight
                ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-elevated)] scale-105"
                : "bg-card text-foreground border-border shadow-[var(--shadow-card)]"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold font-display">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold">{p.price}</span>
              {p.period && <span className={`text-sm mb-1 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.period}</span>}
            </div>
            <ul className="space-y-2 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className={p.highlight ? "text-primary-foreground" : "text-primary"} />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/signup">
              <Button
                variant={p.highlight ? "secondary" : "default"}
                className="w-full"
                size="sm"
              >
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
