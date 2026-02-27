import { useNavigate } from "react-router";

interface Props {
  count: number;
  onReset: () => void;
  selectedImages: string[];
  // Add this so the bar has access to the full data if needed
  selectedFlowers: any[];
}

export function SelectionBar(prop: Props) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (prop.count >= 2) {
      // This "pushes" the data to the next page hidden in the background
      navigate("/composition", {
        state: { pickedFlowers: prop.selectedFlowers },
      });
    }
  };
  return (
    <div className="bg-[#FFFBF7] border border-[#e5ded4] shadow-lg p-4 flex items-center justify-between">
      <div className="flex flex-col pl-6">
        <span className="text-[#2d2926] text-[10px] font-mono uppercase">
          {prop.count} stems
        </span>
        <span className="text-[#b5ada3] text-[9px] font-mono uppercase">
          selected
        </span>
      </div>

      <div className="flex flex-1 items-center pl-10 gap-2 overflow-hidden">
        {prop.selectedImages.map((imgUrl, index) => (
          <div
            key={index}
            className="w-10 h-10 overflow-hidden animate-in fade-in zoom-in duration-500"
          >
            <img
              src={imgUrl}
              alt="selected stem"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end pr-4 gap-4">
        <button
          onClick={prop.onReset}
          className={`group flex items-center gap-1.5 text-[#b5ada3] border border-transparent uppercase tracking-[0.3em] text-[10px] px-6 py-3 transition-all duration-300 ease-out transform
              ${
                prop.count > 0
                  ? "opacity-100 scale-100 cursor-pointer hover:border-[#e5ded4] hover:text-[#2d2926] hover:bg-[#e5ded4]/20"
                  : "opacity-0 scale-50"
              }`}
        >
          <svg
            className="fill-current group-hover:text-[#2d2926] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="13"
            height="13"
          >
            <path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75m-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25M4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226z" />
            <path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z" />
          </svg>
          Reset
        </button>

        <button
          onClick={handleNext}
          className={`text-[10px] uppercase tracking-[0.12em] rounded-2px px-10 py-3
            ${
              prop.count >= 2
                ? "bg-[#2d2926] text-white cursor-pointer"
                : "bg-[#e5ded4] text-[#b5ada3]"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
