import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, category, description, stock, price, title, quantity }) => {
  return (
    <>
      <div className="card m-3 border border-3" id="salesCard" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          <p>
            <b>${price}</b>
          </p>
        </div>
        <Link to={"/item/" + id} className="text-dark text-decoration-none mb-3">
          Ver Producto
        </Link>
      </div>
    </>
  );
};

export default Item;
