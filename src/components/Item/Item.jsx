import React from "react";

import { Link } from "react-router-dom";

const Item = ({ id, image, category, description, stock, price, title }) => {
  return (
    <>
      <div className="card m-3 " style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          <p>
            <b>${price}</b>
          </p>
          <Link className="btn btn-primary mb-3">Ver producto</Link>
        </div>
      </div>
    </>
  );
};

export default Item;
