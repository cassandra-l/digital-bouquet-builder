import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Logo } from "~/component/logo";
import { BackButton } from "~/component/back-button";
import type { FlowerOnCard } from "~/types";
import { getFlowerImageById } from "~/utils/flowers";
import { greenery } from "~/utils/greenery";
import { Link } from "react-router";

export function CompositionPage() {
  const location = useLocation();
  // 1. Get the flowers passed from the AtelierPage
  const pickedFlowers = location.state?.pickedFlowers || [
    "Please go back to atelier and pick some flowers",
  ];

  const [selectedGreenery, setSelectedGreenery] = useState(greenery[0]);

  // 2. This state will hold the flowers + their x/y positions
  const [arrangedFlowers, setArrangedFlowers] = useState<FlowerOnCard[]>([]);

  // 3. When the page loads, initialize the positions
  useEffect(() => {
    if (pickedFlowers.length > 0) {
      const initialPositions = pickedFlowers.map(
        (flower: any, index: number) => ({
          id: flower.id,
          // unique key in case user picked multiples of the same flower
          instanceId: `${flower.id}-${index}`,
          x: 20 + index * 12, // Spread them out horizontally to start
          y: 40 + (index % 2) * 10, // Slight stagger vertically
        }),
      );
      setArrangedFlowers(initialPositions);
    }
  }, [pickedFlowers]);

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
    setArrangedFlowers((prev) =>
      prev.map((f) => ({
        ...f,
        // Keep flowers within a "safe" 20% to 80% range so they don't hit edges
        x: Math.floor(Math.random() * 60) + 20,
        y: Math.floor(Math.random() * 50) + 25,
      })),
    );
  };

  return (
    <>
      <Logo />
      <BackButton to="/atelier" />

      <div className="flex flex-col items-center justify-center pt-8">
        <div className="font-serif text-[#2d2926] text-5xl mb-6">
          Bouquet Arrangement
        </div>
        <div className="text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] tracking-[0.6em] font-bold">
          Pick your greenery
        </div>

        {/* ARRANGEMENT AREA */}
        <div className="flex items-center gap-4 w-full max-w-5xl justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-4xl p-4 text-[#b5ada3] hover:text-[#2d2926]"
          >
            ‹
          </button>

          {/* THE STAGE: We give this a fixed height so the Swap button knows where the floor is */}
          <div className="relative w-full max-w-150 h-100 flex items-center justify-center">
            {/* 1. THE GREENERY: We use object-cover to make it big and fill the space */}
            <img
              src={selectedGreenery.image}
              className="absolute w-full h-full object-contain opacity-70 mix-blend-multiply pointer-events-none transition-all duration-500"
              style={{
                zIndex: 1,
                transform: "scale(1.3)", // Adjust this number to make the leaves bigger or smaller
              }}
              alt="greenery"
            />

            {/* 2. THE FLOWERS: Stays on top */}
            <div className="absolute inset-0" style={{ zIndex: 10 }}>
              {arrangedFlowers.map((flower, index) => (
                <img
                  key={index}
                  src={getFlowerImageById(flower.id)}
                  className="absolute w-32 transition-all duration-700 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${flower.x}%`, top: `${flower.y}%` }}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-4xl p-4 text-[#b5ada3] hover:text-[#2d2926]"
          >
            ›
          </button>
        </div>

        <button
          onClick={handleSwapPositions}
          className="group flex items-center gap-1.5 text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] hover:text-[#2d2926] transition-colors duration-300 cursor-pointer mt-8"
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
          to="/atelier"
          className="relative group mt-7 uppercase text-[#8a7b6d] hover:text-[#2c2c2c] border border-[#f0e9e1] hover:border-[#2c2c2c] text-[9px] px-24 py-6 text-bold tracking-[0.6em] transition-colors duration-1000 cursor-pointer"
        >
          Next: Write a Letter
          <span className="absolute inset-0 w-0 bg-[#2c2c2c]/2 transition-all duration-1000 ease-out group-hover:w-full"></span>
        </Link>
      </div>
    </>
  );
}
