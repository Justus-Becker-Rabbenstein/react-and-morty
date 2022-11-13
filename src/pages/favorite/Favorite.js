import styled from "styled-components";

export const Favorite = ({ ramApiData }) => {
  // Filter Favorites from Array
  const favoritesFiltered = ramApiData.filter(favorites => {return favorites.isFavorite === true})
  console.log(favoritesFiltered);

  return (
    <>
    {favoritesFiltered.map((singleFavorite)=>{
      return (<>
      <LiContainer>
        <img src={singleFavorite.image} alt={singleFavorite.name}/>
        <h2>{singleFavorite.name}</h2>
        <ButtonFavoriteContainer>Remove as favorite</ButtonFavoriteContainer>
      </LiContainer>
    </>)
    })}
    </>
  )

}

const LiContainer = styled.li`
  list-style-type: none;
`;
const ButtonFavoriteContainer = styled.button`
  position: relative;
  top: -333px;
  right: -90px;
`;