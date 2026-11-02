/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://portfolio-new-seven-opal.vercel.app");

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false, // Set to true for larger sites with multiple sitemaps
  exclude: ["/private/*"], // Exclude sensitive routes, adjust as needed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/*"], // Adjust to exclude specific routes
      },
    ],
  },
};
