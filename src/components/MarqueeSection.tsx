import { motion } from "motion/react";

export function MarqueeSection() {
  const services = [
    "WEB DESIGN",
    "MOTION GRAPHICS",
    "BRAND IDENTITY",
    "UI/UX DESIGN",
    "VIDEO PRODUCTION",
    "PRINT DESIGN",
    "ART DIRECTION",
    "CREATIVE STRATEGY",
  ];

  return (
    <div className="py-12 border-y-4 border-black overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="font-black tracking-tighter inline-block"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: index % 2 === 0 ? '#0047FF' : '#BFFF0B',
              letterSpacing: '-0.02em'
            }}
          >
            {service} •
          </span>
        ))}
      </motion.div>
    </div>
  );
}
