import type { Route } from "./+types/home";
import { Home } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bloom & Note" },
    {
      name: "description",
      content:
        "Welcome to Bloom & Note, a curated digital floristry experience.",
    },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
