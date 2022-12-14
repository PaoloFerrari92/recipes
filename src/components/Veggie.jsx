import React, { useContext } from "react";
import { VeggieContext } from "../context/veggieContext";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  margin: 2rem 1rem;
`;
const Card = styled.div`
  min-height: 17rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 1%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 1.5rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Veggie () {
  const [ veggie ] = useContext( VeggieContext );

  return (
    <div>
      <Wrapper>
        <h3 className="text-1xl lg:text-2xl mt-6 text-center font-extrabold text-gray-900 mb-8">
          Our recipes suggested for you ....</h3>
        <Splide
          options={ {
            perPage: 2,
            focus: "center",
            drag: "free",
            arrows: true,
            rewindByDrag: true,
            pagination: false,
            gap: "2rem",
          } }
        >
          { veggie?.map( ( recipe ) => {
            return (
              <SplideSlide key={ recipe.id }>
                <Card>
                  <Link to={ "/recipe/" + recipe.id }>
                    <p>{ recipe.title }</p>
                    <img src={ recipe.image } alt={ recipe.title } />
                    <div className="gradient" />
                  </Link>
                </Card>
              </SplideSlide>
            );
          } ) }
        </Splide>
      </Wrapper>
    </div>
  );
}


export default Veggie;