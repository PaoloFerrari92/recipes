import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiSnail } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SLink = styled( NavLink )`
  &.active {
    background: linear-gradient(35deg, #cece04bd, #73a606);
  }
`;

function Category () {
  return (
    <div className="justify-center mb-8" role="group">
      <h3 className="text-1xl lg:text-2xl mt-6 text-center font-extrabold text-gray-900 mb-8">
        Take inspiration from some of the best cuisine in the world!
      </h3>
      <div className="flex flex-wrap justify-center justify-items-center mb-8 ml-2 mr-2 py-2 px-4 text-sm font-medium text-gray-900   
                border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500
                focus:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        <SLink className="f ml-1" to={ "/cuisine/Italian" }>
          <FaPizzaSlice className="flex flex-col ml-3" />
          <h4 >Italian</h4>
        </SLink>
        <SLink className="ml-12" to={ "/cuisine/French" }>
          <GiSnail className="ml-3" />
          <h4>French</h4>
        </SLink>
        <SLink className="ml-12" to={ "/cuisine/American" }>
          <FaHamburger className="ml-5" />
          <h4>American</h4>
        </SLink>
        <SLink className="ml-12" to={ "/cuisine/Thai" }>
          <GiNoodles className="ml-2" />
          <h4>Thai</h4>
        </SLink>

      </div>
    </div>
  );
}


export default Category;