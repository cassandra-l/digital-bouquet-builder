interface Props {
  name: string;
  image: string;
}

export function FlowerCard(prop: Props) {
  return (
    <div className="flex flex-col w-full h-30 items-center justify-center">
      <img
        src={prop.image}
        className="max-h-full w-auto object-contain cursor-pointer"
      />
      <p className="text-[#b5ada3] text-sm tracking-[0.4em] font-[Tenor_Sans] uppercase pt-2">
        {prop.name}
      </p>
    </div>
  );
}
