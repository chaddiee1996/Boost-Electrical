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
    secondary: ""
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Service Area",
    primary: "Colchester & East Essex",
    secondary: ""
  },
  {
    icon: "fas fa-clock",
    title: "Business Hours",
    primary: "Mon-Fri: 7:00-18:00",
    secondary: "Sat: 8:00-16:00\nEmergency: 24/7"
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

  // Form submission handled by Netlify Forms

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
            <Card className="bg-boost-gray">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-boost-dark">
                  Send us a message
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
                            <FormLabel className="text-sm font-medium text-boost-dark">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="focus:ring-boost-orange focus:border-boost-orange"
                                {...field} 
                              />
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
                            <FormLabel className="text-sm font-medium text-boost-dark">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your@email.com" 
                                className="focus:ring-boost-orange focus:border-boost-orange"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-boost-dark">Phone</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="01206 000 000" 
                              className="focus:ring-boost-orange focus:border-boost-orange"
                              {...field} 
                            />
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
                          <FormLabel className="text-sm font-medium text-boost-dark">Service Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="focus:ring-boost-orange focus:border-boost-orange bg-white border border-gray-200 shadow-sm rounded-md">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg z-50">
                              <SelectItem value="renewable" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">Renewable Energy Solutions</SelectItem>
                              <SelectItem value="smart-home" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">Smart Home Technology</SelectItem>
                              <SelectItem value="commercial" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">Commercial & Industrial</SelectItem>
                              <SelectItem value="eicr" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">EICR Testing & Compliance</SelectItem>
                              <SelectItem value="design" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">Electrical Design & Consultancy</SelectItem>
                              <SelectItem value="domestic" className="hover:bg-gray-50 focus:bg-boost-orange focus:text-white cursor-pointer p-2">Domestic Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-boost-dark">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4}
                              placeholder="Tell us about your project..." 
                              className="focus:ring-boost-orange focus:border-boost-orange"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-boost-orange hover:bg-boost-orange-light text-white px-8 py-4 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-boost-dark mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="w-12 h-12 bg-boost-orange/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${info.icon} text-boost-orange`}></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-boost-dark mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.primary}</p>
                      {info.secondary && (
                        <p className="text-sm text-boost-orange whitespace-pre-line">{info.secondary}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-heading font-bold text-boost-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/people/Boost-Electrical/61555036015241/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/boostelectricalltd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://www.google.com/search?sa=X&sca_esv=6ce0cdcc7f2b4c2a&hl=en-GB&authuser=1&nirf=Boost%20Electricity&biw=2048&bih=983&sxsrf=ADLYWIJumGCZRk2q0XYdnedOdEZXyKnS_Q%3A1731269344415&q=Boost%20Electrical&stick=H4sIAAAAAAAAAONgU1I1qDAySktJNE1NMUoyTTZKNDG0MqhISgEyjQwSDVMNTIBM00WsAk75-cUlCq45qcklRZnJiTkAmGxKNDwAAAA&mat=CT6Ees0wsz6Q&ved=2ahUKEwiZ8qLyyNKJAxXDXUEAHSAwI_cQrMcEegQIFBAD&sei=zIhFaJzPAv-9hbIP8uz24Q4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-boost-orange hover:bg-boost-orange-light rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>

            {/* Guarantee Badge */}
            <Card className="bg-boost-orange/10 text-center">
              <CardContent className="p-6">
                <i className="fas fa-shield-alt text-boost-orange text-3xl mb-3"></i>
                <h4 className="font-heading font-bold text-boost-dark mb-2">Our Guarantee</h4>
                <p className="text-gray-600">
                  Free quote within 24 hours<br />
                  No hidden fees<br />
                  Fully insured & certified
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
