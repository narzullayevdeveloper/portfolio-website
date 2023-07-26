function Image({ img }: { img: string }) {
  return (
    <img
      src={`/${img}.png`}
      alt="technology"
      className="w-20 h-20 object-contain"
    />
  );
}

export default Image;
