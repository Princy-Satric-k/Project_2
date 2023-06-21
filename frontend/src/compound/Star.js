import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Star = ({ star, reviews }) => {
  console.log("stars", reviews);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="text-warning" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-warning" />
        ) : (
          <AiOutlineStar className="text-warning" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="d-flex flex-row justify-content-between mt-2">
        {ratingStar}
        <p className="ms-2">{reviews} customer reviews</p>
      </div>
    </>
  );
};

export default Star;
