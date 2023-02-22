import products from "../library";
import { Card } from "./Card";

export const CardsCont = () => {
  return (
    <div className="CardCont container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">Products</h1>
        </div>
      </div>

      <div className="row">
        {products.map(({ id, title, price, stars, desc }) => (
          <Card
            key={id}
            id={id}
            title={title}
            price={price}
            stars={stars}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};
