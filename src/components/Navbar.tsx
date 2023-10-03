// React
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// Images
import Logo from "../assets/favicon-gt.svg";

// Icons
// import { IoGameController } from "react-icons/io5";
// import {
//   HiHome,
//   HiFilm,
//   HiShoppingBag,
//   HiInformationCircle,
// } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-900 border-b-2 border-gt-main-green-50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-16 p-2"
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className=" hover:bg-gt-main-green-50 hover:text-gt-main-green-800 text-gt-main-green-700 px-5 py-2 rounded-md text-lg font-medium"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* <HiHome size={"1.2em"} /> */}
                      Home
                    </div>
                  </a>
                  <a
                    href="/dashboard"
                    className=" hover:bg-gt-main-green-50 hover:text-gt-main-green-800 text-gt-main-green-700 px-5 py-2 rounded-md text-lg font-medium"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* <HiInformationCircle size={"1.2em"} /> */}
                      Minha Horta
                    </div>
                  </a>

                  <a
                    href="/about"
                    className=" hover:bg-gt-main-green-50 hover:text-gt-main-green-800 text-gt-main-green-700 px-5 py-2 rounded-md text-lg font-medium"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* <HiInformationCircle size={"1.2em"} /> */}
                      Sobre Nós
                    </div>
                  </a>

                  <a
                    href="/login"
                    className=" bg-gt-main-green-700 text-white hover:bg-gt-main-green-500 px-5 py-2 rounded-md text-lg font-medium"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* <HiInformationCircle size={"1.2em"} /> */}
                      Entrar
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gt-main-green-700 inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/home"
                  className="text-gt-main-green-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex flex-row items-center gap-2">
                    {/* <HiHome size={"1.2em"} /> */}
                    Home
                  </div>
                </a>
                <a
                  href="/dashboard"
                  className="text-gt-main-green-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex flex-row items-center gap-2">
                    {/* <HiInformationCircle size={"1.2em"} /> */}
                    Minha Horta
                  </div>
                </a>

                <a
                  href="/about"
                  className="text-gt-main-green-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex flex-row items-center gap-2">
                    {/* <HiInformationCircle size={"1.2em"} /> */}
                    Sobre Nós
                  </div>
                </a>
                <a
                  href="/login"
                  className="text-gt-main-green-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex flex-row items-center gap-2">
                    {/* <HiInformationCircle size={"1.2em"} /> */}
                    Entrar
                  </div>
                </a>
                
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;