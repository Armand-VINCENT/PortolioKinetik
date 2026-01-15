import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  project: {
    id: number;
    type: string;
    title: string;
    category: string;
    image: string;
    description: string;
    client: string;
    year: string;
    services: string[];
    images: string[];
    challenge: string;
    solution: string;
    results: string[];
  };
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: '#F4F4F0' }}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-10 border-b-4 border-black px-4 md:px-8 py-6"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="flex items-center justify-between">
          <motion.button
            onClick={onClose}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 font-black tracking-tight border-4 border-white px-6 py-3"
            style={{ 
              fontSize: '1.25rem',
              color: '#FFFFFF',
              backgroundColor: 'transparent'
            }}
          >
            <ArrowLeft className="w-6 h-6" />
            BACK
          </motion.button>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 font-black tracking-tight border-4 px-6 py-3"
            style={{ 
              fontSize: '1.25rem',
              color: '#000000',
              backgroundColor: '#BFFF0B',
              borderColor: '#BFFF0B'
            }}
          >
            VISIT SITE
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      <div className="px-4 md:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <span 
              className="font-mono tracking-wider px-4 py-2 border-4 border-black"
              style={{ 
                backgroundColor: '#0047FF',
                color: '#FFFFFF',
                fontSize: '0.875rem'
              }}
            >
              [{project.category}]
            </span>
            <span 
              className="font-mono tracking-wider px-4 py-2 border-4 border-black"
              style={{ 
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '0.875rem'
              }}
            >
              {project.year}
            </span>
          </div>

          <h1 
            className="font-black tracking-tighter mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              color: '#000000',
              letterSpacing: '-0.05em',
              lineHeight: '0.9'
            }}
          >
            {project.title}
          </h1>

          <p 
            className="font-mono max-w-3xl"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#000000',
              lineHeight: '1.6'
            }}
          >
            {project.description}
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-4 border-black mb-16 overflow-hidden"
          style={{ 
            aspectRatio: '16/9',
            boxShadow: '12px 12px 0px #0047FF'
          }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="border-4 border-black p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5" />
              <h3 className="font-black tracking-tight" style={{ fontSize: '1.25rem' }}>CLIENT</h3>
            </div>
            <p className="font-mono" style={{ fontSize: '1rem' }}>{project.client}</p>
          </div>

          <div className="border-4 border-black p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5" />
              <h3 className="font-black tracking-tight" style={{ fontSize: '1.25rem' }}>YEAR</h3>
            </div>
            <p className="font-mono" style={{ fontSize: '1rem' }}>{project.year}</p>
          </div>

          <div className="border-4 border-black p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-3">
              <ExternalLink className="w-5 h-5" />
              <h3 className="font-black tracking-tight" style={{ fontSize: '1.25rem' }}>SERVICES</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span 
                  key={index}
                  className="font-mono px-2 py-1 border-2 border-black"
                  style={{ 
                    fontSize: '0.75rem',
                    backgroundColor: index % 2 === 0 ? '#BFFF0B' : '#0047FF',
                    color: index % 2 === 0 ? '#000000' : '#FFFFFF'
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 
              className="font-black tracking-tight mb-4 border-b-4 border-black pb-2"
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                color: '#000000'
              }}
            >
              THE CHALLENGE
            </h2>
            <p 
              className="font-mono leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#000000'
              }}
            >
              {project.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 
              className="font-black tracking-tight mb-4 border-b-4 pb-2"
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                color: '#000000',
                borderColor: '#0047FF'
              }}
            >
              THE SOLUTION
            </h2>
            <p 
              className="font-mono leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#000000'
              }}
            >
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Additional Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="border-4 border-black overflow-hidden"
              style={{ 
                aspectRatio: index % 2 === 0 ? '4/3' : '3/4',
                boxShadow: '8px 8px 0px #000000'
              }}
            >
              <ImageWithFallback
                src={img}
                alt={`${project.title} detail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-4 border-black p-8 md:p-12"
          style={{ backgroundColor: '#000000' }}
        >
          <h2 
            className="font-black tracking-tight mb-8"
            style={{ 
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: '#BFFF0B'
            }}
          >
            RESULTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <div 
                key={index}
                className="border-4 p-6 text-center"
                style={{ 
                  backgroundColor: index === 0 ? '#0047FF' : index === 1 ? '#BFFF0B' : '#FFFFFF',
                  borderColor: '#FFFFFF'
                }}
              >
                <p 
                  className="font-black tracking-tight"
                  style={{ 
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                    color: index === 0 ? '#FFFFFF' : '#000000'
                  }}
                >
                  {result}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-black tracking-tight border-4 border-black px-12 py-6"
            style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              color: '#000000',
              backgroundColor: '#BFFF0B'
            }}
          >
            BACK TO ALL PROJECTS →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
