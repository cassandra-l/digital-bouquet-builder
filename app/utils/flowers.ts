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
  image: string;
};

export const flowers: Flower[] = [
  { id: 1, name: "Carnation", image: Carnation },
  { id: 2, name: "Daisy", image: Daisy },
  { id: 3, name: "Hydrangea", image: Hydrangea },
  { id: 4, name: "Lily", image: Lily },
  { id: 5, name: "Orchid", image: Orchid },
  { id: 6, name: "Peony", image: Peony },
  { id: 7, name: "Rose", image: Rose },
  { id: 8, name: "Tulip", image: Tulip },
];

export function getFlowerImageById(id: number): string | undefined {
  return flowers.find((flower) => flower.id === id)?.image;
}
