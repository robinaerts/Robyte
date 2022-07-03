import { doc, updateDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../config/firebaseconfig";

export default function AddComment({ user, id, type, comments }) {
  const commentRef = useRef();
  const addComment = () => {
    if (!commentRef.current.value) return;
    let projectRef;
    if (type.toLowerCase() === "dev") {
      projectRef = doc(db, "programming/" + id);
    } else {
      projectRef = doc(db, "art/" + id);
    }
    const comment = {
      name: user.displayName,
      content: commentRef.current.value,
      photo: user.photoURL,
    };
    comments.push(comment);
    updateDoc(projectRef, {
      comments,
    });
  };

  return (
    <div id="comment-container">
      <div
        className="comment-profile-image"
        style={{ background: `url(${user.photoURL}) center center/cover` }}
      ></div>
      <div style={{ width: "60%" }}>
        <p className="comment-name">{user.displayName}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "3rem",
            marginBottom: "1rem",
          }}
        >
          <input
            ref={commentRef}
            id="add-comment-input"
            type="text"
            placeholder="Comment..."
          />
          <button
            onClick={addComment}
            id="visit-button"
            style={{
              marginLeft: "1.3rem",
              justifyContent: "center",
              paddingLeft: "1.2rem",
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
