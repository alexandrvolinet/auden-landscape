import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { buildSrcSet, buildSizes } from '../utils/images';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
      }, 5000);
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isHovered, setCurrentIndex]);

  return (
    <section id="projects" className="bg-warm-beige py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="flex flex-col space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown">
              OUR ARCHIVE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-brown">
              Featured Landscapes
            </h2>
            <div className="h-0.5 w-12 bg-golden-brown" />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              id="carousel-prev-btn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-darker-brown text-darker-brown hover:bg-darker-brown hover:text-brand-white transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              id="carousel-next-btn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-darker-brown text-darker-brown hover:bg-darker-brown hover:text-brand-white transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-112.5 md:h-150 w-full overflow-hidden rounded-3xl shadow-xl"
        >
          <motion.div
            className="flex h-full"
            animate={{ x: -(currentIndex * 100) + '%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="relative min-w-full h-full overflow-hidden rounded-3xl"
              >
                <img
                  src={project.imageUrl}
                  srcSet={buildSrcSet(project.imageUrl)}
                  sizes={buildSizes()}
                  alt={`${project.title} landscape architecture design`}
                  referrerPolicy="no-referrer"
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/95 via-[#2C1810]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-light-beige/90 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/5">
                        {project.category}
                      </span>
                      <span className="text-xs text-light-beige/70">
                        {project.year} &bull; {project.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl font-bold text-brand-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-light-beige hover:text-white group border-b border-transparent hover:border-white pb-1 font-semibold text-sm transition-all focus:outline-none"
                    >
                      View Project Details
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center items-center space-x-3">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex items-center justify-center h-11 min-w-11 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-golden-brown'
                    : 'w-2.5 bg-light-beige hover:bg-golden-brown/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
