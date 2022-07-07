import * as fs from "fs";
import ids from "../data/projectIds.json";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "robyte.ga";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  // const paths = JSON.parse(JSON.stringify(ids))[0];
  const paths = {
    id: [
      { params: { id: "1656417070712" } },
      { params: { id: "1656586663325" } },
      { params: { id: "1656587180744" } },
      { params: { id: "1656587215271" } },
      { params: { id: "1656587235118" } },
      { params: { id: "1656588216190" } },
      { params: { id: "1656596070740" } },
      { params: { id: "1656596557867" } },
      { params: { id: "1656596905600" } },
      { params: { id: "1656597149422" } },
      { params: { id: "1656597542600" } },
      { params: { id: "1656597781549" } },
      { params: { id: "1656598240731" } },
      { params: { id: "1656255576381" } },
      { params: { id: "1656418525752" } },
    ],
  };
  const dynamicPaths = paths.id.map((id) => {
    return `${BASE_URL}/product/${id.params.id}`;
  });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
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
