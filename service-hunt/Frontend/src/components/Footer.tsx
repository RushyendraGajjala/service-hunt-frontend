import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Service Hunt" className="h-8 w-8 brightness-200" />
            <span className="text-lg font-bold font-display">ServiceHunt</span>
          </div>
          <p className="text-sm text-background/60">
            Connecting you with trusted local professionals, one booking at a time.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
            <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>hello@servicehunt.in</li>
            <li>+91 98765 43210</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center text-sm text-background/40">
        © {new Date().getFullYear()} Service Hunt. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
