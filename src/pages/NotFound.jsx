import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center font-extrabold text-gray-900">
      <h3 style={ { marginTop: "4rem" } }>
        Sorry...your link isn't correct, search something{ " " }
        <BsFillArrowUpSquareFill className="items-center justify-center" /> or Click
        <Link to="/">
          { " " }
          <u>HERE</u>{ " " }
        </Link>
        to back in the Home Page
      </h3>
    </div>
  );
};