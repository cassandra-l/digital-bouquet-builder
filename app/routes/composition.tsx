import type { Route } from "./+types/composition";
import { CompositionPage } from "~/composition/composition";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Composition" },
    { name: "description", content: "Compose your digital bouquet." },
  ];
}

export default function CompositionRoute() {
  return <CompositionPage />;
}
