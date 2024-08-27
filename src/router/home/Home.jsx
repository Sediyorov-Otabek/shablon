import React, { useState } from "react";
import Hero from "../../components/hero/hero";
import Feature from "../../components/featuries/Feature";
import { Pagination } from "antd";
import Product from "../../components/products/Product";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const [skip, setskip] = useState(1);
  const [limit, setlimit] = useState(10);
  const [category, setCategory] = useState("");
  const handlrChenge = (current, pageSize) => {
    setskip(current);
    setlimit(pageSize);
  };
  const { data, loading } = useFetch(
    `products${category ? `/category/${category}` : ""}`,
    { limit, skip: skip * limit },
    [category, skip, limit]
  );
  const { data: categories } = useFetch("products/category-list");
  console.log(data);
  const products = (
    <ul className=" container flex mb-5 overflow-x-auto whitespace-nowrap py-3 gap-4">
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
      <div>
        <Product data={data?.products} loading={loading} />
        <Pagination
          className="py-4"
          onChange={handlrChenge}
          current={skip}
          align="center"
          defaultCurrent={1}
          defaultPageSize={limit}
          total={data?.total}
        />
      </div>
    </div>
  );
};

export default Home;
