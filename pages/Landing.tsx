// React
import React from "react";

// Components
import Navbar from "../src/components/Navbar";

// Images
import UndrawNature from "../src/assets/undraw_nature.svg";

// Animations
import "animate.css";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="h-[90vh] bg-gray-50">
        <div className="grid grid-cols-2 gap-40 h-full items-center">
          <div className="w-12/12 h-full flex flex-col gap-5 p-28">
            <h1 className="text-8xl text-[#86C43F] font-gabriela animate__animated animate__fadeIn">
              Mussum Ipsum, <br />
              <span className="text-[#409845]">cacilds vidis litro abertis.</span>
            </h1>
            <h4 className="text-3xl text-gt-main-green-900 opacity-75 animate__animated animate__fadeIn">
              Interagi no mé, cursus quis, vehicula ac nisi.
            </h4>
            <a href="/signup">
              <button className="animate__animated animate__fadeIn w-6/12 mt-7 h-16 border-solid border-3 border-gt-main-green-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-gt-main-green-600 text-white text-xl font-semibold font-montserrat hover:bg-gt-main-green-700 hover:text-white hover:text-2xl">
                Criar Conta
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center h-full animate__animated animate__zoomIn">
            <img src={UndrawNature} alt="nature illustration" className="w-8/12" />
          </div>
        </div>
      </section>
      <section className="h-screen bg-gt-main-green-50">

      </section>
      <section className="h-screen bg-gray-50">

      </section>
    </>
  );
}

export default Landing;
