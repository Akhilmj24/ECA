import React from "react";
import Footer from "./Footer";
import NavBar from "./navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/service/Routes";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../components/loader/Loader";
export default function Layout() {
  const loading = useSelector((state) => state.product.loading);
  const loadingss = false;
  console.log(loading);

  // if (loading) {
  //   return ;
  // } else {
  return (
    <main className="bg-white relative">
      {loading ? (
        <div className="absolute top-0 right-0 z-[6000]">
          <Loader />
        </div>
      ) : null}
      <aside className="fixed top-0 right-0 w-full z-[5000]">
        <NavBar />
      </aside>
      <section className="pt-36">
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "adminpages" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <Footer />
      </section>
    </main>
  );
}
// }
