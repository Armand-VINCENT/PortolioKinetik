import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { GallerySection } from "./components/GallerySection";
import { MarqueeSection } from "./components/MarqueeSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { ProjectDetail } from "./components/ProjectDetail";
import { projects } from "./data/projects";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  
  const selectedProject = selectedProjectId 
    ? projects.find(p => p.id === selectedProjectId) 
    : null;

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProjectId(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F4F0' }}>
      <HeroSection />
      <GallerySection onProjectClick={setSelectedProjectId} />
      <MarqueeSection />
      <ServicesSection />
      <AboutSection />
      <ContactFooter />
    </div>
  );
}