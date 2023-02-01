import React, { useState } from "react";

const Tour = (props) => {
  const { id, image, info, name, price } = props.obj;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-bloc">
      <article className="singleTour">
        <div className="tour-img">
          <img src={image} alt={name} />
          <span>{price}</span>
        </div>
        <div className="tour-para">
          <h3>{name}</h3>
          <p>{readMore ? info : `${info.substring(0, 200)}....`}</p>
          <button id="more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More"}
          </button>
          <button
            className="text-white btn btn-warning d-block w-100 mt-4"
            onClick={() => props.fun(id)}
          >
            Not Interested
          </button>
        </div>
      </article>
    </div>
  );
};

export default Tour;
