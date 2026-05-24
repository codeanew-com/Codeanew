import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { NotFound } from "../pages";

export const fallbackRoute = [
  {
    element: <MainLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
];
