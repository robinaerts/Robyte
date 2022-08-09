import BlogPostPreview from "../../components/Blog/BlogPostPreview";
import FirstBlogPostPreview from "../../components/Blog/FirstBlogPostPreview";
import Nav from "../../components/Nav";
import { getPosts } from "../../helpers/postApi";

export function getStaticProps() {
  const posts = getPosts()
    .slice(0, 5)
    .map((post) => post.metadata);
  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <div id="blog-container">
      <Nav />
      <h2 className="section-title">Blog</h2>
      <FirstBlogPostPreview metadata={posts[0]} />
      <div id="all-posts-preview-container">
        {posts.map((post, index) => {
          if (index == 0) return;
          return BlogPostPreview(post);
        })}
      </div>
    </div>
  );
}
