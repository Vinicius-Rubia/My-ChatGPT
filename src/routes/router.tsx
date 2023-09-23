import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";
import Loading from "../pages/Loading";
import Context from "../pages/Context";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Loading />} />
          <Route path="/welcome" element={Welcome} />
          <Route path="/chat" element={Chat} />
          <Route path="/context" element={Context} />
          <Route path="/*" element={<Navigate replace to="/welcome" />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};
