import React from "react";
import { Link } from "react-router-dom";

const CategoryPill = () => {
  return (
    <Link to="/" className="tag is-link is-medium is-rounded m-1">
      <span>Convenience</span>
    </Link>
  );
};

export default CategoryPill;
