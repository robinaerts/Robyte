import BlogPostPreview from "../../components/Blog/BlogPostPreview";
import FirstBlogPostPreview from "../../components/Blog/FirstBlogPostPreview";
import Nav from "../../components/Nav";
import { getPosts } from "../../helpers/postApi";
import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export function getStaticProps() {
  const posts = getPosts()
    .slice(0, 5)
    .map((post) => post.metadata);
  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  const size = useWindowSize();
  return (
    <div id="blog-container">
      <Head>
        <title>Robyte Blog - Tutorials and tech help</title>
        <meta
          name="description"
          content="Learn everything about the newest programming tools. Tutorials and articles on a wide variety of subjects"
        />
        <meta name="title" content="Robyte Blog - Tutorials and tech help" />
        <Script
   id="Adsense-id"
   data-ad-client="ca-pub-5041240051853060"
   async="true"
   strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
      </Head>
      <Nav />
      {size.width >= 830 ? (
        <FirstBlogPostPreview metadata={posts[0]} />
      ) : (
        <BlogPostPreview metadata={posts[0]} />
      )}
      <div id="all-posts-preview-container">
        {posts.map((post, index) => {
          if (index == 0) return;
          return <BlogPostPreview metadata={post} key={index} />;
        })}
      </div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}
