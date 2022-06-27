import { storage } from "../config/firebaseconfig";
import { db } from "../config/firebaseconfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddProject(props) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const router = useRouter();

  const dragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("drag-over");
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("drag-over");
  };

  const drop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    e.target.classList.remove("drag-over");
  };

  const addModel = async (file) => {
    const fileRef = ref(
      storage,
      "3D/" + Math.floor(Math.random() * 100000) + file.name
    );
    const snapshot = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const addProject = async (e) => {
    setLoading(true);
    e.preventDefault();
    const fileRef = ref(
      storage,
      "projects/" + Math.floor(Math.random() * 100000) + file.name
    );
    const snapshot = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(snapshot.ref);

    const project = {
      preview: url,
      title: e.target[0].value,
      comments: [],
      description: e.target[3].value,
      short: e.target[2].value,
      visit: e.target[4].value,
      badge: {
        color: e.target[1].selectedOptions[0].style.backgroundColor,
        name: e.target[1].value,
      },
      timestamp: Date.now(),
    };
    let glb;
    if (e.target[5].files[0]) {
      glb = await addModel(e.target[5].files[0]);
      project.glb = glb;
    }

    if (project.badge.name.toLowerCase() === "dev") {
      await setDoc(doc(db, "programming", Date.now().toString()), project);
    } else {
      await setDoc(doc(db, "art", Date.now().toString()), project);
    }
    setLoading(false);
    props.setAddProject();
    router.push("/");
  };

  return (
    <div id="project-container">
      {!loading && (
        <>
          <div id="add-project-preview">
            <div
              onDragOver={(e) => dragOver(e)}
              onDragLeave={(e) => dragLeave(e)}
              onDrop={(e) => drop(e)}
              id="drop-file"
            >
              <p>Drop here your image file (png/jpg)</p>
              {file && <b>FILE: {file.name}</b>}
            </div>
          </div>
          <div id="add-project-details">
            <form id="add-project-details-text" onSubmit={(e) => addProject(e)}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                <input
                  className="add-project-input"
                  id="add-title-input"
                  placeholder="Title"
                />
                <select id="add-badge-select">
                  <option
                    style={{ backgroundColor: "#72a5c2" }}
                    className="add-badge-option"
                  >
                    DEV
                  </option>
                  <option
                    className="add-badge-option"
                    style={{ backgroundColor: "#97C490" }}
                  >
                    ART
                  </option>
                </select>
              </div>
              <input
                className="add-project-input"
                id="add-project-description"
                placeholder="Short Description"
              />
              <input
                className="add-project-input"
                id="add-project-description"
                placeholder="Description"
              />
              <input
                className="add-project-input"
                id="add-project-visit"
                placeholder="url"
              />
              <input id="gltf-button" type="file" accept=".glb" />
              <input id="visit-button" type="Submit" value="Add" />
            </form>
            <svg
              onClick={() => props.setAddProject()}
              id="close-details"
              xmlns="http://www.w3.org/2000/svg"
              width="17.601"
              height="17.601"
              viewBox="0 0 17.601 17.601"
            >
              <path
                id="Union_1"
                data-name="Union 1"
                d="M7.386,7.386,0,14.772,7.386,7.386,0,0,7.386,7.386,14.772,0,7.386,7.386l7.386,7.386Z"
                transform="translate(1.414 1.414)"
                fill="none"
                stroke="#eaeaea"
                strokeWidth="4"
              />
            </svg>
          </div>
        </>
      )}
      {loading && <p>Uploading...</p>}
    </div>
  );
}
