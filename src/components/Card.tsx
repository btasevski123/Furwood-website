import { Link } from "react-router-dom";
import { Product } from "../types";

export const Card = ({ id, title, price, stars, desc }: Product) => {
  return (
    <div className="Card col-4">
      <Link to={`details/${id}`}>
        <img src={`img/${id}.jpg`} alt={title} />

        <h2>{title}</h2>

        <p className="price">{price}</p>

        {Array.from(Array(stars).keys()).map((star) => (
          <i key={star} className="fa fa-star"></i>
        ))}
      </Link>
    </div>
  );
};
