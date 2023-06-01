import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import BlogPostPreview from "../../../components/Blog/BlogPostPreview";
import Nav from "../../../components/Nav";
import { getPosts } from "../../../helpers/postApi";
import Script from "next/script";

const tags = ["flutter", "dev"];

export const getStaticPaths = async () => {
  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const posts = getPosts().map((post) => {
    if (post.metadata.tags.includes(params.tag)) {
      return post.metadata;
    }
  });

  return {
    props: { posts },
  };
};

export default function Tag({ posts }) {
  const router = useRouter();
  const { tag } = router.query;
  return (
    <>
      <Head>
        <title>Blog | {tag}</title>
        <meta name="description" content={`Posts tagged with ${tag}`} />
        <Script
   id="Adsense-id"
   data-ad-client="ca-pub-5041240051853060"
   async="true"
   strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
      </Head>
      <Nav />
      <div id="tag-container">
        <Link href={"/blog"}>
          <p style={{ fontSize: "1.5rem" }} id="return-to-blog">
            &#60; Blog
          </p>
        </Link>
        <h1>Tag: {tag}</h1>
        <div id="all-posts-preview-container">
          {posts.map((post, index) => (
            <BlogPostPreview metadata={post} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
