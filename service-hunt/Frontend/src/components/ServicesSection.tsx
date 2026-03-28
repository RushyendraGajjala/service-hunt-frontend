import { Zap, Droplets, Sparkles, GraduationCap, Heart, Wrench, Paintbrush, Truck } from "lucide-react";

const services = [
  { icon: Zap, name: "Electricians", color: "text-yellow-500 bg-yellow-50" },
  { icon: Droplets, name: "Plumbers", color: "text-blue-500 bg-blue-50" },
  { icon: Sparkles, name: "Home Cleaning", color: "text-emerald-500 bg-emerald-50" },
  { icon: GraduationCap, name: "Tutors", color: "text-violet-500 bg-violet-50" },
  { icon: Heart, name: "Care Takers", color: "text-rose-500 bg-rose-50" },
  { icon: Wrench, name: "Mechanics", color: "text-slate-600 bg-slate-100" },
  { icon: Paintbrush, name: "Painters", color: "text-orange-500 bg-orange-50" },
  { icon: Truck, name: "Movers", color: "text-teal-500 bg-teal-50" },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container text-center space-y-12">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whatever you need, we've got a professional for it. Explore categories and book instantly.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="group bg-card rounded-xl border border-border p-6 flex flex-col items-center gap-3 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.color} transition-transform group-hover:scale-110`}>
              <s.icon size={26} />
            </div>
            <span className="font-medium text-foreground text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
