import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("user-creation", "routes/user-creation.tsx"),
  route("user-table", "routes/user-table.tsx"),
  route("treasury", "routes/treasury.tsx"),
  route("fram", "routes/fram.tsx"),
  route("product-service", "routes/product-service.tsx")
] satisfies RouteConfig;
