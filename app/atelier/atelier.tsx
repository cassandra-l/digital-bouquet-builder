import { Link } from "react-router";
import { FlowerCard } from "~/component/flower-card";
import { SelectionBar } from "~/component/selection-bar";
import { useState } from "react";
import { Logo } from "~/component/logo";
import { flowers } from "~/utils/flowers";

export function AtelierPage() {
  const [selectedCount, setSelectedCount] = useState(0);

  const handleFlowerClick = () => {
    if (selectedCount < 6) {
      setSelectedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => setSelectedCount(0);
  return (
    <>
      <Logo />

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
          {flowers.map((flower) => (
            <div key={flower.id} onClick={handleFlowerClick}>
              <FlowerCard name={flower.name} image={flower.img} />
            </div>
          ))}
        </div>

        <div className="w-[90%] max-w-200 mt-15">
          <SelectionBar count={selectedCount} onReset={handleReset} />
        </div>
      </div>
    </>
  );
}
