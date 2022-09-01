// import * as fs from "fs";
import ids from "../data/projectIds.json";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://robyte.ga";

  // const staticPaths = fs
  //   .readdirSync(
  //     {
  //       development: "pages",
  //       production: "./",
  //     }[process.env.NODE_ENV]
  //   )
  //   .filter((staticPage) => {
  //     return ![
  //       "api",
  //       "_app.js",
  //       "_document.js",
  //       "404.js",
  //       "sitemap.xml.js",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${BASE_URL}/${staticPagePath}`;
  //   });

  const paths = JSON.parse(JSON.stringify(ids))[0];
  const dynamicProjects = paths.id.map((id) => {
    return `${BASE_URL}/project/${id.params.id}`;
  });

  const staticPaths = [BASE_URL + "/", BASE_URL + "/art", BASE_URL + "/login"];

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
