import client from "../client";
import endpoints from "../endpoints";

export const getTeamMembers = async () => {
  const response = await client.get(endpoints.teamMembers, {
    params: {
      filter: { status: { _eq: "published" } },
      sort: ["sort"],
      fields: [
        "id",
        "name",
        "role",
        "photo",
        "facebook",
        "twitter",
        "linkedin",
      ],
    },
  });
  return response.data;
};
