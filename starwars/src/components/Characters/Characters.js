import React from "react";
import Character from "./Character.js";

const Characters = ({characters, getStateAPI}) => {
  return (
    <div className="characters">
      {characters.map(char => {
        return <Character character={char}
                                         key={char.name + char.edited}
                                         getStateAPI={getStateAPI} />;
      })}
    </div>
  );
};

export default Characters;
