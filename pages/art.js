import Nav from "../components/Nav";
import ArtDetailed from "../components/ArtDetailed";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseconfig";
import Footer from "../components/Footer";
import Head from "next/head";

export async function getStaticProps() {
  const q_a = query(collection(db, "art"));
  const proj_a = await getDocs(q_a);
  const art_projects = [];
  proj_a.forEach((doc) => {
    art_projects.push(doc.data());
  });

  return {
    props: {
      projects: art_projects,
    },
    revalidate: 60,
  };
}

export default function Art({ projects }) {
  return (
    <>
      <Head>
        <title>Art | Robyte</title>
        <meta name="description" content="Discover my art projects!" />
        <meta property="og:title" content="Art | Robyte" />
        <meta property="og:description" content="Discover my art projects!" />
      </Head>
      <Nav />
      <ArtDetailed projects={projects} />
      <Footer />
    </>
  );
}
