import Link from "next/link";
import Image from "next/image";

export default function BlogPostPreview({ metadata }) {
  return (
    <Link href={`/blog/${metadata.slug}`}>
      <div className="blogpost-preview-container">
        <div
          className="blogpost-preview-image"

        >
          <Image
        placeholder="blur"
        blurDataURL={metadata.image + "&w=50"}
          alt={metadata.slug}
          src={metadata.image + "&w=800"}
          layout="fill"
          objectFit="cover"
        />
        </div>
        <div className="main-content-preview">
          <h1>{metadata.title}</h1>
          <div>
            {metadata.tags.map((tag) => (
              <Link key={tag} href={"/blog/tags/" + tag}>
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
