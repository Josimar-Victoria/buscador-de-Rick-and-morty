import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import '../stylos/search.css'
import '../stylos/ite.css'
import Search from "./Search";
import useCharaters from "../hooks/useCharater";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/"

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORIRE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search,setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharaters(API)

  const handleClik = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORIRE", payload: favorite });
  };

  // const handleSearch = () =>{
  //   setSearch(searchInput.current.value)
  // }
const handleSearch = useCallback (() => {
  setSearch(searchInput.current.value)
} ,[])
  // const filtederedUsers = characters.filter((user)=>{
  //  return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filtederedUsers = useMemo (() =>
  characters.filter((user)=>{
    return user.name.toLowerCase().includes(search.toLowerCase())
   }),
   [characters,search]
  )

  return (
    <div className="Characters">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      
     {
       favorites.favorites.map(favorite => (
         <li key={favorite.id}>
           {favorite.name}
           <img src={favorite.image}/>
           </li>
       
       ))
     }
    
      {filtederedUsers.map((character) => (
        <div className="item" key={character.id}>
          <h1  style={{color:'YELLOW'}}>{character.name}</h1>
          <img src={character.image} alt=""/>
          <button type="button" onClick={() => handleClik(character)}>
            {" "}
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};
export default Characters;
