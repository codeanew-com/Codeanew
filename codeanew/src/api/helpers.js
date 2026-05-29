const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL;

export const getImageUrl = (id) => {
  if (!id) return null;
  return `${DIRECTUS_URL}/assets/${id}`;
};

export const handleError = (error) => {
  console.error("API Error:", error.message);
  return null;
};
