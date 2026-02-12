import type { Route } from "./+types/atelier";
import { AtelierPage } from "~/atelier/atelier";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Atelier" },
    { name: "description", content: "Design your digital bouquet." },
  ];
}

export default function AtelierRoute() {
  return <AtelierPage />;
}
