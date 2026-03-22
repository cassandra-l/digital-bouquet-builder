import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Logo } from "~/component/logo";
import { BackButton } from "~/component/back-button";
import type { FlowerOnGreenery } from "~/types";
import { getFlowerImageById, type Flower } from "~/utils/flowers";
import { greenery } from "~/utils/greenery";
import { Link } from "react-router";

export function CompositionPage() {
  const location = useLocation();
  // 1. Get the flowers passed from the AtelierPage
  const pickedFlowers = location.state?.pickedFlowers || [
    "Please return to atelier and pick some flowers",
  ];

  const [selectedGreenery, setSelectedGreenery] = useState(greenery[0]);

  // 2. This state will hold the flowers + their x/y positions
  const [arrangedFlowers, setArrangedFlowers] = useState<FlowerOnGreenery[]>(
    [],
  );

  const BOUQUET_TEMPLATES = {
    2: [
      // diagonal spread
      { x: 45, y: 36.5 }, // Top-Left
      { x: 60, y: 53.5 }, // Bottom-Right
    ],
    3: [
      // An equilateral triangle
      { x: 50, y: 38 }, // Top Center
      { x: 42, y: 54 }, // Bottom Left
      { x: 58, y: 54 }, // Bottom Right
    ],
    4: [
      // A wide diamond (Radius of 12)
      { x: 50, y: 33 }, // Top
      { x: 38, y: 45 }, // Left
      { x: 62, y: 45 }, // Right
      { x: 50, y: 57 }, // Bottom
    ],
  };

  // 3. When the page loads, initialize the positions
  useEffect(() => {
    // 1. Check if we are returning from the letter page with an existing arrangement
    const savedArrangement = location.state?.arrangedFlowers;

    if (savedArrangement && savedArrangement.length > 0) {
      setArrangedFlowers(savedArrangement);
      return; // Stop here, don't run the initial template logic
    }

    // 2. Otherwise, run your initial template logic (for the first time visit)
    const total = pickedFlowers.length;
    if (total >= 2 && total <= 4) {
      const template =
        BOUQUET_TEMPLATES[total as keyof typeof BOUQUET_TEMPLATES];
      const initialArrangement = pickedFlowers.map(
        (flower: Flower, index: number) => ({
          ...flower,
          instanceId: `${flower.id}-${index}`,
          x: template[index].x,
          y: template[index].y,
        }),
      );
      setArrangedFlowers(initialArrangement);
    }
  }, [pickedFlowers]); // Keep the dependency simple

  // Handlers for Arrows
  const handleNext = () => {
    const currentIndex = greenery.findIndex(
      (g) => g.id === selectedGreenery.id,
    );
    const nextIndex = (currentIndex + 1) % greenery.length;
    setSelectedGreenery(greenery[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = greenery.findIndex(
      (g) => g.id === selectedGreenery.id,
    );
    const prevIndex = (currentIndex - 1 + greenery.length) % greenery.length;
    setSelectedGreenery(greenery[prevIndex]);
  };

  // 4. Flower Shuffle Logic
  const handleSwapPositions = () => {
    setArrangedFlowers((prev) => {
      const total = prev.length;
      const template =
        BOUQUET_TEMPLATES[total as keyof typeof BOUQUET_TEMPLATES];

      // 1. Shuffle only the order of the template spots
      const shuffledIndices = Array.from({ length: total }, (_, i) => i).sort(
        () => Math.random() - 0.5,
      );

      // 2. Map the EXISTING flowers to the NEW spot coordinates
      return prev.map((flower, index) => ({
        ...flower, // Keep the same instanceId!
        x: template[shuffledIndices[index]].x,
        y: template[shuffledIndices[index]].y,
      }));
    });
  };

  return (
    <>
      <Logo />
      <BackButton to="/atelier" />

      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="font-serif text-[#2d2926] text-5xl mb-6">
          Bouquet Arrangement
        </h1>
        <div className="text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] tracking-[0.6em] font-bold">
          Pick your greenery
        </div>

        {/* ARRANGEMENT AREA */}
        <div className="flex items-center gap-4 w-full max-w-5xl justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-4xl p-4 text-[#b5ada3] hover:text-[#2d2926] cursor-pointer"
          >
            ‹
          </button>

          {/* THE STAGE: We give this a fixed height so the Swap button knows where the floor is */}
          <div className="relative w-full max-w-150 h-100 flex items-center justify-center">
            {/* THE GREENERY */}
            <img
              src={selectedGreenery.image}
              className="absolute w-full h-full object-contain opacity-70 mix-blend-multiply pointer-events-none transition-all duration-500"
              style={{
                zIndex: 1,
                transform: "scale(1.3)",
              }}
              alt="greenery"
            />

            {/* THE FLOWERS */}
            <div className="absolute inset-0" style={{ zIndex: 10 }}>
              {arrangedFlowers.map((flower, index) => (
                <img
                  key={index}
                  src={getFlowerImageById(flower.id)}
                  className="absolute w-32 transition-all duration-1000 ease-in-out -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${flower.x}%`,
                    top: `${flower.y}%`,
                    zIndex: 10 + Math.round(flower.y),
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-4xl p-4 text-[#b5ada3] hover:text-[#2d2926] cursor-pointer"
          >
            ›
          </button>
        </div>

        <button
          onClick={handleSwapPositions}
          className="group flex items-center gap-1.5 text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] hover:text-[#2d2926] transition-colors duration-300 cursor-pointer mt-1"
        >
          <svg
            className="group-hover:stroke-[#2d2926] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="#b2a69d"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 14l4 4l-4 4m0-20l4 4l-4 4" />
            <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
          </svg>
          Swap Flowers Position
        </button>
        <Link
          to="/letter"
          state={{
            pickedFlowers,
            arrangedFlowers, // Pass the current arrangement
            selectedGreenery,
          }}
          className="relative group mt-13 uppercase text-[#8a7b6d] hover:text-[#2c2c2c] border border-[#2c2c2c] hover:border-[#2c2c2c] text-[9px] px-24 py-6 text-bold tracking-[0.6em] transition-colors duration-1000 cursor-pointer"
        >
          Next: Write a Letter
          <span className="absolute inset-0 w-0 bg-[#2c2c2c]/2 transition-all duration-1000 ease-out group-hover:w-full"></span>
        </Link>
      </div>
    </>
  );
}
