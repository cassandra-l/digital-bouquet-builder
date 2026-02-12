import { Link } from "react-router";
import { Logo } from "~/component/logo";

export function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <Logo isAbsolute />

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
