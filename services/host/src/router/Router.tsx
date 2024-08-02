import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...shopRoutes, ...adminRoutes],
  },
]);
