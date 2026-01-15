import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    id: 1,
    name: "WEB DESIGN & DEVELOPMENT",
    description: "Crafting responsive, high-performance websites",
    image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY4Mzk2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "MOTION GRAPHICS",
    description: "Dynamic animations and video content",
    image: "https://images.unsplash.com/photo-1764437180200-f0fd57fa15d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFic3RyYWN0fGVufDF8fHx8MTc2ODQ1OTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "BRAND IDENTITY",
    description: "Complete visual identity systems",
    image: "https://images.unsplash.com/photo-1654865433650-23e71f161b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2ODQ1NTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "PRINT & EDITORIAL",
    description: "Magazines, posters, and print collateral",
    image: "https://images.unsplash.com/photo-1639413888253-32ff01caea22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzY4NDY0OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "ART DIRECTION",
    description: "Creative strategy and visual storytelling",
    image: "https://images.unsplash.com/photo-1489375699743-53956b35d22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwbmVvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3Njg0NjQ5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: '#F4F4F0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 
          className="font-black tracking-tighter"
          style={{ 
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            color: '#000000',
            letterSpacing: '-0.03em'
          }}
        >
          SERVICES
        </h2>
        <div className="h-2 w-32 mt-4" style={{ backgroundColor: '#BFFF0B' }} />
      </motion.div>

      <div className="grid grid-cols-1 gap-0">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            className="relative border-b-4 border-black py-8 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 
                  className="font-black tracking-tight transition-colors duration-300"
                  style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                    color: hoveredService === service.id ? '#0047FF' : '#000000',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-mono mt-2 transition-opacity duration-300"
                  style={{ 
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    color: '#000000',
                    opacity: hoveredService === service.id ? 1 : 0.6
                  }}
                >
                  {service.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: hoveredService === service.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block w-12 h-12 border-4 border-black flex items-center justify-center"
                style={{ backgroundColor: hoveredService === service.id ? '#BFFF0B' : 'transparent' }}
              >
                <span className="font-black" style={{ fontSize: '1.5rem' }}>→</span>
              </motion.div>
            </div>

            {/* Preview image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: hoveredService === service.id ? 1 : 0,
                scale: hoveredService === service.id ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-60 border-4 border-black overflow-hidden pointer-events-none hidden lg:block"
              style={{ 
                zIndex: 10,
                boxShadow: '8px 8px 0px #0047FF'
              }}
            >
              <ImageWithFallback
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
