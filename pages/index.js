import Art from "../components/Art";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Programming from "../components/Programming";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../config/firebaseconfig";
import Head from "next/head";

export async function getStaticProps() {
  // PROGRAMMING PROJECTS
  const q = query(collection(db, "programming"));
  const proj = await getDocs(q);
  const programming_projects = [];
  proj.forEach((doc) => {
    programming_projects.push(doc.data());
  });

  // ART PROJECTS
  const q_a = query(collection(db, "art"), limit(6));
  const proj_a = await getDocs(q_a);
  const art_projects = [];
  proj_a.forEach((doc) => {
    art_projects.push(doc.data());
  });

  return {
    props: {
      P_projects: programming_projects,
      A_projects: art_projects,
    },
    revalidate: 60,
  };
}

export default function Home({ P_projects, A_projects }) {
  return (
    <div>
      <Head>
        <title>Robyte | Simplify your life</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Nav />
      <Landing />
      <Programming projects={P_projects} />
      <Art projects={A_projects} />
      <Footer />
    </div>
  );
}
