// import * as fs from "fs";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../helpers/firebaseconfig";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://robinaerts.be";

  const dynamicPaths = [];
  const projects = await getDocs(collection(db, "programming"));
  projects.docs.forEach((project) => {
    dynamicPaths.push(`${BASE_URL}/dev/${project.data().id}`);
  });

  const dynamicProducts = [];
  const products = await getDocs(collection(db, "store"));
  projects.docs.forEach((project) => {
    dynamicPaths.push(`${BASE_URL}/store/${project.data().id}`);
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
    BASE_URL + "/dev",
    BASE_URL + "/login",
    BASE_URL + "/store",
    BASE_URL + "/blog",
    BASE_URL + "/blog/fluttergetstarted",
    BASE_URL + "/blog/mathboardsetup",
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

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
