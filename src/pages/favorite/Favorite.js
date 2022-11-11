import React from "react";

export const Favorite = ({ oneCharacter, allCharacters }) => {
  return (
    <>
      <p>
        {allCharacters.map(
          (params) => allCharacters.isFavorite && allCharacters.name
        )}
      </p>
    </>
  );
};
