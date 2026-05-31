const endpoints = {
  blogPosts:    "/items/blog_posts",
  projects:     "/items/projects",
  testimonials: "/items/testimonials",
  teamMembers:  "/items/team_members",
  contact:      "/flows/trigger/1ca6f312-710f-46fc-a9e6-9a25a2402e62",

  files: (id) => `/assets/${id}`,
};

export default endpoints;
