import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Home, About, OurProcess, Contact, Services, Privacy } from "../pages";

export const publicRoutes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/",            element: <Home /> },
      { path: "/about",       element: <About /> },
      { path: "/our-process", element: <OurProcess /> },
      { path: "/contact-us",  element: <Contact /> },
      { path: "/services",    element: <Services /> },
      { path: "/privacy",     element: <Privacy /> },
    ],
  }
];
