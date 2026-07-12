import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data';
import { buildSrcSet, buildSizes } from '../utils/images';

interface ProjectPageProps {
  onOpenQuote: () => void;
}

export default function ProjectPage({ onOpenQuote }: ProjectPageProps) {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center flex-col gap-4 bg-warm-beige">
        <Helmet>
          <title>Project Not Found — Auden Landscape Architecture</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="font-serif text-4xl font-bold text-dark-brown">Project Not Found</h1>
        <Link
          to="/"
          className="text-golden-brown hover:text-darker-brown underline text-sm transition-colors"
        >
          Return to Studio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-beige">
      <Helmet>
        <title>{project.title} — Auden Landscape Architecture</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} — Auden Landscape Architecture`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imageUrl} />
        <meta property="og:url" content={`${window.location.origin}/projects/${project.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${project.title} — Auden Landscape Architecture`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.imageUrl} />
      </Helmet>
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={project.imageUrl}
          srcSet={buildSrcSet(project.imageUrl)}
          sizes={buildSizes()}
          alt={`${project.title} landscape architecture project`}
          referrerPolicy="no-referrer"
          width={1600}
          height={1067}
          className="h-full w-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#2C1810]/90 via-[#2C1810]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-light-beige/80 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/5">
              {project.category} &bull; {project.year}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-white mt-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-light-beige mt-3">{project.location}</p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-brown">
              Project Overview
            </h2>
            <p className="text-base leading-relaxed text-warm-brown">{project.overview}</p>
          </div>
          <div className="md:w-72 space-y-6">
            <div className="bg-brand-white border border-light-beige rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-dark-brown mb-4">Project Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-golden-brown">
                    Category
                  </dt>
                  <dd className="text-warm-brown mt-0.5">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-golden-brown">
                    Year
                  </dt>
                  <dd className="text-warm-brown mt-0.5">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-golden-brown">
                    Location
                  </dt>
                  <dd className="text-warm-brown mt-0.5">{project.location}</dd>
                </div>
              </dl>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-golden-brown hover:text-darker-brown text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Archive
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 rounded-full bg-golden-brown px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all duration-300 cursor-pointer"
          >
            Inquire About This Style
          </button>
        </div>
      </div>
    </div>
  );
}
