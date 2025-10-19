import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OnHold from "./pages/OnHold";
import ItemVoando from "./pages/ItemVoando";
import Missing from "./pages/Missing";
import Avarias from "./pages/Avarias";
import NaoCoube from "./pages/NaoCoube";
import Ofensores from "./pages/Ofensores";
import Volumosos from "./pages/Volumosos";
import Backlog from "./pages/Backlog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App rendering...");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/on-hold" element={<OnHold />} />
            <Route path="/item-voando" element={<ItemVoando />} />
            <Route path="/missing" element={<Missing />} />
            <Route path="/avarias" element={<Avarias />} />
            <Route path="/nao-coube" element={<NaoCoube />} />
            <Route path="/ofensores" element={<Ofensores />} />
            <Route path="/volumosos" element={<Volumosos />} />
            <Route path="/backlog" element={<Backlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
