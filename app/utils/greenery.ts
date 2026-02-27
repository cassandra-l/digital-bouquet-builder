import Greenery1 from "~/asset/greenery1.png";
import Greenery2 from "~/asset/greenery2.png";

export type Greenery = {
  id: number;
  name: string;
  image: string;
};

export const greenery: Greenery[] = [
  { id: 1, name: "Greenery1", image: Greenery1 },
  { id: 2, name: "Greenery2", image: Greenery2 },
];
