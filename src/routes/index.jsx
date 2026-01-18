import React, { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Homepage from "@/pages/home";
import Contentpage from "@/pages/content";

const AllRoutes = () => {
  return (
    <Suspense >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Homepage />} /> 
            <Route path="content" element={<Contentpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;