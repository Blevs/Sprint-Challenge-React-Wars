import React from "react";
import Character from "./Character.js";
import "./Characters.scss";

const Characters = ({characters, getStateAPI, loading}) => {
  return (
    <div className={"characters" + (loading ? " loading" : "")}>
      {characters.map(char => {
        return <Character character={char}
                          key={char.name + char.edited}
                          getStateAPI={getStateAPI} />;
      })}
    </div>
  );
};

export default Characters;
