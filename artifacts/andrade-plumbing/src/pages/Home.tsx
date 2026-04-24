import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AlertTriangle, Flame, Droplets, Search, GitMerge, Wrench, Heart, Clock, DollarSign, Shield, Star } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Emergency Plumber Woodland Hills | Andrade Plumbing & Rooter | (818) 714-4581"
        description="Woodland Hills' most trusted 24/7 emergency plumber. Family-owned, licensed & insured. Same-day service across the San Fernando Valley."
      />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden flex items-center min-h-[80vh]">
        <img 
          src="https://images.unsplash.com/photo-1585128792020-803d29415281?w=1920&q=80" 
          alt="Plumbing background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6"
            >
              Woodland Hills' Most Trusted <span className="text-secondary">24/7 Emergency</span> Plumber
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-sans"
            >
              Family-owned. Licensed &amp; insured. Same-day service across the San Fernando Valley.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="tel:+18187144581" 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-md text-center text-lg shadow-lg hover:-translate-y-1 transition-all"
                data-testid="hero-call-button"
              >
                📞 Call Now: (818) 714-4581
              </a>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-md text-center text-lg transition-all"
              >
                Get a Free Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>⭐</span> 5.0 Google Rating
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>🛡️</span> Licensed &amp; Insured
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>⏰</span> Available 24/7
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>🏠</span> Family-Owned
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Our Plumbing Services</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: AlertTriangle, title: "Emergency Plumbing", desc: "Burst pipes, major leaks, overflows. We respond fast — day or night." },
              { icon: Flame, title: "Water Heater Repair & Install", desc: "Hot water out? We repair or replace all makes and models same day." },
              { icon: Droplets, title: "Drain Cleaning & Hydro Jetting", desc: "Clogged drains cleared fast with hydro jetting and snake services." },
              { icon: Search, title: "Slab Leak Detection", desc: "Advanced leak detection under concrete slabs before major damage occurs." },
              { icon: GitMerge, title: "Sewer Line Repair", desc: "Full sewer inspections, repairs, and replacements for lasting results." },
              { icon: Wrench, title: "Whole House Repiping", desc: "Old or corroded pipes? We repipe entire homes with minimal disruption." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-border p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services" className="text-secondary font-bold hover:text-secondary/80 flex items-center gap-1">
                  Learn More <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Andrade */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Why Woodland Hills Trusts Andrade Plumbing</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Family-Owned & Operated", desc: "Ivan treats your home like his own. No shortcuts, no upsells." },
              { icon: Clock, title: "24/7 Emergency Response", desc: "We answer the phone at 3am. No extra charge for nights or weekends." },
              { icon: DollarSign, title: "Upfront Honest Pricing", desc: "You get the exact price before we start. Zero surprises on your bill." },
              { icon: Shield, title: "Licensed Master Plumbers", desc: "Fully licensed, insured, and background-checked for your peace of mind." }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                  <prop.icon size={32} />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-3">{prop.title}</h3>
                <p className="text-muted-foreground text-sm">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 text-lg font-bold text-primary">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
              </div>
              <span>5.0 &middot; 27 Reviews on Google</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Ivan was so sweet. He came out same day, explained everything very clearly with our leak, and made us feel very taken care of. He's the best and we will definitely use him again! As a busy working mom, it makes me feel so grateful to have the help of a kind and knowledgeable person.",
              "Ivan did an outstanding job. He was professional, on time, and very knowledgeable. Not only did he fix the problem quickly, but he also explained what caused it and gave us tips to prevent future issues. His attention to detail and respect for our home really stood out.",
              "We had old cast iron sewer under the house. Ivan came to our house and explained what he can do to help. He is a very good communicator, honest and kind. The cost is reasonable. He is the best plumber in the neighborhood. I highly recommend."
            ].map((quote, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted p-8 rounded-2xl relative"
              >
                <div className="text-secondary text-4xl font-serif absolute top-6 right-6 opacity-20">"</div>
                <div className="flex text-yellow-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-foreground/80 italic mb-6">"{quote}"</p>
                <p className="font-bold text-primary">— Google Review</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Map */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto text-center mb-12">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-display font-bold text-3xl md:text-4xl mb-10"
          >
            Proudly Serving the San Fernando Valley
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {["Woodland Hills", "Calabasas", "Tarzana", "West Hills", "Canoga Park", "Encino", "Sherman Oaks", "Reseda"].map(city => (
              <div key={city} className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur px-6 py-3 rounded-full font-medium">
                {city}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full h-[400px]">
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
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Plumbing Emergency? We're Available Right Now.</h2>
            <p className="text-xl mb-10 opacity-90 font-medium">No extra charge for nights, weekends, or holidays. Call Ivan directly.</p>
            <a 
              href="tel:+18187144581" 
              className="inline-block bg-white text-primary hover:bg-muted font-bold py-5 px-10 rounded-full text-2xl shadow-xl hover:-translate-y-1 transition-all"
              data-testid="cta-call-button"
            >
              📞 Call (818) 714-4581
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
