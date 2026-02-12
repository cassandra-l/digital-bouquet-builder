import { Logo } from "~/component/logo";
import type { CardDetails } from "~/types";
import { FlowerArrangementView } from "~/component/flower-arrangement-view";

const sampleData: CardDetails = {
  flowers: [
    { id: 1, x: 10, y: 20 },
    { id: 2, x: 30, y: 60 },
  ],
  text: "Happy Birthday!",
  greeneryImg: "greenery.png",
};

export function CardPage() {
  return (
    <>
      <Logo />
      <div className="text-center text-2xl font-bold">{sampleData.text}</div>
      <FlowerArrangementView flowers={sampleData.flowers} />
    </>
  );
}
