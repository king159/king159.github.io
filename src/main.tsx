import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/about-page";
import Publication from "./pages/publication-page";
import Post from "./pages/posts-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/publication",
    element: <Publication />,
  },
  {
    path: "/posts",
    element: <Post />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
