import { Link } from "react-router";
import { FlowerCard } from "~/component/flower-card";
import { SelectionBar } from "~/component/selection-bar";
import { useState } from "react";

import Carnation from "~/asset/carnation.png";
import Daisy from "~/asset/daisy.png";
import Hydrangea from "~/asset/hydrangea.png";
import Lily from "~/asset/lily.png";
import Orchid from "~/asset/orchid.png";
import Peony from "~/asset/peony.png";
import Rose from "~/asset/rose.png";
import Tulip from "~/asset/tulip.png";

export function AtelierPage() {
  const Flowers = [
    { id: 1, name: "Carnation", img: Carnation },
    { id: 2, name: "Daisy", img: Daisy },
    { id: 3, name: "Hydrangea", img: Hydrangea },
    { id: 4, name: "Lily", img: Lily },
    { id: 5, name: "Orchid", img: Orchid },
    { id: 6, name: "Peony", img: Peony },
    { id: 7, name: "Rose", img: Rose },
    { id: 8, name: "Tulip", img: Tulip },
  ];

  const [selectedCount, setSelectedCount] = useState(0);

  const handleFlowerClick = () => {
    if (selectedCount < 6) {
      setSelectedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => setSelectedCount(0);
  return (
    <>
      <Link to="/">
        <header className="flex items-center gap-2 pt-10 pl-8 top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#000000"
            style={{ opacity: 1 }}
          >
            <path d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a7 7 0 0 1-4.12-4.12M12 22a9 9 0 0 0 9-9a9 9 0 0 0-9 9m2.42-2.43a6.88 6.88 0 0 1 4.15-4.15a7.03 7.03 0 0 1-4.15 4.15M12 14a6 6 0 0 0 6-6V3a5.9 5.9 0 0 0-2.16.39c-.55.23-1.04.57-1.45 1L12 2L9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 0 0 6 3v5a6 6 0 0 0 6 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 0 1-4 4a4 4 0 0 1-4-4z" />
          </svg>
          <h1 className="text-[#2D2926] tracking-widest uppercase font-serif cursor-pointer">
            Bloom & Note
          </h1>
        </header>
      </Link>

      <button className="group flex items-center gap-2 pt-10 pl-8">
        <div className="w-6 h-px bg-[#d1d1d1] group-hover:text-[#2c2c2c] group-hover:w-10 transition-all duration-700 cursor-pointer"></div>
        <Link
          to="/"
          className="font-serif text-[#d1d1d1] group-hover:text-[#2c2c2c] transition-colors duration-700 text-[10px] tracking-[0.6em] uppercase cursor-pointer"
        >
          Previous Page
        </Link>
      </button>

      <div className="flex flex-col items-center justify-center pt-10">
        <div className="font-serif text-[#2d2926] text-5xl mb-6">
          Choose your blooms
        </div>
        <div className="text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] tracking-[0.6em] font-bold">
          Pick 4 to 6 stems
        </div>

        <div className="grid grid-cols-4 p-8 gap-y-20 w-[90%] max-w-250">
          {Flowers.map((flower) => (
            <FlowerCard key={flower.id} name={flower.name} image={flower.img} />
          ))}
        </div>

        <div className="w-[90%] max-w-250 mt-15">
          <SelectionBar />
        </div>
      </div>
    </>
  );
}
