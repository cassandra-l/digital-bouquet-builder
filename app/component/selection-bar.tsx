interface Props {
  count: number;
  onReset: () => void;
}

export function SelectionBar(prop: Props) {
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
      <div className="flex justify-end pr-4">
        {prop.count > 0 && (
          <button
            onClick={prop.onReset}
            className="text-[#b5ada3] hover:border hover:border-[#e5ded4] hover:text-[#2d2926] uppercase tracking-[0.3em] text-[10px] px-10 py-3 cursor-pointer"
          >
            Reset
          </button>
        )}
        <button className="bg-[#e5ded4] text-[#b5ada3] text-[10px] uppercase tracking-[0.12em] rounded-2px px-10 py-3 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
