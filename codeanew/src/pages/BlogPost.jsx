import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { getBlogPost, getBlogPosts } from "../api/services/blog";
import { getImageUrl } from "../api/helpers";
import SEO from "../components/SEO";

marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    heading({ text, depth }) {
      const classes = {
        1: "text-3xl font-bold text-heading mt-10 mb-4",
        2: "text-2xl font-bold text-heading mt-8 mb-3",
        3: "text-lg font-bold text-heading mt-6 mb-2",
        4: "text-base font-bold text-heading mt-4 mb-2",
        5: "text-sm font-bold text-heading mt-4 mb-1",
        6: "text-xs font-bold text-heading mt-4 mb-1",
      };
      return `<h${depth} class="${classes[depth]}">${text}</h${depth}>`;
    },
    paragraph({ text }) {
      return `<p class="text-muted leading-relaxed mb-4">${text}</p>`;
    },
    strong({ text }) {
      return `<strong class="text-heading font-semibold">${text}</strong>`;
    },
    em({ text }) {
      return `<em class="italic">${text}</em>`;
    },
    del({ text }) {
      return `<del class="line-through">${text}</del>`;
    },
    link({ href, text }) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-gold hover:underline">${text}</a>`;
    },
    image({ href, text }) {
      return `<img src="${href}" alt="${text}" class="w-full rounded-xl my-6" />`;
    },
    list({ body, ordered }) {
      const tag = ordered ? "ol" : "ul";
      const cls = ordered ? "list-decimal" : "list-disc";
      return `<${tag} class="${cls} ml-6 mb-4 text-muted space-y-1">${body}</${tag}>`;
    },
    listitem({ text }) {
      return `<li class="leading-relaxed">${text}</li>`;
    },
    blockquote({ text }) {
      return `<blockquote class="border-l-4 border-gold pl-4 my-6 text-muted italic">${text}</blockquote>`;
    },
    code({ text }) {
      return `<pre class="bg-bg-light rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-heading font-mono">${text}</code></pre>`;
    },
    codespan({ text }) {
      return `<code class="bg-bg-light text-heading font-mono text-sm px-1.5 py-0.5 rounded">${text}</code>`;
    },
    table({ header, rows }) {
      return `<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border-collapse">${header}${rows}</table></div>`;
    },
    tablerow({ text }) {
      return `<tr class="border-b border-gray-100">${text}</tr>`;
    },
    tablecell({ text, header }) {
      return header
        ? `<th class="px-4 py-2 font-semibold text-heading bg-bg-light">${text}</th>`
        : `<td class="px-4 py-2 text-muted">${text}</td>`;
    },
  },
});

const renderContent = (content) => {
  if (!content) return "";
  return marked(content);
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getBlogPost(slug);
        if (!data) { setNotFound(true); return; }
        setPost(data);
        const all = await getBlogPosts();
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
    <div className="container mx-auto px-4 pt-32 pb-20 max-w-3xl animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6" />
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-3 bg-gray-100 rounded w-1/3 mb-8" />
      <div className="h-64 bg-gray-200 rounded-2xl mb-8" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-3 bg-gray-100 rounded w-full mb-3" />
      ))}
    </div>
  );

  if (notFound) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO
        title={post.seo_title || `${post.title} — codeanew`}
        description={post.seo_description || post.excerpt}
        ogImage={post.seo_image
          ? `/directus-assets/${post.seo_image}`
          : post.thumbnail
          ? `/directus-assets/${post.thumbnail}`
          : null}
        ogType="article"
        canonicalUrl={`/blog/${post.slug}`}
      />
      <div className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
      <Link
        to="/blog"
        className="text-sm text-muted hover:text-gold transition-colors flex items-center gap-2 mb-8"
      >
        ← Back to Insights
      </Link>

      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-4 inline-block">
        {post.category}
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold text-heading mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-muted mb-8">
        <span>
          {new Date(post.date_created).toLocaleDateString('en-AE', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </span>
        {post.read_time && <span>· {post.read_time}</span>}
      </div>

      <hr className="border-gray-100 mb-8" />

      {post.thumbnail && (
        <img
          src={getImageUrl(post.thumbnail)}
          alt={post.title}
          className="w-full h-72 object-cover rounded-2xl mb-10"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(renderContent(post.content), { ADD_ATTR: ["target"] }) }}
      />

      <hr className="border-gray-100 my-12" />

      <div className="bg-bg-light rounded-xl p-8 text-center mb-16">
        <h3 className="text-xl font-bold text-heading mb-2">
          Ready to start your project?
        </h3>
        <p className="text-muted mb-6">
          Book a free call and we'll get back to you within 24 hours.
        </p>
        <Link to="/contact-us" className="btn-theme">
          Start Your Project
        </Link>
      </div>

      {related.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-heading mb-6">More Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="bg-white rounded-xl shadow-card p-5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-gold mb-3 inline-block">
                  {p.category}
                </span>
                <h4 className="text-base font-bold text-heading line-clamp-2">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default BlogPost;
