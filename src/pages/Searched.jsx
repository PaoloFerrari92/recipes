import React from "react";

import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
/* import Loading from "../components/Loading"; */
import LoadingLottie from "../components/LoadingLottie";
import useClientApi from "../api/useClientApi";

const Card = styled.div`
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

function Searched () {
  let { search } = useParams();

  const { data, loading } = useClientApi(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ process.env.REACT_APP_API_KEY }&query=${ search }`
  );

  return (
    <div>
      { loading ? (
        <LoadingLottie />
      ) : (
        <div>
          <h2
            className="text-1xl lg:text-2xl mt-6 text-center font-extrabold text-gray-900 mb-8"
            style={ {
              textAlign: "center",
              marginBottom: "-15px",
              marginTop: "50px",
            } }
          >
            Searched results :
          </h2>
          <div className="grid">
            { data?.results.map( ( item ) => {
              return (
                <Card
                  className="card card--style"
                  key={ item.id }
                >
                  <Link to={ "/recipe/" + item.id }>
                    <img
                      className="justify-center items-center mb-5"
                      src={ item.image }
                      alt={ item.title }
                    ></img>
                    <h4 className="flex justify-center items-center font-extrabold text-gray-900"
                      style={ { textAlign: "center" } }>{ item.title }</h4>
                  </Link>
                </Card>
              );
            } ) }
          </div>
        </div>
      ) }
    </div>
  );
}



export default Searched;