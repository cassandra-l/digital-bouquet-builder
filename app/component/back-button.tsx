import { Link } from "react-router";

interface Props {
  to: string;
}

export function BackButton(props: Props) {
  return (
    <button className="group flex items-center gap-2 pt-10 pl-8">
      <div className="w-6 h-px bg-[#d1d1d1] group-hover:bg-[#2c2c2c] group-hover:w-10 transition-all duration-700 cursor-pointer"></div>
      <Link
        to={props.to}
        className="font-serif text-[#d1d1d1] group-hover:text-[#2c2c2c] transition-colors duration-700 text-[10px] tracking-[0.6em] uppercase cursor-pointer"
      >
        Previous Page
      </Link>
    </button>
  );
}
