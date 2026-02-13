import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Package } from "lucide-react";

const Sell = () => {
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
          <h2 className="text-xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
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
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-20 h-20 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sell Your Item Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a competitive offer within 24 hours
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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
                      name="category"
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
      <footer className="bg-secondary py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary-foreground/80">
            © 2025 ScrapIt. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/privacy")}>
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/terms")}>
              Terms & Conditions
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sell;
