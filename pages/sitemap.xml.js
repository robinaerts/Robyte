// import * as fs from "fs";
import ids from "../data/projectIds.json";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://robyte.me";

  const projectPaths = JSON.parse(JSON.stringify(ids))[0];

  const dynamicProjects = projectPaths.id.map((id) => {
    return `${BASE_URL}/project/${id.params.id}`;
  });

  // const dynamicBlogPosts = blogPaths.id.map((id) => {
  //   return `${BASE_URL}/blog/${id.params.id}`;
  // });

  // const blogPosts = fs.readdirSync("blog").map((staticPagePath) => {
  //   if (staticPagePath) {
  //     return `${BASE_URL}/blog/${staticPagePath.slice(0, -4)}`;
  //   }
  // });

  // const tags = fs.readdirSync("blog/tags").map((staticPagePath) => {
  //   if (staticPagePath) {
  //     return `${BASE_URL}/blog/${staticPagePath.slice(0, -4)}`;
  //   }
  // });

  const staticPaths = [
    BASE_URL + "/",
    BASE_URL + "/art",
    BASE_URL + "/login",
    BASE_URL + "/store",
    BASE_URL + "/store/web",
    BASE_URL + "/store/mobile",
    BASE_URL + "/blog",
    BASE_URL + "/blog/fluttergetstarted",
    BASE_URL + "/blog/tags",
    BASE_URL + "/blog/tags/flutter",
    BASE_URL + "/blog/tags/dev",
  ];

  const allPaths = [...staticPaths, ...dynamicProjects];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
