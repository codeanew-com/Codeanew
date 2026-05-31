import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { getBlogPosts } from "../api/services/blog";
import { getImageUrl } from "../api/helpers";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";

const BlogSkeleton = () => (
  <div className="bg-white rounded-xl shadow-card overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200" />
    <div className="p-5">
      <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-100 rounded w-full mb-1" />
      <div className="h-3 bg-gray-100 rounded w-2/3 mb-4" />
      <div className="flex justify-between">
        <div className="h-3 bg-gray-100 rounded w-1/4" />
        <div className="h-3 bg-gray-100 rounded w-1/4" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogPosts()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SEO
        title={pageSEO.blog.title}
        description={pageSEO.blog.description}
        canonicalUrl="/blog"
      />
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4 pt-8">
        <div className="section-title">
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0A500', marginBottom: 8 }}>
            Insights &amp; Resources
          </div>
          <h1>Practical guides for businesses building with technology.</h1>
        </div>

        {error && (
          <p className="text-center text-muted py-8">
            Unable to load posts.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
            : posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  {post.thumbnail ? (
                    <img
                      src={getImageUrl(post.thumbnail)}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="h-48 bg-bg-light flex items-center justify-center">
                      <span className="text-sm font-semibold text-gold px-3 py-1 rounded-full bg-amber-50">
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold text-heading mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted">
                        {new Date(post.date_created).toLocaleDateString('en-AE', {
                          year: 'numeric', month: 'short', day: 'numeric',
                        })}
                        {post.read_time && ` · ${post.read_time}`}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
