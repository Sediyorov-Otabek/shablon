import React from "react";
import { useStateValue } from "../../context";
import Product from "../../components/products/Product";
console.log(Product);
const Wishlist = () => {
  const [data, dispatch] = useStateValue();
  console.log(data.wishlist);
  return (
    <div className="container mx-auto">
      <Product title={"Like products"} data={data.wishlist} />
    </div>
  );
};

export default Wishlist;
