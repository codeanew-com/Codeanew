import client from "../client";
import endpoints from "../endpoints";

export const submitContact = async (formData, token) => {
  const response = await client.post(endpoints.contact, { ...formData, token });
  return response.data;
};
