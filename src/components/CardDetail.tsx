import { useParams } from "react-router-dom";
import products from "../library";
import { Product } from "../types";
import { Banner } from "./Banner";
import { ErrorPage } from "./ErrorPage";

const getCardById = (id: string | undefined): Product | undefined => {
  if (!id) {
    return undefined;
  }

  return products.find((prod) => prod.id === +id);
};

export const CardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getCardById(id);

  if (!product) {
    return <ErrorPage />;
  }

  return (
    <>
      <Banner title={product.title} />
      <div className="CardDetail container">
        <div className="row">
          <div className="col-6 text-center">
            <img src={`/img/${id}.jpg`} alt="" />
          </div>

          <div className="col-6 info-cont">
            <p className="price">{product.price}</p>
            <p className="title">{product.title}</p>

            {Array.from(Array(product.stars).keys()).map((star) => (
              <i key={star} className="fa fa-star"></i>
            ))}

            <p>{product.desc}</p>

            <button className="button">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
