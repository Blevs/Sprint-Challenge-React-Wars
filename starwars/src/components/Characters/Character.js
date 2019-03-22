import React from "react";

const Character = ({character, getStateAPI}) => {
  const { name, birth_year, homeworld } = character;
  const homeworldState = getStateAPI("planets", homeworld);
  return (
    <div className="character">
      <h2>{name}</h2>
      <h3>{birth_year}</h3>
    <div>{homeworldState ? homeworldState.name : "Loading"}</div>
    </div>
  );
};

export default Character;
