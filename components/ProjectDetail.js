import { useEffect, useState } from "react";
import { auth } from "../helpers/firebaseconfig";
import AddComment from "./AddComment";
import Comment from "./Comment";
import Spline from "@splinetool/react-spline";

export default function ProjectDetail(props) {
  const [user, setUser] = useState();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    }
  }, []);

  return (
    <div id="project-container">
      <div
        id="project-preview"
        style={{
          background: `url(${props.project.preview}) center center/cover no-repeat`,
        }}
      >
        {props.project.model && <Spline scene={props.project.model} />}
      </div>
      <div id="project-details">
        <div id="project-details-text">
          <h2 id="project-details-title">
            {props.project.title.toUpperCase()}
          </h2>
          <a
            className="badge"
            style={{ backgroundColor: props.project.badge.color }}
          >
            {props.project.badge.name}
          </a>
          <p id="project-details-description">{props.project.description}</p>
          {props.project.visit && (
            <a href={props.project.visit} target="_blank" rel="noreferrer">
              <button id="visit-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  id="external-link-button"
                >
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                </svg>
                <p id="visit-button-text">VISIT</p>
              </button>
            </a>
          )}
        </div>
        <div id="project-details-comments">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 id="comments-section-title">COMMENTS:</h3>
          </div>
          <div id="all-comments-container">
            {user && (
              <AddComment
                id={props.project.timestamp}
                type={props.project.badge.name}
                user={user}
                comments={props.project.comments}
              />
            )}
            {props.project.comments.map((comment, i) => {
              return (
                <Comment
                  key={i}
                  data={{
                    name: comment.name,
                    content: comment.content,
                    photo: comment.photo,
                  }}
                />
              );
            })}
          </div>
        </div>
        <svg
          onClick={() => props.setEnlarge()}
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
    </div>
  );
}
