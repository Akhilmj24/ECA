import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Layout from "./layout/Layout";
import PrivateRoute from "./utils/service/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<Layout />} />
          </Route>
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
