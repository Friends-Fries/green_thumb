// React
import React from "react";

// Components
import Navbar from "../src/components/Navbar";

// Images
import UndrawNature from "../src/assets/undraw_nature.svg";
import ArrowDown from "../src/assets/arrow-down.svg";

// Animations
import "animate.css";

function Landing() {

  const scrollToSection = () => {
    const section = document.getElementById('second-section');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Navbar />
      <section id="first-section" className="h-[90vh] bg-gray-50">
        <div className="grid grid-cols-2 gap-40 h-full items-center">
          <div className="w-12/12 h-full flex flex-col gap-5 p-28">
            <h1 className="text-8xl text-[#86C43F] font-gabriela animate__animated animate__fadeIn">
              Mussum Ipsum, <br />
              <span className="text-[#409845]">cacilds vidis litro abertis.</span>
            </h1>
            <h4 className="text-3xl text-gt-main-green-900 opacity-75 animate__animated animate__fadeIn">
              Interagi no mé, cursus quis, vehicula ac nisi.
            </h4>
            {/* <a href="#second-section"> */}
              <button className="animate__animated animate__fadeIn w-8/12 flex items-center justify-center gap-3 mt-7 h-16 border-solid border-3 border-gt-main-green-400 rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-gt-main-green-600 text-white text-xl font-semibold font-montserrat hover:bg-gt-main-green-700 hover:text-white hover:text-2xl"
                onClick={scrollToSection}
              >
                <img src={ArrowDown} className="h-6 w-6 hover:h-7 hover:w-7" />
                Explorar Conteúdo
              </button>
            {/* </a> */}
          </div>
          <div className="flex items-center justify-center h-full animate__animated animate__zoomIn">
            <img src={UndrawNature} alt="nature illustration" className="w-8/12" />
          </div>
        </div>
      </section>
      <section id="second-section" className="h-screen bg-gt-main-green-50">

      </section>
      <section id="third-section" className="h-screen bg-gray-50">

      </section>
    </>
  );
}

export default Landing;
