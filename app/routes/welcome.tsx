import type { Route } from "./+types/welcome";
import { Welcome } from "../welcome/welcome";

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

export default function WelcomeRoute() {
  return <Welcome />;
}
