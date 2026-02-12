import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("atelier", "routes/atelier.tsx"),
  route("card", "routes/card.tsx"),
] satisfies RouteConfig;
