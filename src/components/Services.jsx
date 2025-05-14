import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Services = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mattressdirect.ng/mattressdirect_backend/api/product/getAllProduct.php",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.data && response.data.data) {
          setProducts(response.data.data);
        } else {
          setError("Invalid data format received");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  if (!products || products.length === 0)
    return <div className="text-center p-4">No products found</div>;

  return (
    <section className="items-center justify-center flex flex-col p-10">
      <div className="w-300 items-center justify-center flex flex-col">
        <div className="flex flex-col items-center pb-10">
          <h4 className="font-bold text-blue-700 tracking-widest">PRODUCTS</h4>
          <h2 className="font-extrabold text-3xl p-3">
            Find the perfect mattress for your needs
          </h2>
          <p className="text-center text-black/80">
            Browse through our collection of high-quality mattresses from top
            brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.product_image}
              alt={product.product_name}
              heading={product.product_name}
              details={product.product_description}
              price={product.product_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
