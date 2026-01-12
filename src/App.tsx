import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "aos/dist/aos.css";
import Index from "./pages/Index";
import About from "./pages/About";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurDNA from "./pages/OurDNA";
import CustomRequest from "./pages/CustomRequest";
import ProjectRequest from "./pages/ProjectRequest";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-dna" element={<OurDNA />} />
            <Route path="/services" element={<Services />} />
            <Route path="/custom-request" element={<CustomRequest />} />
            <Route path="/project-request" element={<ProjectRequest />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
