import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your issue")
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Formspree submission
      const response = await fetch("https://formspree.io/f/xvgzvwoq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Contact Andrade Plumbing | (818) 714-4581 | Woodland Hills, CA"
        description="Contact Andrade Plumbing & Rooter for 24/7 emergency service in Woodland Hills. Send us a message or call (818) 714-4581 for immediate assistance."
      />

      <div className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Get in Touch — We Answer 24/7
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">We're ready to help right now. Call for immediate emergencies or message us for quotes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <a 
                href="tel:+18187144581" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-bold py-6 px-10 rounded-xl text-2xl shadow-xl hover:-translate-y-1 transition-all"
                data-testid="contact-call-button"
              >
                <Phone size={28} />
                Call (818) 714-4581
              </a>
            </div>

            <div className="bg-muted p-8 rounded-2xl border border-border space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xl mb-1">Our Location</h3>
                  <p className="text-muted-foreground text-lg">6355 De Soto Ave<br />Woodland Hills, CA 91367</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xl mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-lg text-secondary font-bold">Open 24 Hours &middot; 7 Days a Week</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary text-xl mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Woodland Hills", "Calabasas", "Tarzana", "West Hills", "Canoga Park", "Encino", "Sherman Oaks", "Reseda"].map(city => (
                  <span key={city} className="bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center space-y-4">
                  <CheckCircle2 className="mx-auto text-green-500" size={48} />
                  <h3 className="text-xl font-bold text-green-800">Message Sent!</h3>
                  <p className="text-green-700">We've received your request and will get back to you shortly. If this is an emergency, please call us directly.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" className="bg-muted/50 border-border" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(818) 555-0123" {...field} data-testid="input-phone" className="bg-muted/50 border-border" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} data-testid="input-email" className="bg-muted/50 border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">What can we help with?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service" className="bg-muted/50 border-border">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Emergency Plumbing">Emergency Plumbing</SelectItem>
                              <SelectItem value="Water Heater">Water Heater</SelectItem>
                              <SelectItem value="Drain Cleaning">Drain Cleaning</SelectItem>
                              <SelectItem value="Slab Leak">Slab Leak</SelectItem>
                              <SelectItem value="Sewer Line">Sewer Line</SelectItem>
                              <SelectItem value="Repiping">Repiping</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
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
                          <FormLabel className="text-primary font-bold">Message details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your plumbing issue..." 
                              className="min-h-[120px] bg-muted/50 border-border resize-none" 
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg flex items-center gap-2"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8!2d-118.5910!3d34.1862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDExJzEwLjMiTiAxMTjCsDM1JzI3LjYiVw!5e0!3m2!1sen!2sus!4v1" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Andrade Plumbing Location" 
        />
      </div>
    </div>
  );
}
