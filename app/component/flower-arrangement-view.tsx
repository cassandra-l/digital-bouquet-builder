import type { CardDetails, FlowerOnCard } from "~/types";
import { getFlowerImgById } from "~/utils/flowers";

interface Props {
  flowers: FlowerOnCard[];
  // greeneryImg: string;
}

export function FlowerArrangementView(props: Props) {
  return (
    <div className="relative w-125 h-125">
      {props.flowers.map((flower, index) => (
        <img
          key={index}
          src={getFlowerImgById(flower.id)}
          alt="flower"
          className="absolute w-24"
          style={{
            left: flower.x,
            top: flower.y,
          }}
        />
      ))}
    </div>
  );
}
