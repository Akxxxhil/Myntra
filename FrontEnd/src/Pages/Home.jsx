import React from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Products";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";


function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
