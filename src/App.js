import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
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
        <Route
          path="/products/:productId"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProductDetail />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
