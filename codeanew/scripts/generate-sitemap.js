import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIRECTUS_URL = process.env.VITE_DIRECTUS_URL
  || "http://localhost:8055";
const SITE_URL = "https://codeanew.com";
const OUTPUT = path.resolve(__dirname, "../public/sitemap.xml");

const today = new Date().toISOString().split("T")[0];

const staticPages = [
  {
    url: "/",
    lastmod: today,
    changefreq: "weekly",
    priority: "1.0",
    comment: "Home — highest priority",
  },
  {
    url: "/services",
    lastmod: today,
    changefreq: "monthly",
    priority: "0.9",
    comment: "Services — high value conversion page",
  },
  {
    url: "/blog",
    lastmod: today,
    changefreq: "daily",
    priority: "0.9",
    comment: "Blog listing — updates as posts are added",
  },
  {
    url: "/contact-us",
    lastmod: today,
    changefreq: "monthly",
    priority: "0.8",
    comment: "Contact — high conversion, stable content",
  },
  {
    url: "/our-work",
    lastmod: today,
    changefreq: "weekly",
    priority: "0.8",
    comment: "Our Work listing — updates as projects are added",
  },
  {
    url: "/about",
    lastmod: today,
    changefreq: "monthly",
    priority: "0.7",
    comment: "About — team changes occasionally",
  },
  {
    url: "/our-process",
    lastmod: today,
    changefreq: "yearly",
    priority: "0.5",
    comment: "Our Process — stable, rarely changes",
  },
  {
    url: "/privacy",
    lastmod: today,
    changefreq: "yearly",
    priority: "0.2",
    comment: "Privacy — changes only when policy updates",
  },
];

const formatUrl = ({ url, lastmod, changefreq, priority, comment }) => `
  <!-- ${comment} -->
  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const pingSearchEngines = async () => {
  // Uncomment on production to notify search engines
  // try {
  //   await axios.get(
  //     `https://www.google.com/ping?sitemap=${SITE_URL}/sitemap.xml`
  //   );
  //   console.log("  ✓ Google pinged");
  // } catch {
  //   console.warn("  ⚠ Google ping failed");
  // }
  // try {
  //   await axios.get(
  //     `https://www.bing.com/ping?sitemap=${SITE_URL}/sitemap.xml`
  //   );
  //   console.log("  ✓ Bing pinged");
  // } catch {
  //   console.warn("  ⚠ Bing ping failed");
  // }
};

const generate = async () => {
  console.log("\n🗺  Generating sitemap...\n");

  try {
    // ─── Fetch blog posts from Directus ───
    console.log("  Fetching blog posts...");
    const blogRes = await axios.get(`${DIRECTUS_URL}/items/blog_posts`, {
      params: {
        filter: { status: { _eq: "published" } },
        fields: ["slug", "date_updated", "date_created"],
        sort: ["-date_created"],
      },
    });
    const blogs = blogRes.data.data || [];
    console.log(`  ✓ Found ${blogs.length} blog posts`);

    // ─── Fetch projects from Directus ───
    console.log("  Fetching projects...");
    const projectRes = await axios.get(`${DIRECTUS_URL}/items/projects`, {
      params: {
        filter: { status: { _eq: "published" } },
        fields: ["slug", "date_created"],
        sort: ["-date_created"],
      },
    });
    const projects = projectRes.data.data || [];
    console.log(`  ✓ Found ${projects.length} projects`);

    // ─── Build URL blocks ───
    const staticUrls = staticPages.map(formatUrl);

    const blogUrls = blogs.map((post) => `
  <!-- Blog: ${post.slug} -->
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${
      new Date(post.date_updated || post.date_created || Date.now())
        .toISOString()
        .split("T")[0]
    }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);

    const projectUrls = projects.map((project) => `
  <!-- Project: ${project.slug} -->
  <url>
    <loc>${SITE_URL}/our-work/${project.slug}</loc>
    <lastmod>${
      new Date(project.date_created || Date.now())
        .toISOString()
        .split("T")[0]
    }</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`);

    // ─── Assemble sitemap ───
    const totalUrls = staticUrls.length + blogUrls.length + projectUrls.length;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  sitemap.xml — codeanew
  Generated: ${new Date().toUTCString()}
  Total URLs: ${totalUrls}

  DO NOT edit manually — regenerate using:
  npm run sitemap
-->
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="
    http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- ═══════════════════════════════════ -->
  <!-- STATIC PAGES                        -->
  <!-- ═══════════════════════════════════ -->
  ${staticUrls.join("")}

  <!-- ═══════════════════════════════════ -->
  <!-- BLOG POSTS (${blogs.length})                     -->
  <!-- ═══════════════════════════════════ -->
  ${blogUrls.join("")}

  <!-- ═══════════════════════════════════ -->
  <!-- PROJECTS (${projects.length})                    -->
  <!-- ═══════════════════════════════════ -->
  ${projectUrls.join("")}

</urlset>`;

    // ─── Write file ───
    fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
    fs.writeFileSync(OUTPUT, xml, "utf-8");

    console.log(`\n✅ Sitemap generated successfully`);
    console.log(`   Total URLs : ${totalUrls}`);
    console.log(`   Static     : ${staticUrls.length}`);
    console.log(`   Blog posts : ${blogUrls.length}`);
    console.log(`   Projects   : ${projectUrls.length}`);
    console.log(`   Saved to   : ${OUTPUT}\n`);

    // ─── Ping search engines ───
    await pingSearchEngines();

  } catch (err) {
    console.error("\n❌ Sitemap generation failed:", err.message);
    process.exit(1);
  }
};

generate();
