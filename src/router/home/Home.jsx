import React, { useState } from "react";
import Hero from "../../components/hero/hero";
import Feature from "../../components/featuries/Feature";
import Product from "../../components/products/Product";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useFetch(
    `products${category ? `/category/${category}` : ""}`,
    { limit: 10 },
    [category]
  );
  const { data: categories } = useFetch("products/category-list");
  console.log(data);
  const products = (
    <ul>
      <li onClick={() => setCategory("")}>All</li>
      {categories?.map((all) => (
        <li key={all}>
          <button onClick={() => setCategory(all)}>
            {all.split("-").join(" ")}
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <Hero />
      <Feature />
      <Category data={data?.products} />
      {products}
      <Product data={data?.products} />
    </div>
  );
};

export default Home;
