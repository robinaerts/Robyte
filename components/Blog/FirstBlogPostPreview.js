import Link from "next/link";

export default function FirstBlogPostPreview({ metadata }) {
  return (
    <Link href={`/blog/${metadata.slug}`}>
      <div id="first-blogpost-container">
        <div
          id="first-blogpost-image"
          style={{
            background: `url(${metadata.image}) no-repeat center center/cover`,
          }}
        ></div>
        <div id="first-blogpost-text-container">
          <h1>{metadata.title}</h1>
          <p className="excerpt-preview">{metadata.excerpt}</p>
          <div className="postmeta-container">
            <p>
              {new Date(metadata.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </p>
            <span className="dot-seperator">·</span>
            <div className="tag-container-preview">
              {metadata.tags.map((tag) => {
                return (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <a className="tag-preview">{tag}</a>
                  </Link>
                );
              })}
            </div>
            <span className="dot-seperator">·</span>
            <p>{metadata.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
