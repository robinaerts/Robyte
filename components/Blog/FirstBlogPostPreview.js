import Link from "next/link";
import Image from "next/image";

export default function FirstBlogPostPreview({ metadata }) {
  return (
    <Link href={`/blog/${metadata.slug}`}>
      <div id="first-blogpost-container">
        <div
          id="first-blogpost-image"
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
