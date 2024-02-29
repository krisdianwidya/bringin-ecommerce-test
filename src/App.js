import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="cart"
        element={
          <React.Suspense fallback={<>...</>}>
            <Cart />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
