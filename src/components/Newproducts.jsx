import "./Navbar.css";


import { products } from "./data";
import { Link } from "react-router-dom";
function Newproducts() {
  return (

    <>
      <h1 className="featured">New items</h1>
      <hr className="hr" />
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {products.map((item) => {
          return (
            <div class="card">
              <div class="card-image">
                <img src={item.image} alt="Product Image" />
              </div>
              <div class="card-content">
                <h3 class="product-title">{item.title}</h3>
                {/* <p class="product-description">{item.description.slice(0,50)}</p> */}
                {/* <p class="product-price">${item.price}</p> */}
                <Link to={`/products/${item.id}`}  class="btn">
                  Add to Cart
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Newproducts;
