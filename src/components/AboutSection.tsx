import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#F4F4F0' }}>
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
          ABOUT
        </h2>
        <div className="h-2 w-32 mt-4" style={{ backgroundColor: '#0047FF' }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Collage area with photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main cutout photo */}
          <div 
            className="relative w-full max-w-md border-4 border-black overflow-hidden"
            style={{ 
              aspectRatio: '3/4',
              boxShadow: '12px 12px 0px #BFFF0B'
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677706678623-c417a272c92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDEzNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Creative director portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doodle elements */}
          <svg 
            className="absolute -top-8 -right-8 w-32 h-32"
            viewBox="0 0 100 100"
            style={{ transform: 'rotate(15deg)' }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="#0047FF" strokeWidth="4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#0047FF" strokeWidth="4" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#0047FF" strokeWidth="4" />
          </svg>

          <svg 
            className="absolute -bottom-6 -left-6 w-24 h-24"
            viewBox="0 0 100 100"
            style={{ transform: 'rotate(-25deg)' }}
          >
            <path d="M10 50 L90 50 M50 10 L50 90" stroke="#BFFF0B" strokeWidth="6" />
            <circle cx="50" cy="50" r="15" fill="#BFFF0B" />
          </svg>

          {/* Sticker-like text */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 -right-4 md:-right-12 border-4 border-black px-4 py-2 font-black tracking-tight transform rotate-12"
            style={{ 
              backgroundColor: '#0047FF',
              color: '#FFFFFF',
              fontSize: '1.25rem',
              boxShadow: '4px 4px 0px #000000'
            }}
          >
            AWARD<br/>WINNING
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p 
            className="font-black leading-tight"
            style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            I'm a multidisciplinary creative director specializing in crafting bold digital experiences.
          </p>
          
          <div className="space-y-4">
            <p 
              className="font-mono leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#000000'
              }}
            >
              With 10+ years of experience, I've worked with brands like Nike, Apple, and Google to create award-winning campaigns that push the boundaries of design and technology.
            </p>
            
            <p 
              className="font-mono leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#000000'
              }}
            >
              My work has been featured in Communication Arts, Awwwards, and The FWA. I believe in creating experiences that are not just beautiful, but meaningful and impactful.
            </p>
          </div>

          {/* Stats/badges */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="border-4 border-black p-4 text-center" style={{ backgroundColor: '#BFFF0B' }}>
              <div className="font-black" style={{ fontSize: '2rem', color: '#000000' }}>10+</div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#000000' }}>YEARS</div>
            </div>
            <div className="border-4 border-black p-4 text-center" style={{ backgroundColor: '#0047FF' }}>
              <div className="font-black" style={{ fontSize: '2rem', color: '#FFFFFF' }}>50+</div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#FFFFFF' }}>PROJECTS</div>
            </div>
            <div className="border-4 border-black p-4 text-center" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="font-black" style={{ fontSize: '2rem', color: '#000000' }}>15+</div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#000000' }}>AWARDS</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background doodle */}
      <svg 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10"
        viewBox="0 0 200 200"
      >
        <path 
          d="M20 100 Q50 20 100 50 T180 100 Q150 180 100 150 T20 100" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="8"
        />
      </svg>
    </section>
  );
}
