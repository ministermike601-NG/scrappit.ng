import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import { 
  Car, 
  Briefcase, 
  Home, 
  Recycle, 
  DollarSign, 
  Clock, 
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    description: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    {
      icon: Car,
      title: "Vehicles",
      description: "Cars, trucks, motorcycles - any condition",
    },
    {
      icon: Briefcase,
      title: "Office Items",
      description: "Furniture, electronics, equipment",
    },
    {
      icon: Home,
      title: "Household",
      description: "Appliances, furniture, electronics",
    },
    {
      icon: Recycle,
      title: "Metal Scraps",
      description: "All types of metal and recyclables",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Get competitive cash offers for your items",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Fast evaluation and instant payment",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Safe, secure, and professional transactions",
    },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `*New Item Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Category:* ${formData.category}%0A*Description:* ${formData.description}`;
      
      window.open(`https://wa.me/2348021270520?text=${message}`, '_blank');

      toast({
        title: "Redirecting to WhatsApp!",
        description: "Complete your submission by sending the pre-filled message.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        description: "",
      });
      setImages([]);
      const fileInput = document.getElementById('images') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at hello@scrapit.ng",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">ScrapIt</h2>
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
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 139, 87, 0.95) 0%, rgba(40, 167, 69, 0.90) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Turn Your Unwanted Items Into Cash
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            From cars to scrap metal - we buy it all at competitive prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/sell")}
            >
              Sell Your Items Now
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What We Buy
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            We purchase a wide range of items. Whatever you have, we're interested!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2"
              >
                <CardContent className="p-6 text-center">
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Three simple steps to turn your items into cash
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4 shadow-glow">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3">Submit Details</h3>
              <p className="text-muted-foreground">
                Fill out our form with information about your item
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4 shadow-glow">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3">Get Your Quote</h3>
              <p className="text-muted-foreground">
                Receive a competitive cash offer within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4 shadow-glow">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3">Get Paid</h3>
              <p className="text-muted-foreground">
                Accept our offer and receive instant payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose ScrapIt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Form Section */}
      <section id="sell-form" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Sell Your Item Today
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Fill out the form below and we'll get back to you with an offer
            </p>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      name="name"
                      placeholder="Adebayo Okonkwo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="adebayo@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      name="phone"
                      placeholder="0803 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Item Category *
                    </label>
                    <Select
                      required
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="washing-machine">Washing machine</SelectItem>
                        <SelectItem value="dishwasher">Dishwasher</SelectItem>
                        <SelectItem value="oven">Oven</SelectItem>
                        <SelectItem value="gas-cooker">Gas cooker</SelectItem>
                        <SelectItem value="refrigerator">Refrigerator</SelectItem>
                        <SelectItem value="air-conditioning">Air-conditioning</SelectItem>
                        <SelectItem value="fans">Fans</SelectItem>
                        <SelectItem value="television">Television</SelectItem>
                        <SelectItem value="sound-system">Sound system</SelectItem>
                        <SelectItem value="inverter">Inverter</SelectItem>
                        <SelectItem value="generators">Generators</SelectItem>
                        <SelectItem value="cars">Cars</SelectItem>
                        <SelectItem value="buses">Buses</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="bicycles">Bicycles</SelectItem>
                        <SelectItem value="motorcycle">Motorcycle</SelectItem>
                        <SelectItem value="scooters-bike">Scooters bike</SelectItem>
                        <SelectItem value="metal-scraps">Metal scraps</SelectItem>
                        <SelectItem value="gadgets">Gadgets</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="category" value={formData.category} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Item Description *
                    </label>
                    <Textarea
                      required
                      name="description"
                      placeholder="Describe your item in detail (condition, age, specifications, etc.)"
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Images
                    </label>
                    <Input
                      id="images"
                      name="attachment"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Upload multiple images of your item (optional)
                    </p>
                    {images.length > 0 && (
                      <p className="text-sm text-primary mt-2">
                        {images.length} image{images.length > 1 ? 's' : ''} selected
                      </p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <CheckCircle2 className="mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit for price evaluation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-6">
              ScrapIt
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
              Your trusted partner for buying unwanted items at competitive prices
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
              <a 
                href="mailto:hello@scrapit.ng" 
                className="flex items-center justify-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@scrapit.ng
              </a>
              <a 
                href="tel:+2348026086832" 
                className="flex items-center justify-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                08026086832
              </a>
            </div>
            <div className="flex justify-center gap-6 mb-6">
              <a 
                href="https://www.instagram.com/scrapitng" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/Scrapit5" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on X"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://web.facebook.com/Scrapit.niger" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 ScrapIt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
