import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search () {
  const [ input, setInput ] = useState( "" );
  const navigate = useNavigate();

  const submitHandler = ( e ) => {
    e.preventDefault();
    //put input in the Url
    navigate( "/searched/" + input );
    setInput( "" );
  };
  return (
    <div className="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-8 ">
        Food Recipe 🥑
      </h1>
      <form className="flex items-center" onSubmit={ submitHandler }>
        <div className="relative w-full flex">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={ input }
            onChange={ ( e ) => setInput( e.target.value ) } //update value
            placeholder="Search Recipes.."
          ></input>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bh-Orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Search Recipes</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;