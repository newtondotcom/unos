import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Configurateur from "@/pages/Configurateur";
import Details from "@/pages/Details";
import NotFound from "@/pages/NotFound";
import Rack from "@/pages/Rack";


const App = () => (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/configurateur" element={<Configurateur />} />
            <Route path="/details" element={<Details />} />
            <Route path="/rack" element={<Rack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;
