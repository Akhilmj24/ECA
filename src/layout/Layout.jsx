import React from "react";
import Footer from "./Footer";
import NavBar from "./navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/service/Routes";

export default function Layout() {
  return (
    <main className="bg-white relative">
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
