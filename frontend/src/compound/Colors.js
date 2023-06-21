import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
const Colors = ({ product }) => {
  const { color } = product;
  const [colour, setColour] = useState(color[0]);
  return (
    <div>
      {color.map((current, index) => (
        <button
          key={index}
          style={{ backgroundColor: current }}
          className={
            colour === current ? "btn-circle active me-1" : "btn-circle me-1 "
          }
          onClick={() => setColour(current)}
        >
          {colour === current ? <FaCheck className="text-light" /> : null}
        </button>
      ))}
    </div>
  );
};

export default Colors;
