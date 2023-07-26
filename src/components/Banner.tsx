import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { SiNotion } from "react-icons/si";

function Banner() {
  return (
    <div className="w-full h-64 flex justify-center items-center bg-black border-b border-slate-500">
      <div className="w-full max-w-7xl flex items-center justify-around text-white">
        <div className="flex flex-col items-center gap-y-5 cursor-pointer">
          <FaReact size={72} />
          <h2 className="text-xl font-semibold text-slate-300">
            Web Developer
          </h2>
        </div>
        <div className="flex flex-col items-center gap-y-5 cursor-pointer">
          <BiLogoFlutter size={72} />
          <h2 className="text-xl font-semibold text-slate-300">
            Android Developer
          </h2>
        </div>
        <div className="flex flex-col items-center gap-y-5 cursor-pointer">
          <SiNotion size={72} />
          <h2 className="text-xl font-semibold text-slate-300">
            Content Creator
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
