import type { Route } from "./+types/card";
import { CardPage } from "~/card/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Card" },
    { name: "description", content: "Design your digital bouquet." },
  ];
}

export default function CardRoute() {
  return <CardPage />;
}
