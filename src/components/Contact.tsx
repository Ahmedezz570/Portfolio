
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ahmed-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-ahmed-accent mx-auto mb-6"></div>
          <p className="text-ahmed-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-slide-up">
            <h3 className="text-2xl font-bold text-ahmed-primary mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-ahmed-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ahmed-primary mb-1">Email</h4>
                  <a href="mailto:ahmed@example.com" className="text-ahmed-secondary hover:text-ahmed-accent transition-colors">
                    ahmed@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-ahmed-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ahmed-primary mb-1">Phone</h4>
                  <a href="tel:+123456789" className="text-ahmed-secondary hover:text-ahmed-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-ahmed-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ahmed-primary mb-1">Location</h4>
                  <p className="text-ahmed-secondary">
                    Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-ahmed-muted rounded-lg">
              <h4 className="text-lg font-semibold text-ahmed-primary mb-4">
                Office Hours
              </h4>
              <ul className="space-y-2 text-ahmed-secondary">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-ahmed-secondary">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-ahmed-primary/20 focus-visible:ring-ahmed-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-ahmed-secondary">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-ahmed-primary/20 focus-visible:ring-ahmed-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-ahmed-secondary">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="border-ahmed-primary/20 focus-visible:ring-ahmed-accent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ahmed-secondary">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="min-h-[150px] border-ahmed-primary/20 focus-visible:ring-ahmed-accent"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-ahmed-accent hover:bg-ahmed-primary text-white w-full md:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
