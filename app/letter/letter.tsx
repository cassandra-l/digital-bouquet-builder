import { useLocation } from "react-router";
import { Logo } from "~/component/logo";
import { BackButton } from "~/component/back-button";

export function LetterPage() {
  const location = useLocation();

  const {
    pickedFlowers = [],
    arrangedFlowers = [],
    selectedGreenery,
  } = location.state || {};

  return (
    <>
      <Logo />
      <BackButton
        to="/composition"
        state={{
          pickedFlowers,
          arrangedFlowers,
          selectedGreenery,
        }}
      />
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="font-serif text-[#2d2926] text-5xl mb-6">The Letter</h1>
        <div className="text-[#b2a69d] font-[Tenor_Sans] uppercase text-[10px] tracking-[0.6em] font-bold">
          To
        </div>
        <hr className="bg-[#b2a69d] border-none h-0.5 w-30"></hr>
      </div>
    </>
  );
}
