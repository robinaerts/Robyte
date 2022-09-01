import Image from "next/image";

export default function BlogImage({ src, alt, width, height }) {
  return (
    <div style={{ display: "inline-block" }}>
      <Image src={src} alt={alt} width={width} height={height} />
      <p className="alt-text">{alt.toString()}</p>
    </div>
  );
}
