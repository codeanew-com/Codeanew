import client from "../client";
import endpoints from "../endpoints";

export const getProjects = async () => {
  const response = await client.get(endpoints.projects, {
    params: {
      filter: { status: { _eq: "published" } },
      sort: ["sort", "-date_created"],
      fields: [
        "id",
        "title",
        "slug",
        "category",
        "client",
        "industry",
        "year",
        "short",
        "technologies",
        "thumbnail",
      ],
    },
  });
  return response.data;
};

export const getProject = async (slug) => {
  const response = await client.get(endpoints.projects, {
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
