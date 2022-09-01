import Link from "next/link";
import { useRouter } from "next/router";
import BlogPostPreview from "../../../components/Blog/BlogPostPreview";
import Nav from "../../../components/Nav";
import { getPosts } from "../../../helpers/postApi";

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
