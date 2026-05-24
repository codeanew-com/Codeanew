import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollUpButton from "../ScrollButton";

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <ScrollUpButton />
  </div>
);

export default MainLayout;
