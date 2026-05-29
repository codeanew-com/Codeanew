import { defaultSEO } from "../../constants/seo";

const SEO = ({ title, description, ogImage, ogType = "website", canonicalUrl }) => {
  const siteTitle = title || defaultSEO.defaultTitle;
  const siteDescription = description || defaultSEO.defaultDescription;
  const siteImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${defaultSEO.siteUrl}${ogImage}`
    : `${defaultSEO.siteUrl}${defaultSEO.defaultOgImage}`;
  const canonical = canonicalUrl ? `${defaultSEO.siteUrl}${canonicalUrl}` : defaultSEO.siteUrl;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_AE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:creator" content={defaultSEO.twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
    </>
  );
};

export default SEO;
