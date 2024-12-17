import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./layouts/main.tsx";

const { PUBLIC_URL } = process.env;

const About = lazy(() => import("./pages/about-page.tsx"));
const NotFound = lazy(() => import("./pages/not-found-page.tsx"));
const Publication = lazy(() => import("./pages/publication-page.tsx"));
const Posts = lazy(() => import("./pages/posts-page.tsx"));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
