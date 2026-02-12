import Carnation from "~/asset/carnation.png";
import Daisy from "~/asset/daisy.png";
import Hydrangea from "~/asset/hydrangea.png";
import Lily from "~/asset/lily.png";
import Orchid from "~/asset/orchid.png";
import Peony from "~/asset/peony.png";
import Rose from "~/asset/rose.png";
import Tulip from "~/asset/tulip.png";

export type Flower = {
  id: number;
  name: string;
  img: string;
};

export const flowers: Flower[] = [
  { id: 1, name: "Carnation", img: Carnation },
  { id: 2, name: "Daisy", img: Daisy },
  { id: 3, name: "Hydrangea", img: Hydrangea },
  { id: 4, name: "Lily", img: Lily },
  { id: 5, name: "Orchid", img: Orchid },
  { id: 6, name: "Peony", img: Peony },
  { id: 7, name: "Rose", img: Rose },
  { id: 8, name: "Tulip", img: Tulip },
];

export function getFlowerImgById(id: number): string | undefined {
  return flowers.find((flower) => flower.id === id)?.img;
}
