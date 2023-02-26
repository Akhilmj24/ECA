import React, { useState } from "react";
import "./nav.scss";
import Avatar from "@mui/material/Avatar";
import {
  navgiationMobileMenu,
  navgiationSingleMenu,
  navgiationSubMenu,
} from "../../utils/data/navigation/menuNav";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerIndex, setFlyerIndex] = useState(0);
  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.clear();
    navigate("/auth/signin");
  };
  return (
    <nav className="relative bg-white">
      <div className="md:px-24 px-14 navdesk">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <Link to={"/"} className="flex justify-start lg:w-0 lg:flex-1">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </Link>
          <div
            className="-mr-2 -my-2 md:hidden cursor-pointer text-3xl"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name="menu"></ion-icon>
          </div>
          <nav className="hidden md:flex gap-3 items-center">
            <div className="relative">
              {navgiationSubMenu.map((menu, index) => (
                <button
                  key={index}
                  type="button"
                  className="
                   group inline-flex items-center text-base font-medium hover:text-slate-500' mr-5
                  "
                  onClick={() => (setFlyer(!flyer), setFlyerIndex(index))}
                >
                  <span>{menu.mainmenu}</span>

                  <svg
                    className={
                      flyerIndex === index
                        ? flyer === true
                          ? "transform rotate-180 ml-2 h-5 w-5  group-hover:text-slate-500 transition ease-out duration-200"
                          : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5  group-hover:text-slate-500"
                        : "h-5 w-5 ml-2"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ))}
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " opacity-0 hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {navgiationSubMenu[flyerIndex]?.submenu.map(
                      ({ name, path, tagline, icon }) => (
                        <Link
                          to={path}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="text-3xl iconColor">
                            <ion-icon name={icon}></ion-icon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {tagline}
                            </p>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            {navgiationSingleMenu.map(({ name, path }) => (
              <Link
                to={path}
                className="text-base font-medium  tracking-wide hover:text-slate-500"
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="/profile" className="cursor-pointer">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Link>
            <p
              className="mx-5 cursor-pointer hover:text-slate-500"
              onClick={() => logoutHandler()}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
      {/*    Mobile menu, show/hide based on mobile menu state.*/}

      <div
        className={
          open
            ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-bottom-left md:hidden"
            : "opacity-0 -scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-bottom-left md:hidden"
        }
      >
        <div className="rounded-lg shadow-lg  bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white text-2xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <ion-icon name="close"></ion-icon>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navgiationMobileMenu.map(({ name, path }) => (
                <Link
                  to={path}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div>
              <Link
                to={"/"}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <Link
                  to={"/"}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
