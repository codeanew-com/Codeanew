import client from "../client";
import endpoints from "../endpoints";

export const submitContact = async (formData) => {
  const response = await client.post(endpoints.contact, formData);
  return response.data;
};
