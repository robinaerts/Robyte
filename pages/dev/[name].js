import { collection, getDocs, query, where } from "firebase/firestore";
import Head from "next/head";
import { db } from "../../helpers/firebaseconfig";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export async function getStaticPaths() {
  const q = query(collection(db, "programming"));
  const proj = await getDocs(q);
  const programming_projects = [];
  proj.forEach((doc) => {
    programming_projects.push(doc.data().id);
  });

  const paths = [];
  for (let i = 0; i < programming_projects.length; i++) {
    paths.push({ params: { name: programming_projects[i] } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const docRef = query(collection(db, "programming"), where("id", "==", name));
  const project = await getDocs(docRef);

  return {
    props: {
      project: project.docs[0].data(),
    },
  };
}

export default function Project({ project, error }) {
  if (!error) {
    return (
      <>
        <Head>
          <title>{project.title} | Robyte</title>
          <meta name="description" content={project.description} />
          <meta property="og:title" content={project.title + " | Robyte"} />
          <meta property="og:description" content={project.description} />
        </Head>
        <Nav />

        <Footer />
      </>
    );
  } else {
    return <p>{error}</p>;
  }
}
