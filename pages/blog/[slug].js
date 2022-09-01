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
import Head from "next/head";

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
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.excerpt} />
        <meta name="author" content={meta.author} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.excerpt} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@robinaerts0" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.excerpt} />
        <meta name="twitter:image" content={meta.image + "&w=800"} />
      </Head>
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
          <p>{meta.author}</p>
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
