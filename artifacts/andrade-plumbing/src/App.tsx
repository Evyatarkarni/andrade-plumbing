import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceAreas from "@/pages/ServiceAreas";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileFAB } from "@/components/MobileFAB";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
              <MobileFAB />
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
      {/* Schema Markup for LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Andrade Plumbing & Rooter",
          "telephone": "+18187144581",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6355 De Soto Ave",
            "addressLocality": "Woodland Hills",
            "addressRegion": "CA",
            "postalCode": "91367"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.1862,
            "longitude": -118.5910
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "areaServed": ["Woodland Hills", "Calabasas", "Tarzana", "West Hills", "Canoga Park", "Encino", "Sherman Oaks", "Reseda"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "27"
          }
        })
      }} />
    </HelmetProvider>
  );
}

export default App;
