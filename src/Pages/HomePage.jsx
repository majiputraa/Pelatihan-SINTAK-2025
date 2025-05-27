import React from "react";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <div className="hero bg-red-800 h-[500px] pt-5 flex flex-col items-center justify-center">
        <p className="bg-amber-200 text-amber-800 px-3 py-1 rounded-xl w-fit p-10 mb-10">
          Kenapa Harus Kita?
        </p>
        <div className="flex gap-5 justify-center">
          <Section3 event="Popular" jenis="Americano" harga="20k" />
          <Section3 event="Terlaris" jenis="Cappucino" harga="15k" />
          <Section3 event="Popular" jenis="Americano" harga="20k" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(/KopiHeroSection.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5">
              Kopi mahal khas indonesia, terbuat dari biji kopi pilihan
            </p>
            <button className="btn bg-amber-800 border-amber-800 text-white">
              View Coffee Catalog <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 h-[350px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/Section2.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-[7000px]"
          />
          <div>
            <p className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-xl w-fit">
              Direct by Majiputraa
            </p>
            <h1 className="text-5xl font-bold">Kopi Khas Indonesia</h1>
            <p className="py-6">
              Kopi khas indonesia dengan biji kopi pilihan, kualitas terjamin,
              harga terjangkau, dan tentunya dengan kemasan yang aesthetic
            </p>
            <button className="btn btn-primary bg-amber-800 border-amber-800">
              Pelajari Prosesnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section3(props) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">{props.event}</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{props.jenis}</h2>
            <span className="text-xl">{props.harga}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">Seamless cloud integration</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                Real-time collaboration tools
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
