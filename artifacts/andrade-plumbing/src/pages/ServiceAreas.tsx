import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

export default function ServiceAreas() {
  const cities = [
    {
      name: "Woodland Hills",
      desc: "Our home base. Ivan lives and works right here in Woodland Hills, which means faster response times and deep familiarity with local homes — many built in the 1960s-70s with aging galvanized pipes. Whether it's a slab leak under one of the hills-area homes or a water heater issue in the flats, we're usually there within the hour. We know the local neighborhoods from Malibu Lake to the 101 freeway and everything in between."
    },
    {
      name: "Calabasas",
      desc: "Calabasas homes demand premium service, and that's exactly what Ivan delivers. From gated communities off Las Virgenes Road to custom homes near Mulholland, we understand the unique plumbing challenges of larger Valley estates — from long water line runs to complex irrigation systems. Response time from our Woodland Hills base is typically 15-20 minutes."
    },
    {
      name: "Tarzana",
      desc: "Tarzana has a mix of older Ventura Boulevard-adjacent properties and newer construction, each with different plumbing challenges. Common calls include slow-draining kitchen sinks from grease buildup and water heater replacements in homes where units are overdue. We service the whole 91356 zip code and surrounding areas fast."
    },
    {
      name: "West Hills",
      desc: "West Hills sits at the western edge of the San Fernando Valley, and our crews know every neighborhood from Box Canyon to the areas near the 118 freeway. Older West Hills homes often have cast iron sewer lines in need of replacement. We offer camera inspections and trenchless repair solutions to minimize disruption to yards and driveways."
    },
    {
      name: "Canoga Park",
      desc: "Canoga Park's mix of residential properties and light commercial buildings keeps us busy with everything from apartment building main line clogs to water heater replacements in single-family homes. We work quickly and cleanly, respecting every property we enter. Our response time to Canoga Park is typically under 30 minutes."
    },
    {
      name: "Encino",
      desc: "Encino's affluent neighborhoods along Ventura Boulevard and the hills above expect — and receive — top-tier service. From emergency burst pipe repairs in hillside homes to whole-house repiping of older ranch-style properties, Ivan brings the same attention to detail regardless of the neighborhood. We're trusted by property managers and homeowners alike."
    },
    {
      name: "Sherman Oaks",
      desc: "Sherman Oaks is one of our busiest service areas, with high density of multi-unit buildings and older single-family homes. Common issues include aging sewer lines, leaking water heaters in tight utility closets, and drain backups. We know the area well and pride ourselves on quick arrival times from our Woodland Hills headquarters."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="24/7 Plumber San Fernando Valley | Woodland Hills, Calabasas, Tarzana"
        description="Andrade Plumbing serves the entire San Fernando Valley 24/7 including Woodland Hills, Calabasas, Tarzana, West Hills, Canoga Park, Encino, and Sherman Oaks."
      />

      <div className="bg-primary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl mb-6"
          >
            Serving the San Fernando Valley 24/7
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Andrade Plumbing &amp; Rooter provides emergency plumbing services across the San Fernando Valley. From Woodland Hills to Sherman Oaks, we're just a call away — 24 hours a day, 7 days a week.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cities.map((city, i) => (
            <motion.div 
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                  <MapPin size={24} />
                </div>
                <h2 className="font-display font-bold text-2xl text-primary">{city.name}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {city.desc}
              </p>
              <a 
                href="tel:+18187144581" 
                className="text-secondary font-bold flex items-center gap-2 hover:text-secondary/80 transition-colors"
              >
                Call Now for Service in {city.name} <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-muted text-center border-t border-border">
        <div className="container px-4 mx-auto max-w-2xl">
          <h2 className="font-display font-bold text-3xl text-primary mb-6">Not sure if we cover your area?</h2>
          <p className="text-lg text-muted-foreground mb-8">We likely do! We serve the entire San Fernando Valley and surrounding areas. Contact us to confirm.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-md text-lg transition-all shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
