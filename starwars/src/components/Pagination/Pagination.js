import React from "react";
import PageLink from "./PageLink.js";

const Pagination = ({handleNavigation, prev, next}) => {
  return (
    <div className="pagination">
      <PageLink text="Prev" handleNavigation={handleNavigation} loc={prev}/>
      <PageLink text="Next" handleNavigation={handleNavigation} loc={next}/>
    </div>
  );
};

export default Pagination;
