import type { JSX } from "react";
import { Link } from "react-router";

export function CoverPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <Link to="/">
        <header className="absolute flex items-center gap-2 pt-10 pl-8 top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#2D2926"
            style={{ opacity: 1 }}
          >
            <path d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a7 7 0 0 1-4.12-4.12M12 22a9 9 0 0 0 9-9a9 9 0 0 0-9 9m2.42-2.43a6.88 6.88 0 0 1 4.15-4.15a7.03 7.03 0 0 1-4.15 4.15M12 14a6 6 0 0 0 6-6V3a5.9 5.9 0 0 0-2.16.39c-.55.23-1.04.57-1.45 1L12 2L9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 0 0 6 3v5a6 6 0 0 0 6 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 0 1-4 4a4 4 0 0 1-4-4z" />
          </svg>
          <h1 className="text-[#2D2926] tracking-widest uppercase font-serif cursor-pointer">
            Bloom & Note
          </h1>
        </header>
      </Link>

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
        <Link
          to="/atelier"
          className="relative group uppercase text-[#8a7b6d] hover:text-[#2c2c2c] border border-[#f0e9e1] hover:border-[#2c2c2c] text-[9px] px-24 py-6 text-bold tracking-[0.6em] transition-colors duration-1000 cursor-pointer"
        >
          Enter Atelier
          <span className="absolute inset-0 w-0 bg-[#2c2c2c]/2 transition-all duration-1000 ease-out group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
}
