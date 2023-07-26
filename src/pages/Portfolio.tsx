import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-7xl grid grid-cols-3">
        <PortfolioCard />
      </div>
    </div>
  );
}

export default Portfolio;
