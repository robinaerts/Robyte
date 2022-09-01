import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getSlugs, getPostFromSlug } from "../../helpers/postApi";
import "highlight.js/styles/atom-one-dark.css";
import Nav from "../../components/Nav";
import Link from "next/link";
import Image from "next/image";
import BlogImage from "../../components/Blog/BlogImage";
import Hint from "../../components/Blog/Hint";

const components = {
  BlogImage,
  Hint,
};

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
    <div>
      <Nav />
      <div id="blogpost">
        <Link href={"/blog"}>
          <p id="return-to-blog">&#60; Blog</p>
        </Link>
        <h1>{meta.title}</h1>
        <div className="postmeta-container">
          <p>
            {new Date(meta.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            })}
          </p>
          <span className="dot-seperator">·</span>
          <p>Robin Aerts</p>
          <span className="dot-seperator">·</span>
          <div className="tag-container">
            {meta.tags.map((tag) => {
              return (
                <Link key={tag} href={`/blog/tags/${tag}`}>
                  <a className="tag-preview">{tag}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <Image
          placeholder="blur"
          blurDataURL={meta.image + "&w=50"}
          alt={meta.slug}
          src={meta.image + "&w=800"}
          width="800px"
          height="500px"
          objectFit="cover"
        />
        <MDXRemote components={components} {...content} />
      </div>
    </div>
  );
}
