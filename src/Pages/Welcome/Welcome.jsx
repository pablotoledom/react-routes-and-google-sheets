import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Welcome-header">
        <h1>Welcome</h1>
        <h3>Select page</h3>

        <ol>
          <li>
            <Link to="/page-a">Go to page A</Link>
          </li>
          <li>
            <Link to="/page-b">Go to page B</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Welcome;