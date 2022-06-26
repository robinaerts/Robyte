export default function Comment(props) {
  return (
    <div id="comment-container">
      <div className="comment-profile-image"></div>
      <div>
        <p className="comment-name">{props.data.name}</p>
        <p className="comment-content">{props.data.content}</p>
      </div>
    </div>
  );
}
