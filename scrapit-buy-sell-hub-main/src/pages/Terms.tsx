import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
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
                Welcome to Scrapit.ng. By accessing or using our website, you agree to the following terms and conditions.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">1.</span> Use of Our Platform
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Scrapit.ng provides an online service to help users sell unwanted items.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>You agree to provide accurate information about your items and contact details.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">2.</span> Item Evaluation
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Price offers are based on item details provided by the user.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Final price may vary after physical inspection.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">3.</span> Payments
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Payments are made only after mutual agreement on the quoted price.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Scrapit.ng uses secure and verifiable payment methods.</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">4.</span> Prohibited Items
              </h2>
              <p className="text-muted-foreground">
                Users must not submit illegal, stolen, or hazardous materials.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">5.</span> Liability
              </h2>
              <p className="text-muted-foreground">
                Scrapit.ng is not responsible for any damages or losses resulting from misuse of the platform.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">6.</span> Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content and branding on this site belong to Scrapit.ng.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">7.</span> Contact
              </h2>
              <p className="text-muted-foreground">
                For questions, email{" "}
                <a href="mailto:hello@scrapit.ng" className="text-primary hover:underline">
                  hello@scrapit.ng
                </a>{" "}
                or call{" "}
                <a href="tel:08062086832" className="text-primary hover:underline">
                  08062086832
                </a>
                .
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

export default Terms;
