import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">단어외우기</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어추가
        </Link>
        <Link to="/create_day" className="link">
          Day추가
        </Link>
      </div>
    </div>
  );
}
