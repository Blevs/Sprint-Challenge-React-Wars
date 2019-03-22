import React from "react";

const PageLink = ({text, handleNavigation, loc}) => {
  return (
    <div className={"page-link" + (loc ? "" : " no-page")}
         onClick={() => loc ? handleNavigation(loc) : null}>
      {text}
    </div>
  );
};

export default PageLink;
