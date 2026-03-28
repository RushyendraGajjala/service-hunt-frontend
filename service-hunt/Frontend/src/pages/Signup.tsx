import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

type SignupType = "user" | "provider";

const Signup = () => {
  const [activeTab, setActiveTab] = useState<SignupType>("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logo} alt="Service Hunt" className="h-10 w-10" />
            <span className="text-2xl font-bold font-display text-foreground">
              Service<span className="text-primary">Hunt</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm">Create your account</p>
        </div>

        <div className="flex rounded-lg border border-border overflow-hidden">
          {["user", "provider"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t as SignupType)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                activeTab === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {t === "user" ? "User" : "Service Provider"}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Your city address" />
          </div>

          {activeTab === "provider" && (
            <div className="space-y-2">
              <Label htmlFor="identity">Identity Proof (Upload)</Label>
              <Input id="identity" type="file" accept="image/*" className="cursor-pointer" />
              <p className="text-xs text-muted-foreground">
                Upload a photo of your ID. Your account will be reviewed by our admin team.
              </p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full" size="lg">
            {activeTab === "provider" ? "Submit for Approval" : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
