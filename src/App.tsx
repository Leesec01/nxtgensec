import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AwMate from "./pages/AwMate.tsx";
import Development from "./pages/Development.tsx";
import Cybersecurity from "./pages/Cybersecurity.tsx";
import Internships from "./pages/Internships.tsx";
import Updates from "./pages/Updates.tsx";
import Docs from "./pages/Docs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/awmate" element={<AwMate />} />
          <Route path="/development" element={<Development />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
