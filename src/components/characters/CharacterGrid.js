import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
          ))}
        </section>
      )}
    </div>
  );
};

export default CharacterGrid;
