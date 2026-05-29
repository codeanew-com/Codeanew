import client from "../client";
import endpoints from "../endpoints";

export const getBlogPosts = async () => {
  const response = await client.get(endpoints.blogPosts, {
    params: {
      filter: { status: { _eq: "published" } },
      sort: ["-date_created"],
      fields: [
        "id",
        "title",
        "slug",
        "category",
        "excerpt",
        "thumbnail",
        "read_time",
        "date_created",
      ],
    },
  });
  return response.data;
};

export const getBlogPost = async (slug) => {
  const response = await client.get(endpoints.blogPosts, {
    params: {
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
      fields: ["*"],
      limit: 1,
    },
  });
  return response.data[0] || null;
};
