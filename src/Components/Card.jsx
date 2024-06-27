import { useState } from "react";

const Card = ({ id, image, info, name, price, removeTour }) => {
  // read more ka option hai when we click on the read more the content show more anf
  const [readmore, setReadmore] = useState(false);
  const Description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandller() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt="image" />

      <div className="tourinfo">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="desc">
          {Description}
          <span onClick={readmoreHandller} className="readmore">
            {readmore ? `show less ` : `read more`}
          </span>
        </div>
      </div>

      <button onClick={() => removeTour(id)} className="btn bg-gray-200">
        {" "}
        Not Interested
      </button>
    </div>
  );
};

export default Card;
