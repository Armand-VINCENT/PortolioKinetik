import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-20" style={{ backgroundColor: '#F4F4F0' }}>
      {/* Background overlapping images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-10 w-48 h-64 md:w-64 md:h-80 border-4 border-black overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY4NDEzODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-32 right-20 w-56 h-56 md:w-72 md:h-72 border-4 border-black overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758157798426-50fbf2697c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzY4NDQ0MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating video thumbnail sticker */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="absolute top-1/3 right-12 md:right-32 w-40 h-28 md:w-56 md:h-36 border-4 border-black bg-black overflow-hidden cursor-pointer"
        style={{ 
          zIndex: 3,
          boxShadow: '8px 8px 0px #0047FF'
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY4NDA0MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Video production"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#BFFF0B' }}>
            <Play className="w-6 h-6 md:w-8 md:h-8 fill-black stroke-black" />
          </div>
        </div>
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 
          className="font-black tracking-tighter leading-none"
          style={{ 
            fontSize: 'clamp(3rem, 15vw, 12rem)',
            color: '#000000',
            textShadow: '6px 6px 0px #0047FF',
            letterSpacing: '-0.05em'
          }}
        >
          DIGITAL
        </h1>
        <h1 
          className="font-black tracking-tighter leading-none mt-[-1rem] md:mt-[-2rem]"
          style={{ 
            fontSize: 'clamp(3rem, 15vw, 12rem)',
            color: '#000000',
            textShadow: '6px 6px 0px #BFFF0B',
            letterSpacing: '-0.05em'
          }}
        >
          CRAFTSMAN
        </h1>
        <p className="mt-8 font-mono tracking-wide" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)', color: '#000000' }}>
          [WEB DESIGN / VIDEO PRODUCTION / GRAPHIC DESIGN]
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0047FF' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
