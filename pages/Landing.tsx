// React
import React from "react";

// Components
import Navbar from "../src/components/Navbar";

// Images
import UndrawNature from "../src/assets/undraw_nature.svg";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="h-[90vh] bg-gray-50">
        <div className="grid grid-cols-2 gap-40 h-full items-center">
          <div className="w-12/12 h-full flex flex-col gap-5 p-24">
            <h1 className="text-8xl text-gt-main-green-800">
              Mussum Ipsum, <br />
              cacilds vidis litro abertis.
            </h1>
            <h4 className="text-3xl">
              Interagi no mé, cursus quis, vehicula ac nisi.
            </h4>
            <a href="/signup">
              <button className="w-60 h-16 border-solid border-3 border-gt-main-green-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-gt-main-green-600 text-white text-lg font-semibold font-montserrat hover:bg-gt-main-green-700 hover:text-white hover:text-xl">
                Criar Conta
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={UndrawNature} alt="nature illustration" className="w-8/12" />

          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
