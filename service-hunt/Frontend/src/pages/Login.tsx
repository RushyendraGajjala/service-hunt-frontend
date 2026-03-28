import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

type UserType = "user" | "provider" | "admin";

const tabs: { value: UserType; label: string }[] = [
  { value: "user", label: "User" },
  { value: "provider", label: "Service Provider" },
  { value: "admin", label: "Admin" },
];

const Login = () => {
  const [activeTab, setActiveTab] = useState<UserType>("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logo} alt="Service Hunt" className="h-10 w-10" />
            <span className="text-2xl font-bold font-display text-foreground">
              Service<span className="text-primary">Hunt</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm">Sign in to your account</p>
        </div>

        <div className="flex rounded-lg border border-border overflow-hidden">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setActiveTab(t.value)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                activeTab === t.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full" size="lg">
            Sign in as {activeTab === "provider" ? "Provider" : activeTab === "admin" ? "Admin" : "User"}
          </Button>
        </form>

        {activeTab !== "admin" && (
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        )}

        <p className="text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
