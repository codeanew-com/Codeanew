import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { fallbackRoute } from "./fallback";

export function AppRoutes() {
  return useRoutes([...publicRoutes, ...fallbackRoute]);
}
