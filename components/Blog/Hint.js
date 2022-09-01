export default function Hint({ children }) {
  return (
    <div className="hint-container">
      <div className="hint-heading">
        <p>Hint</p>
      </div>
      <p className="hint-text">{children}</p>
    </div>
  );
}
