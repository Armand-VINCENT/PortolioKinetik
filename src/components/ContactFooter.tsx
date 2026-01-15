import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export function ContactFooter() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-black" style={{ backgroundColor: '#000000' }}>
      {/* Main contact section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8"
      >
        <div className="flex flex-col items-start gap-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black tracking-tighter"
            style={{ 
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              color: '#BFFF0B',
              letterSpacing: '-0.02em'
            }}
          >
            LET'S CREATE<br/>SOMETHING AMAZING
          </motion.h2>

          {/* Massive email */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <a 
              href="mailto:hello@digitalcraftsman.com"
              className="group block"
            >
              <motion.div
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
                className="font-black tracking-tighter break-all leading-none flex items-center gap-4"
                style={{ 
                  fontSize: 'clamp(2rem, 8vw, 8rem)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.05em'
                }}
              >
                HELLO@
                <span style={{ color: '#0047FF' }}>DIGITAL</span>
                <span style={{ color: '#BFFF0B' }}>CRAFTSMAN</span>
                .COM
                <motion.div
                  className="inline-block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight 
                    className="w-16 h-16 md:w-24 md:h-24"
                    style={{ color: '#BFFF0B' }}
                  />
                </motion.div>
              </motion.div>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@digitalcraftsman.com"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border-4 border-white px-8 py-4 font-black tracking-tight flex items-center gap-4 transition-colors duration-300 hover:bg-white"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#FFFFFF'
            }}
          >
            <Mail className="w-6 h-6" />
            START A PROJECT
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </div>
      </motion.div>

      {/* Footer bottom */}
      <div className="border-t-4 border-white px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 font-mono tracking-wide"
            style={{ fontSize: '1rem' }}
          >
            {['INSTAGRAM', 'BEHANCE', 'DRIBBBLE', 'LINKEDIN'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -4 }}
                className="transition-colors duration-300"
                style={{ 
                  color: index % 2 === 0 ? '#0047FF' : '#BFFF0B'
                }}
              >
                {social}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono tracking-wide"
            style={{ color: '#FFFFFF', fontSize: '0.875rem' }}
          >
            © 2026 DIGITAL CRAFTSMAN. ALL RIGHTS RESERVED.
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        </svg>
      </div>
    </footer>
  );
}
