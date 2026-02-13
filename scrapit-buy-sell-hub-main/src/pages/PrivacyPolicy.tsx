import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 
              className="text-2xl font-bold text-primary cursor-pointer"
              onClick={() => navigate("/")}
            >
              Scrapit.ng
            </h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <Button
                onClick={() => navigate("/sell")}
                className="bg-primary hover:bg-primary-glow"
              >
                Sell Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last Updated: October 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-card p-8 md:p-12 space-y-8">
            <div>
              <p className="text-foreground text-lg leading-relaxed">
                At Scrapit.ng, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform to sell items or contact us.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">1.</span> Information We Collect
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Personal details (name, email, phone number) submitted through our "Sell Item" or "Contact" forms.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Item information such as category, description, and uploaded images.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Basic analytics data to understand how our website is used.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">2.</span> How We Use Your Information
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To provide accurate item evaluations and send you quotes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To contact you regarding your submissions or inquiries.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To improve our services and enhance user experience.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">3.</span> Data Protection
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We store your information securely and never share it with third parties without consent.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All form submissions are transmitted over secure (HTTPS) connections.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">4.</span> Cookies
              </h2>
              <p className="text-muted-foreground">
                We may use cookies to enhance browsing and track anonymous site performance.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">5.</span> Your Rights
              </h2>
              <p className="text-muted-foreground">
                You may request correction or deletion of your data by emailing{" "}
                <a href="mailto:hello@scrapit.ng" className="text-primary hover:underline">
                  hello@scrapit.ng
                </a>
                .
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">6.</span> Updates
              </h2>
              <p className="text-muted-foreground">
                This policy may be updated periodically; changes will be reflected on this page.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-primary hover:bg-primary-glow shadow-glow"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
