# Deployment Fix Instructions

Upload these files to your GitHub repository to fix the build:

## 1. Replace `client/src/components/sections/contact.tsx`

```tsx
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@/lib/schema";

const contactInfo = [
  {
    icon: "fas fa-phone",
    title: "Phone",
    primary: "01206 645 155",
    secondary: "24/7 Emergency Line"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    primary: "Enquiries@BoostElectrical.co.uk",
    secondary: "Quick Response Guaranteed"
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Service Area",
    primary: "Colchester & East Essex",
    secondary: "Free Site Visits"
  },
  {
    icon: "fas fa-clock",
    title: "Response Time",
    primary: "Same Day Service",
    secondary: "Emergency Call-outs Available"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    }
  });

  const onSubmit = async (data: InsertContact) => {
    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('serviceType', data.serviceType || '');
      formData.append('message', data.message);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-boost-dark mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600">Free quote within 24 hours - no hidden fees guaranteed</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-boost-dark">
                  Request Your Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="01206 XXX XXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Required</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                                <SelectItem value="smart-home">Smart Home Technology</SelectItem>
                                <SelectItem value="commercial">Commercial & Industrial</SelectItem>
                                <SelectItem value="eicr-testing">EICR Testing & Compliance</SelectItem>
                                <SelectItem value="design-consultancy">Design & Consultancy</SelectItem>
                                <SelectItem value="maintenance">Maintenance & Repairs</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your electrical project requirements..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-boost-orange hover:bg-boost-orange-light text-white font-semibold py-3 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-boost-dark mb-4">
                Why Choose Boost Electrical?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-boost-orange mr-3"></i>
                  <span>NICEIC Approved Contractors</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-boost-orange mr-3"></i>
                  <span>Fully Insured & Qualified</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-boost-orange mr-3"></i>
                  <span>Same Day Service Available</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-boost-orange mr-3"></i>
                  <span>Free Quotes & Honest Pricing</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-boost-orange mr-3"></i>
                  <span>24/7 Emergency Call-outs</span>
                </li>
              </ul>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="text-boost-orange text-2xl mb-3">
                        <i className={info.icon}></i>
                      </div>
                      <h4 className="font-semibold text-boost-dark mb-2">{info.title}</h4>
                      <p className="text-boost-dark font-medium">{info.primary}</p>
                      <p className="text-gray-600 text-sm">{info.secondary}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="font-semibold text-boost-dark mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/boostelectrical" target="_blank" rel="noopener noreferrer" 
                   className="text-boost-orange hover:text-boost-orange-light text-2xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/boostelectrical" target="_blank" rel="noopener noreferrer"
                   className="text-boost-orange hover:text-boost-orange-light text-2xl transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.google.com/search?q=boost+electrical+colchester" target="_blank" rel="noopener noreferrer"
                   className="text-boost-orange hover:text-boost-orange-light text-2xl transition-colors">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## 2. Create `client/src/lib/schema.ts`

```typescript
import { z } from "zod";

// Contact form schema for static site
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = InsertContact & { id: number; createdAt: Date };
```

Upload these two files to GitHub and the build should succeed!