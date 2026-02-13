import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Recycle, 
  Target, 
  Heart, 
  DollarSign, 
  Zap, 
  Shield,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About Scrapit.ng – Nigeria's Trusted Platform to Sell Scrap & Unwanted Items";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn more about Scrapit.ng — the easiest way to turn your unwanted items into cash. We buy cars, office items, appliances, and scrap metals across Nigeria."
      );
    }
  }, []);

  const workSteps = [
    {
      icon: CheckCircle2,
      title: "Submit Your Item",
      description: "Fill out a simple form with details about what you want to sell",
    },
    {
      icon: DollarSign,
      title: "Get a Quote",
      description: "Receive a fair, competitive offer within 24 hours",
    },
    {
      icon: Zap,
      title: "Get Paid",
      description: "Accept the offer and receive instant payment",
    },
  ];

  const whyChoose = [
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "We offer fair, competitive prices based on current market rates. Your items are worth more with us.",
    },
    {
      icon: Zap,
      title: "Quick Process",
      description: "Fast quotes within 24 hours and instant payment upon acceptance. No waiting, no hassle.",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Verified buyers, secure transactions, and professional service you can count on.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h2 
            className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            ScrapIt
          </h2>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button onClick={() => navigate("/sell")}>
              Sell Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 139, 87, 0.95) 0%, rgba(40, 167, 69, 0.90) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 py-32 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
            About Scrapit
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Nigeria's trusted platform for turning unwanted items into cash
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-foreground leading-relaxed">
              Scrapit.ng helps individuals and businesses across Nigeria sell unwanted items quickly, securely, and profitably. Whether it's old cars, office equipment, household appliances, electronics, furniture, or metal scraps taking up space — we turn clutter into instant cash while promoting sustainability and responsible recycling.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At Scrapit.ng, our mission is to make recycling and resale simple, secure, and profitable. We connect sellers with trusted buyers nationwide, helping transform unwanted items into valuable resources. Through innovation, transparency, and a commitment to sustainability, we aim to drive a cleaner, greener, and more economically empowered Nigeria.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Scrapit was built to solve a common problem: <span className="text-foreground font-semibold">unused items piling up</span> in homes and offices with nowhere to go. We created a simple, trusted platform where you can get fair quotes within 24 hours and receive instant payment — no stress, no waiting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How We Work
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Three simple steps to turn your unwanted items into instant cash
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-glow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Scrapit Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose Scrapit
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            We're more than just a buying platform — we're your trusted partner
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              To become Nigeria's leading digital platform for sustainable trading of used and recyclable materials, empowering individuals and businesses to create value from waste while protecting the environment.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-primary" />
                <span className="font-semibold">Sustainable & Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-semibold">Fast Growing Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Turn Your Items Into Cash?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already sold with Scrapit
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => navigate("/sell")}
          >
            Sell Your Items Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ScrapIt</h3>
              <p className="text-secondary-foreground/80">
                Nigeria's trusted platform for turning unwanted items into cash.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a href="/" className="hover:text-primary-foreground transition-colors cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary-foreground transition-colors cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary-foreground transition-colors cursor-pointer">
                    Sell Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-secondary-foreground/80">
                Email: hello@scrapit.ng<br />
                Phone: 08026086832
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2025 ScrapIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
