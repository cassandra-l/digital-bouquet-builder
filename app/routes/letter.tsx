import type { Route } from "./+types/letter";
import { LetterPage } from "~/letter/letter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Letter" },
    {
      name: "description",
      content: "Write a letter to accompany your digital bouquet.",
    },
  ];
}

export default function LetterRoute() {
  return <LetterPage />;
}
