import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="About Ivan Andrade | Woodland Hills Master Plumber | Family-Owned"
        description="Meet Ivan Andrade, your neighborhood plumber in Woodland Hills. Honest pricing, family-owned values, and decades of plumbing expertise."
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8 leading-tight">
              Meet Ivan — Your Neighborhood Plumber
            </h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born and raised in the San Fernando Valley, Ivan Andrade has spent his career solving plumbing problems for his neighbors. He founded Andrade Plumbing &amp; Rooter because he was tired of seeing homeowners get taken advantage of by large plumbing companies with technicians on commission and prices designed to maximize the invoice — not the repair.
              </p>
              <p>
                Ivan is a licensed master plumber who handles every job personally or supervises closely. He's known for showing up on time, explaining exactly what's wrong before touching anything, and giving you the real price upfront — not after the work is done. His Google reviews consistently mention his kindness, honesty, and the fact that he treats every home like his own.
              </p>
              <p>
                When he's not fixing pipes, Ivan is a family man — a dad who understands what it means when something goes wrong at home. That's why he answers the phone at 2am. That's why there's no extra charge for nights and weekends. And that's why, once you've used Andrade Plumbing, you'll never call anyone else.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-muted border border-border px-5 py-3 rounded-full text-primary font-medium flex items-center gap-2">
                <span className="text-yellow-500 text-xl leading-none">⭐</span> 5.0 Stars
              </div>
              <div className="bg-muted border border-border px-5 py-3 rounded-full text-primary font-medium flex items-center gap-2">
                <span className="text-green-500 text-xl leading-none">✅</span> Licensed &amp; Insured
              </div>
              <div className="bg-muted border border-border px-5 py-3 rounded-full text-primary font-medium flex items-center gap-2">
                <span className="text-blue-500 text-xl leading-none">🏠</span> Family-Owned
              </div>
              <div className="bg-muted border border-border px-5 py-3 rounded-full text-primary font-medium flex items-center gap-2">
                <span className="text-secondary text-xl leading-none">⏰</span> 24/7 Available
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-md text-lg transition-all"
              >
                Work with Ivan
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" 
                alt="Ivan Andrade - Master Plumber" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-display font-bold text-3xl">Ivan Andrade</p>
                <p className="text-secondary font-bold uppercase tracking-wider text-sm mt-2">Owner &amp; Master Plumber</p>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-4 border-secondary rounded-3xl opacity-30 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
