import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { getProjects } from "../api/services/projects";
import { getImageUrl } from "../api/helpers";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";

const ProjectSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-card overflow-hidden animate-pulse">
    <div className="h-56 bg-gray-200" />
    <div className="p-6">
      <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-100 rounded w-full mb-1" />
      <div className="h-3 bg-gray-100 rounded w-2/3 mb-4" />
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-100 rounded-full w-16" />
        <div className="h-6 bg-gray-100 rounded-full w-16" />
        <div className="h-6 bg-gray-100 rounded-full w-16" />
      </div>
    </div>
  </div>
);

const OurWork = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <SEO
        title={pageSEO.ourWork.title}
        description={pageSEO.ourWork.description}
        canonicalUrl="/our-work"
      />
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0A500', marginBottom: 8 }}>
            Our Work
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Projects We're Proud Of
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            A selection of work from codeanew and our founders — built with care, delivered with precision.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {error && (
            <p className="text-center text-muted py-8">Unable to load projects.</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {loading
              ? Array.from({ length: 2 }).map((_, i) => <ProjectSkeleton key={i} />)
              : projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-card overflow-hidden group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                  >
                    {project.thumbnail ? (
                      <img
                        src={getImageUrl(project.thumbnail)}
                        alt={project.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-56 bg-bg-light flex items-center justify-center">
                        <span className="text-sm font-semibold text-muted">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div className="p-6">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                        {project.category}
                      </span>
                      <h2 className="text-xl font-bold text-heading mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                        {project.short}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {(project.technologies || []).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-bg-light text-muted border border-gray-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted">
                          {project.industry} · {project.year}
                        </span>
                        <Link
                          to={`/our-work/${project.slug}`}
                          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                        >
                          View Project →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="bg-navy rounded-2xl p-10 text-center mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Have a project in mind?
            </h2>
            <p className="text-slate mb-6">
              Let's talk about what you want to build.
            </p>
            <Link to="/contact-us" className="btn-theme">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
