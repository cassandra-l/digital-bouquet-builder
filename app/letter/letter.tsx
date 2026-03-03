import { useLocation } from "react-router"; // 1. Import useLocation
import { Logo } from "~/component/logo";
import { BackButton } from "~/component/back-button";

export function LetterPage() {
  const location = useLocation(); // 2. Initialize location

  // 3. Extract the data from state
  const {
    pickedFlowers = [],
    arrangedFlowers = [],
    selectedGreenery,
  } = location.state || {};

  return (
    <>
      <Logo />
      {/* 4. Now these variables exist and the red lines will vanish! */}
      <BackButton
        to="/composition"
        state={{
          pickedFlowers,
          arrangedFlowers,
          selectedGreenery,
        }}
      />

      {/* Your letter input code goes here */}
    </>
  );
}
