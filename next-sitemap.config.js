/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://personal-portfolio-nextjs-ebon.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404"],
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    if (path.includes("/private")) return null;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
