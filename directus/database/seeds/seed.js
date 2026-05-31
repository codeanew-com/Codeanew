import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const DIRECTUS_URL = process.env.PUBLIC_URL || "http://localhost:8055";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

let token = null;

// ─── Auth ───
const login = async () => {
  const res = await axios.post(`${DIRECTUS_URL}/auth/login`, {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
  token = res.data.data.access_token;
  console.log("✓ Logged in to Directus");
};

const api = () =>
  axios.create({
    baseURL: DIRECTUS_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

// ─── Upload image file ───
const uploadImage = async (filePath, filename) => {
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠ File not found: ${filePath}`);
    return null;
  }
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath), filename);
  const res = await axios.post(`${DIRECTUS_URL}/files`, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data.id;
};

// ─── Seed blog posts ───
const seedBlogPosts = async () => {
  console.log("\nSeeding blog posts...");
  const { blogs } = await import(
    "../../../codeanew/src/constants/blogs.js"
  );
  for (const post of blogs) {
    await api().post("/items/blog_posts", {
      status: "published",
      title: post.title,
      slug: post.slug,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      read_time: post.readTime,
      thumbnail: null,
    });
    console.log(`  ✓ Blog: ${post.title}`);
  }
};

// ─── Seed projects ───
const seedProjects = async () => {
  console.log("\nSeeding projects...");
  const { projects } = await import(
    "../../../codeanew/src/constants/projects.js"
  );
  for (const project of projects) {
    await api().post("/items/projects", {
      status: "published",
      title: project.title,
      slug: project.slug,
      category: project.category,
      client: project.client,
      industry: project.industry,
      year: project.year,
      short: project.short,
      overview: project.overview,
      problem: project.problem,
      solution: project.solution,
      result: project.result,
      technologies: project.technologies,
      thumbnail: null,
    });
    console.log(`  ✓ Project: ${project.title}`);
  }
};

// ─── Seed team members with photos ───
const seedTeamMembers = async () => {
  console.log("\nSeeding team members...");
  const { members } = await import(
    "../../../codeanew/src/constants/team.js"
  );

  const photoDir = path.resolve(
    __dirname,
    "../../../codeanew/src/assets/img/team"
  );

  for (const member of members) {
    console.log(`  Uploading photo for ${member.name}...`);

    const photoPath = path.join(photoDir, `${member.img}.webp`);
    const photoId = await uploadImage(photoPath, `${member.img}.webp`);

    await api().post("/items/team_members", {
      status: "published",
      name: member.name,
      role: member.role,
      photo: photoId,
      facebook: member.socials?.facebook || null,
      twitter: member.socials?.twitter || null,
      linkedin: member.socials?.linkedin || null,
    });
    console.log(`  ✓ Team member: ${member.name}`);
  }
};

// ─── Main ───
const seed = async () => {
  try {
    await login();
    await seedBlogPosts();
    await seedProjects();
    await seedTeamMembers();
    console.log("\n✅ Seeding complete!");
  } catch (err) {
    console.error("\n❌ Seed failed:", err.message);
    process.exit(1);
  }
};

seed();
