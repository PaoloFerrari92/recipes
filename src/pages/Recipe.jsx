import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
/* import Loading from "../components/Loading"; */
import LoadingLottie from "../components/LoadingLottie";
import useClientApi from "../api/useClientApi";

const DetailWrapped = styled.div`
  .active {
    background: linear-gradient(35deg, #639259, #049307);
    color: white;
  }
`;

const Btn = styled.button`
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
  color: #044c0b;
  backgroud: white;
  border-radius: 0.5rem;
  border: 2px solid black;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 1rem;
`;

function Recipe () {
  let { name } = useParams();

  const { data, loading } = useClientApi(
    `https://api.spoonacular.com/recipes/${ name }/information?apiKey=${ process.env.REACT_APP_API_KEY }`
  );
  const [ details, setDetails ] = useState( {} );
  const [ activeTab, setActiveTab ] = useState( "instructions" );

  return (
    <div>
      { loading ? (
        <LoadingLottie />
      ) : (
        <DetailWrapped className="detailWrapped">
          <div>
            <div>
              <h2 className="text-1xl lg:text-2xl mt-6 text-center font-extrabold text-gray-900 mb-8" >{ data?.title }</h2>
            </div>
            <div className="flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0 mb-6">
              <img src={ data?.image } alt={ data?.title } />
            </div>
          </div>
          <Info>
            <div className="flex justify-center items-center">
              <Btn
                className={ activeTab === "instructions" ? "active" : "" }
                onClick={ () => setActiveTab( "instructions" ) }
              >
                Instructions
              </Btn>
              <Btn
                className={ activeTab === "ingredients" ? "active" : "" }
                onClick={ () => setActiveTab( "ingredients" ) }
              >
                Ingredients
              </Btn>
            </div>
            { activeTab === "instructions" && (
              <div className="info-section">
                <h2 className="text-1xl lg:text-1.5xl mt-6 font-extrabold text-gray-900 mb-4">Summary</h2>
                <h3 dangerouslySetInnerHTML={ { __html: data?.summary } }></h3>
                <h2 className="text-1xl lg:text-1.5xl mt-6 font-extrabold text-gray-900 mb-4">Recipe</h2>
                <h3
                  dangerouslySetInnerHTML={ { __html: data?.instructions } }
                ></h3>
              </div>
            ) }
            { activeTab === "ingredients" && (
              <ul className="mt-8 items-center justify-items-start">
                { data?.extendedIngredients.map( ( ingredient ) => (
                  <li key={ ingredient.id }>{ ingredient.original }</li>
                ) ) }
              </ul>
            ) }
          </Info>
        </DetailWrapped>
      ) }
    </div>
  );
}


export default Recipe;