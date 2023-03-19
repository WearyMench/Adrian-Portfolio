import React from "react";

import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import NotFound from "../pages/NotFoundPages";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const Location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={Location} key={Location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
