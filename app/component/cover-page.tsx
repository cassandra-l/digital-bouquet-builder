import type { JSX } from "react";

export function CoverPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <header className="group absolute flex items-center gap-2 pt-10 pl-8 top-0 left-0">
        <div className="w-6 h-px bg-black group-hover:w-10 transition-all duration-500 cursor-pointer"></div>
        <h1 className="text-[#2D2926] tracking-wide uppercase font-serif cursor-pointer">
          Bloom & Note
        </h1>
      </header>

      <div className="text-center">
        <p className="text-[#b2a69d] font-[Tenor_Sans] font-bold tracking-[0.8em] text-[9px] uppercase mb-12">
          Curated Floristry Experience
        </p>
        <h2 className="text-[#2D2926] font-serif text-9xl text-bold mb-12">
          Hand-picked <br />
          <span className="block text-[#DBC4B0] font-[Monsieur_La_Doulaise] -mt-20 ml-20 text-[200px]">
            for you.
          </span>
        </h2>
        <p className="text-[#8A7F75] font-[Inter] font-extralight leading-relaxed tracking-wide text-sm mb-16">
          Create a digital bouquet that speaks when words are not enough.
        </p>
        <button className="relative group uppercase text-[#8a7b6d] hover:text-[#2c2c2c] border border-[#f0e9e1] hover:border-[#2c2c2c] text-[9px] px-24 py-6 text-bold tracking-[0.6em] transition-colors duration-1000 cursor-pointer">
          Enter Atelier
          <span className="absolute inset-0 w-0 bg-[#2c2c2c]/2 transition-all duration-1000 ease-out group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
}
