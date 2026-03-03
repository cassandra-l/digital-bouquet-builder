import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("atelier", "routes/atelier.tsx"),
  route("composition", "routes/composition.tsx"),
  route("letter", "routes/letter.tsx"),
] satisfies RouteConfig;
