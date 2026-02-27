import { FlowerCard } from "~/component/flower-card";
import { SelectionBar } from "~/component/selection-bar";
import { useState } from "react";
import { Logo } from "~/component/logo";
import { flowers, type Flower } from "~/utils/flowers";
import { BackButton } from "~/component/back-button";

export function AtelierPage() {
  const [selectedFlowers, setSelectedFlowers] = useState<any[]>([]);

  const handleFlowerClick = (flower: Flower) => {
    if (selectedFlowers.length < 4) {
      setSelectedFlowers((prev) => [...prev, flower]);
    }
  };

  const handleReset = () => setSelectedFlowers([]);
  return (
    <>
      <Logo />

      <BackButton to="/" />

      <div className="flex flex-col items-center justify-center pt-10">
        <div className="font-serif text-[#2d2926] text-5xl mb-6">
          Choose your blooms
        </div>
        <div className="text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] tracking-[0.6em] font-bold">
          Pick 2 to 4 stems
        </div>

        <div className="grid grid-cols-4 p-10 pb-4 gap-y-20 w-[90%] max-w-250">
          {flowers.map((flower) => (
            <div key={flower.id} onClick={() => handleFlowerClick(flower)}>
              <FlowerCard name={flower.name} image={flower.image} />
            </div>
          ))}
        </div>

        <div className="w-[90%] max-w-200 mt-15">
          <SelectionBar
            count={selectedFlowers.length}
            selectedImages={selectedFlowers.map((flower) => flower.image)}
            onReset={handleReset}
            selectedFlowers={selectedFlowers}
          />
        </div>
      </div>
    </>
  );
}
