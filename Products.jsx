import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductGrid from "../../components/ProductGrid";


export default function AllProducts() {
  const [products, setProducts] = useState([]);

  // Fetch from backend or local mock
  useEffect(() => {
    // Uncomment below if you have Node backend running:
    // axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));

    // Mock data (for standalone demo)
    setProducts([
      {
        id: 1,
        name: "Assorted Ghee Sweets",
        price: 499,
        originalPrice: 599,
        image:
          "https://www.annapoornamithai.com/cdn/shop/files/AssortedGheeSweets.jpg?v=1719996507",
        available: true,
      },
      {
        id: 2,
        name: "Cheese Makhanas",
        price: 199,
        originalPrice: 249,
        image:
          "https://www.annapoornamithai.com/cdn/shop/files/CheeseMakhanas.jpg?v=1719996507",
        available: true,
      },
      {
        id: 3,
        name: "Choco Bounty | Coconut Sweet",
        price: 119,
        originalPrice: 199,
        image:
          "https://www.annapoornamithai.com/cdn/shop/files/ChocoBounty.jpg?v=1719996507",
        available: false,
      },
      {
        id: 4,
        name: "Karuppati Kadalai Mittai | Palm Sugar Chikki",
        price: 149,
        image:
          "https://www.annapoornamithai.com/cdn/shop/files/KaruppatiKadalaiMittai.jpg?v=1719996507",
        available: true,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen py-20 px-8 md:px-16 bg-cream">
      <h1 className="text-center text-4xl font-semibold mb-12">
        All Products
      </h1>
      <ProductGrid products={products} />
    </div>
  );
}
