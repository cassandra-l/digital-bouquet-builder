import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  route("atelier", "routes/atelier.tsx"),
] satisfies RouteConfig;
