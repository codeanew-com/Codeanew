const endpoints = {
  blogPosts:    "/items/blog_posts",
  projects:     "/items/projects",
  testimonials: "/items/testimonials",
  teamMembers:  "/items/team_members",
  contact:      "/items/contact_submissions",

  files: (id) => `/assets/${id}`,
};

export default endpoints;
