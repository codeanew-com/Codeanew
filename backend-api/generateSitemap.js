const { SitemapStream, streamToPromise } = require('sitemap');
const dotenv = require('dotenv');

const fs = require('fs');
dotenv.config();

// Base URL of your website
const BASE_URL = `${process.env.BASE_URL}`;

// List of static URLs (your provided routes)
const staticUrls = [
    '/',
    '/about',
    '/our-process',
    '/privacy',
    '/terms-of-use',
    '/contact-us',
    '/services',
];

// Generate the sitemap
const generateSitemap = async () => {
    try {
        // Create a sitemap stream
        const sitemap = new SitemapStream({ hostname: BASE_URL });
        
        // Add each URL to the sitemap
        staticUrls.forEach(url => {
            sitemap.write({ url, changefreq: 'daily', priority: 0.8 });
        });

        sitemap.end();

        // Save the sitemap to the public folder for production build
        const sitemapXML = await streamToPromise(sitemap);
        fs.writeFileSync('./public/sitemap.xml', sitemapXML.toString());

        console.log('Sitemap generated successfully');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

// Call the function to generate the sitemap
generateSitemap();
