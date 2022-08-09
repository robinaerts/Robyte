import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import Router from "next/router";
import ProjectDetail from "../../components/ProjectDetail";
import { db } from "../../config/firebaseconfig";
import ids from "../../data/projectIds.json";

export function getStaticPaths() {
  const paths = JSON.parse(JSON.stringify(ids))[0];
  return {
    paths: paths.id,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const artRef = doc(db, "art", id.toString());
  const devRef = doc(db, "programming", id.toString());
  let project;
  project = await getDoc(artRef);
  if (project.data() === undefined) {
    project = await getDoc(devRef);
  }
  return {
    props: {
      project: project.data(),
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
        <ProjectDetail project={project} setEnlarge={() => Router.push("/")} />
      </>
    );
  } else {
    return <p>{error}</p>;
  }
}
