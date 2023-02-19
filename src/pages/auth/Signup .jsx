import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="max-w-screen-xl m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-3xl font-medium">
              Create an account
            </h1>
            <small className="text-gray-500">
              Join our community and shop with ease
            </small>
          </div>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center"></div>

            <div className="mx-auto max-w-xs">
              <div>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center mt-5">
                <Button variant="contained">Save</Button>
              </div>

              <p className="my-5 text-sm text-gray-500">
                I have already account !{" "}
                <Link
                  to="/auth/signin"
                  className="mx-1 text-base text-gray-800 hover:text-blue-800"
                >
                  Login
                </Link>
              </p>

              <p className="mt-6 text-xs text-gray-500 text-center">
                I agree to abide by buyNow
                <Link
                  to={"/"}
                  className="border-b border-gray-700 border-dotted mx-1"
                >
                  Terms of Service
                </Link>
                and its
                <Link
                  to={"/"}
                  className="border-b border-gray-700 border-dotted mx-1"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
          }}
        ></div>
      </div>
    </div>
  );
}
