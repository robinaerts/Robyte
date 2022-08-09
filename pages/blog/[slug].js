import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getSlugs, getPostFromSlug } from "../../helpers/postApi";
import "highlight.js/styles/atom-one-dark.css";

export const getStaticPaths = async () => {
  return {
    paths: getSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, metadata } = getPostFromSlug(slug);
  const mdx = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: { meta: metadata, content: mdx },
  };
};

export default function PostPage({ meta, content }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <MDXRemote {...content} />
    </>
  );
}
