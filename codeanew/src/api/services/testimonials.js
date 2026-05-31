import client from "../client";
import endpoints from "../endpoints";

export const getTestimonials = async () => {
  const response = await client.get(endpoints.testimonials, {
    params: {
      filter: { status: { _eq: "published" } },
      sort: ["sort"],
      fields: [
        "id",
        "name",
        "role",
        "company",
        "quote",
        "avatar",
      ],
    },
  });
  return response.data;
};
