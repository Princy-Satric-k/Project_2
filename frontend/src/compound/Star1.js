import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Star1 = ({ star, reviews }) => {
  console.log("stars", reviews);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="text-success" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-success" />
        ) : (
          <AiOutlineStar className="text-success" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="d-flex flex-row">
        {ratingStar}
        <p className="ms-2 text-muted">({reviews})</p>
      </div>
    </>
  );
};

export default Star1;
