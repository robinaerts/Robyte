import Link from "next/link";

export default function BlogPostPreview(metadata) {
  return (
    <Link href={`/blog/${metadata.slug}`}>
      <div className="blogpost-preview-container">
        <div
          className="blogpost-preview-image"
          style={{
            background: `url(${metadata.image}) no-repeat center center/cover`,
          }}
        ></div>
        <div className="main-content-preview">
          <h1>{metadata.title}</h1>
          <div>
            {metadata.tags.map((tag) => (
              <Link href={"/blog/tags/" + tag}>
                <a className="tag-preview">{tag}</a>
              </Link>
            ))}
          </div>
          <p className="excerpt-preview">{metadata.excerpt}</p>
          <div
            className="postmeta-container"
            style={{ justifyContent: "center" }}
          >
            <p>
              {new Date(metadata.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </p>
            <span className="dot-seperator">·</span>
            <p>{metadata.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
