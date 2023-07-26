import { navbarItems } from "../util";

function Navbar() {
  return (
    <div className="w-full h-20 bg-transparent flex justify-center items-center fixed top-0">
      <nav className="w-full max-w-7xl h-full flex justify-between items-center px-20">
        <h3 className="text-white text-2xl font-bold tracking-wider cursor-pointer uppercase">
          Portfolio
        </h3>
        <ul className="flex flex-row items-center gap-8">
          {navbarItems.map((item, i) => (
            <li
              key={i}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
