import React from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./menu/About";
import Products from "./menu/Products";
import Stores from "./menu/Stores";
import News from "./menu/News";
import Support from "./menu/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "stores",
    element: <Stores />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
