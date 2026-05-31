import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { getProject, getProjects } from "../api/services/projects";
import { getImageUrl } from "../api/helpers";
import SEO from "../components/SEO";

const OurWorkPost = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProject(slug);
        if (!data) { setNotFound(true); return; }
        setProject(data);
        const all = await getProjects();
        setRelated(all.filter((p) => p.slug !== slug).slice(0, 2));
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return (
    <div className="container mx-auto px-4 pt-32 pb-20 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6" />
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-8" />
      <div className="h-72 bg-gray-200 rounded-2xl mb-8" />
    </div>
  );

  if (notFound) return <Navigate to="/our-work" replace />;

  return (
    <>
      <SEO
        title={project.seo_title || `${project.title} — codeanew`}
        description={project.seo_description || project.short}
        ogImage={project.seo_image
          ? `/directus-assets/${project.seo_image}`
          : project.thumbnail
          ? `/directus-assets/${project.thumbnail}`
          : null}
        canonicalUrl={`/our-work/${project.slug}`}
      />
      <div className="container mx-auto px-4 pt-32 pb-20">
      <Link
        to="/our-work"
        className="text-sm text-muted hover:text-gold transition-colors flex items-center gap-2 mb-8"
      >
        ← Back to Our Work
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-8/12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted mb-6">
            <span>{project.industry}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.client}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {(project.technologies || []).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-bg-light text-muted border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.thumbnail ? (
            <img
              src={getImageUrl(project.thumbnail)}
              alt={project.title}
              className="w-full h-72 object-cover rounded-2xl mb-10"
            />
          ) : (
            <div className="w-full h-72 bg-bg-light rounded-2xl flex items-center justify-center mb-10">
              <span className="text-muted font-semibold">{project.title}</span>
            </div>
          )}

          {project.overview && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-heading mb-3">Overview</h3>
              <p className="text-muted leading-relaxed">{project.overview}</p>
            </div>
          )}

          {project.problem && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-heading mb-3 border-l-4 border-gold pl-4">
                The Problem
              </h3>
              <p className="text-muted leading-relaxed">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-heading mb-3 border-l-4 border-gold pl-4">
                The Solution
              </h3>
              <p className="text-muted leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.result && (
            <div className="bg-navy rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-3">The Result</h3>
              <p className="text-slate leading-relaxed">{project.result}</p>
            </div>
          )}
        </div>

        <div className="w-full lg:w-4/12 lg:sticky lg:top-28">
          <div className="bg-bg-light rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-heading mb-4">Project Details</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Industry", value: project.industry },
                { label: "Year",     value: project.year },
                { label: "Client",   value: project.client },
              ].map(({ label, value }) => value && (
                <div key={label}>
                  <span className="text-xs text-muted uppercase tracking-wider">{label}</span>
                  <p className="text-sm font-semibold text-heading mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-light rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-heading mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {(project.technologies || []).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-white text-muted border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-xl p-5">
            <h4 className="font-bold text-white mb-2">Like what you see?</h4>
            <p className="text-slate text-sm mb-4">Let's build something together.</p>
            <Link to="/contact-us" className="btn-theme w-full text-center py-3 block">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-bold text-heading mb-6">More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/our-work/${p.slug}`}
                className="bg-white rounded-xl shadow-card p-5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                  {p.category}
                </span>
                <h4 className="text-base font-bold text-heading">{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default OurWorkPost;
