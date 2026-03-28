import { MapPin, Phone, Mail, Clock } from "lucide-react";

const AddressSection = () => (
  <section id="address" className="py-20">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Visit Our <span className="text-primary">Office</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions or want to partner with us? Drop by our office or reach out — we'd love to hear from you.
          </p>

          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: "123 Service Lane, Tech Park, Bengaluru, KA 560001" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "hello@servicehunt.in" },
              { icon: Clock, label: "Hours", value: "Mon–Sat, 9 AM – 6 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-80">
          <iframe
            title="Service Hunt Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5957!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AddressSection;
