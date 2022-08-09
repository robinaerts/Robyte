import fs from "fs";
import matter from "gray-matter";

export const getSlugs = () => {
  const slugs = fs.readdirSync("posts");
  return slugs.map((post) => post.replace(".mdx", ""));
};

export const getPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.metadata.date < b.metadata.date) {
        return 1;
      } else if (a.metadata.date > b.metadata.date) {
        return -1;
      } else {
        return 0;
      }
    });
  return posts;
};

export const getPostFromSlug = (slug) => {
  const path = `posts/${slug}.mdx`;
  const fileData = fs.readFileSync(path, "utf8");
  const { content, data } = matter(fileData);

  return {
    content,
    metadata: {
      title: data.title,
      date: data.date || new Date(),
      slug: slug,
      excerpt: data.excerpt,
      tags: data.tags,
      author: data.author,
      image: data.image,
    },
  };
};
