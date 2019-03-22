import React from "react";
import "./Character.scss";

const Character = ({character, getStateAPI}) => {
  const { name, birth_year, height, mass, homeworld, gender, films } = character;
  const homeworldState = getStateAPI("planets", homeworld);
  return (
    <div className="character">
      <h2 className="name">{name}</h2>
      <div className="info-line">
        Born: {birth_year}, Height: {height}cm, Weight: {mass}kg
      </div>
      <div className="info">
        <p>
          {name} is from {homeworldState ? homeworldState.name : "Loading"}. {gender === "male" ? "He" : (gender === "female" ? "She" : "They")} appeared in {films.length} film{films.length === 1 ? "" : "s"}.
        </p>
      </div>
    <div></div>
    </div>
  );
};

export default Character;
