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
    <ul className="flex mb-5 overflow-x-auto whitespace-nowrap gap-4">
      <li
        className="border hover:shadow-md rounded-xl px-2"
        onClick={() => setCategory("")}
      >
        All
      </li>
      {categories?.map((all) => (
        <li className="border rounded-xl px-2" key={all}>
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
      {products}
      <Product data={data?.products} />
    </div>
  );
};

export default Home;
