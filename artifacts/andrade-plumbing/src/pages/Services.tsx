import React from "react";
import { AlertTriangle, Flame, Droplets, Search, GitMerge, Wrench, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "emergency",
      icon: AlertTriangle,
      title: "Emergency Plumbing",
      desc1: "When water is pouring into your home, you don't have time to wait for normal business hours. Our emergency plumbing response team is on standby 24 hours a day, 7 days a week, 365 days a year.",
      desc2: "We arrive quickly with fully stocked trucks ready to solve the problem on the spot. From burst pipes to major overflows, we contain the damage and perform lasting repairs.",
      bullets: [
        "Burst pipe repair",
        "Emergency water shutoff",
        "Flood cleanup coordination",
        "Same-day service guarantee",
        "Available nights/weekends/holidays",
        "No emergency surcharge"
      ]
    },
    {
      id: "water-heater",
      icon: Flame,
      title: "Water Heater Repair & Install",
      desc1: "A cold shower is a terrible way to start the day. Whether your water heater is leaking, making strange noises, or simply not producing hot water, our master plumbers can diagnose the issue quickly.",
      desc2: "We service all major brands of traditional tank heaters and modern tankless systems. If a replacement is needed, we'll guide you through your options and can often complete the installation the very same day.",
      bullets: [
        "Gas & electric water heaters",
        "Tankless water heater installation",
        "Anode rod replacement",
        "Thermostat repair",
        "Same-day replacement available",
        "1-year labor warranty"
      ]
    },
    {
      id: "drain-cleaning",
      icon: Droplets,
      title: "Drain Cleaning & Hydro Jetting",
      desc1: "Stubborn clogs in your kitchen, bathroom, or main sewer line can bring your home to a standstill. Our advanced drain cleaning services clear the toughest blockages.",
      desc2: "For severe grease buildup or heavy root intrusion, we use high-pressure hydro jetting to scour the inside of your pipes, restoring them to a like-new condition.",
      bullets: [
        "Kitchen & bathroom drains",
        "Main sewer line clearing",
        "Hydro jetting service",
        "Video pipe inspection",
        "Grease buildup removal",
        "Root intrusion clearing"
      ]
    },
    {
      id: "slab-leak",
      icon: Search,
      title: "Slab Leak Detection",
      desc1: "A leak under your home's concrete foundation can cause massive structural damage if left unchecked. Signs include unexplained high water bills, warm spots on the floor, or the sound of running water when nothing is turned on.",
      desc2: "We use non-invasive electronic leak detection and thermal imaging to pinpoint the exact location of the leak, allowing us to repair or reroute the pipe with minimal disruption to your home.",
      bullets: [
        "Electronic leak detection",
        "Thermal imaging",
        "Concrete cutting & repair",
        "Pipe rerouting options",
        "Insurance documentation",
        "Free estimates"
      ]
    },
    {
      id: "sewer-repair",
      icon: GitMerge,
      title: "Sewer Line Repair",
      desc1: "A backed-up sewer line is a homeowner's worst nightmare. We start every sewer job with a high-resolution video camera inspection so you can see exactly what's causing the problem.",
      desc2: "Whenever possible, we offer trenchless pipe repair methods that fix the line from the inside, saving your landscaping and driveway from being torn up.",
      bullets: [
        "Video sewer inspection",
        "Trenchless pipe repair",
        "Full sewer replacement",
        "Root removal",
        "Clean-out installation",
        "City permit handling"
      ]
    },
    {
      id: "repiping",
      icon: Wrench,
      title: "Whole House Repiping",
      desc1: "Many older homes in the Valley were built with galvanized steel or polybutylene pipes that corrode, leak, and restrict water pressure over time. A whole-house repipe solves these problems permanently.",
      desc2: "We expertly replace your old plumbing with high-quality PEX or copper piping, ensuring clean, high-pressure water flows reliably to every fixture in your home.",
      bullets: [
        "Galvanized steel replacement",
        "PEX repipe installation",
        "Copper piping",
        "Minimal drywall damage",
        "Full permits & inspection",
        "10-year warranty"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Plumbing Services Woodland Hills | Water Heater, Drain, Slab Leak | Andrade"
        description="Comprehensive emergency plumbing services in Woodland Hills. Water heater repair, hydro jetting, slab leak detection, and repiping. 24/7 availability."
      />

      <div className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Plumbing Services in Woodland Hills &amp; Beyond
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Expert solutions for every plumbing problem, handled with honesty and precision.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                <service.icon size={40} />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <h2 className="font-display font-bold text-3xl text-primary mb-6">{service.title}</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>{service.desc1}</p>
                <p>{service.desc2}</p>
              </div>
              <a 
                href="tel:+18187144581" 
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md text-lg transition-all shadow-md hover:-translate-y-0.5"
                data-testid={`service-call-${service.id}`}
              >
                Call Now: (818) 714-4581
              </a>
            </div>

            <div className="lg:col-span-5 bg-muted rounded-2xl p-8 border border-border">
              <h3 className="font-display font-bold text-xl text-primary mb-6">What's Included:</h3>
              <ul className="space-y-4">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Need a service not listed here?</h2>
          <p className="text-lg mb-8 text-white/80">As master plumbers, we handle virtually any plumbing issue. Give us a call and describe your problem.</p>
          <a 
            href="tel:+18187144581" 
            className="inline-block border-2 border-white hover:bg-white hover:text-primary font-bold py-4 px-10 rounded-full text-xl transition-all"
          >
            Discuss Your Issue With Ivan
          </a>
        </div>
      </section>
    </div>
  );
}
