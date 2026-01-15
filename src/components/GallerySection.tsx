import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function GallerySection({ onProjectClick }: { onProjectClick: (projectId: number) => void }) {
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
          THE WORKS
        </h2>
        <div className="h-2 w-32 mt-4" style={{ backgroundColor: '#0047FF' }} />
      </motion.div>

      <Masonry columnsCount={3} gutter="1.5rem">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={() => onProjectClick(item.id)}
            className="border-4 border-black bg-white overflow-hidden cursor-pointer group"
            style={{ 
              height: item.aspectRatio === "portrait" ? "500px" : 
                      item.aspectRatio === "landscape" ? "300px" : "400px",
              boxShadow: '6px 6px 0px #000000'
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
              >
                <span 
                  className="font-mono tracking-wider mb-2"
                  style={{ color: '#BFFF0B', fontSize: '0.75rem' }}
                >
                  [{item.category}]
                </span>
                <h3 
                  className="font-black tracking-tight"
                  style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
}