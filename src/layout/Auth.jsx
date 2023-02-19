import React from 'react'
import { Routes, Route } from "react-router-dom";
import { routes } from '../utils/service/Routes';

export default function Auth() {
  return (
    <div>
        <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  )
}
