const StaticSitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://robyte.ga/</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/art</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/login</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656417070712</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656586663325</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656587180744</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656587215271</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656587235118</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656588216190</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656596070740</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656596557867</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656596905600</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656597149422</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656597542600</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656597781549</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656598240731</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656255576381</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://robyte.ga/product/1656418525752</loc>
<lastmod>2022-07-11T13:43:04.683Z</lastmod>
<changefreq>monthly</changefreq>
<priority>1.0</priority>
</url>
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default StaticSitemap;
