import React, { useState, useEffect, createContext } from "react";
import url from "../api/Api";
import axios from "axios";
export const VeggieContext = createContext();

export const VeggieProvider = ( props ) => {
  const [ veggieRecipes, setVeggieRecipes ] = useState( [] );

  useEffect( () => {
    getVeggieRecipes();
  }, [] );

  const getVeggieRecipes = async () => {
    const check =
      localStorage.getItem(
        "veggie"
      ); 

    if ( check )
    {
      setVeggieRecipes( JSON.parse( check ) );
    } else
    {
      try
      {
        const response = await axios.get( url.veggieRecipesUrl );
        localStorage.setItem( "veggie", JSON.stringify( response.data.recipes ) ); 
        setVeggieRecipes( response.data.recipes );
      } catch ( error )
      {
        if ( error.response )
        {
          console.log( error.response.data );
          console.log( error.response.status );
          console.log( error.response.headers );
          alert( error.message );
        } else if ( error.request )
        {
          console.log( error.request );
        }
        console.log( error.config );
      }
    }
  };
  return (
    <VeggieContext.Provider value={ [ veggieRecipes ] }>
      { props.children }
    </VeggieContext.Provider>
  );
};