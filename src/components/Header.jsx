import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/articles">Articles</Link>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
