import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa6";

function ProductPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="hero flex flex-col h-fit justify-center items-center mt-5">
        <h1 className="mb-10 font-bold text-3xl">Product Card</h1>
        <div className="flex gap-5 ">
          <ProductCard
            foto="src\assets\Product\Sumatra Mandheling.jpeg"
            judul="Sumatra Mandheling"
            asal="Aceh, North Sumatra"
          />
          <ProductCard
            foto="src\assets\Product\Java Preanger.jpeg"
            judul="Java Preanger"
            asal="West Java"
          />
          <ProductCard
            foto="src\assets\Product\Sumatra Mandheling.jpeg"
            judul="Sumatra Mandheling"
            asal="Aceh, North Sumatra"
          />
        </div>
        <div className="flex gap-5 my-10">
          <ProductCard
            foto="src\assets\Product\Java Preanger.jpeg"
            judul="Java Preanger"
            asal="West Java"
          />
          <ProductCard
            foto="src\assets\Product\Sumatra Mandheling.jpeg"
            judul="Sumatra Mandheling"
            asal="Aceh, North Sumatra"
          />
          <ProductCard
            foto="src\assets\Product\Java Preanger.jpeg"
            judul="Java Preanger"
            asal="West Java"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(src/assets/KopiHeroSection.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Coffee Products</h1>

            <button className="btn bg-amber-800 border-amber-800 text-white">
              Request Samples <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductCard(props) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={props.foto} alt="Coffee" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.judul}</h2>
          <p className="text-gray-400">{props.asal}</p>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Processing</span>
              <span>Washed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Altitude</span>
              <span>1,300-1,600 masl</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Flavor Notes</span>
              <span>Citrus, Floral, Clean</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Available</span>
              <span>June - December</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary btn-block bg-amber-800 border-amber-800">
              Request Quotation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

