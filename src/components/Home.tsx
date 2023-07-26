import { BsGithub } from "react-icons/bs";

function Home() {
  return (
    <div className="bg-[url('/public/bg.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-row pl-20 items-center">
        <div>
          <h1 className="text-white text-5xl font-bold">
            I'm Narzullayev <span className="text-slate-500">Javohir</span>
          </h1>
          <h3 className="text-2xl text-slate-500 font-semibold my-3">
            Frontend Developer
          </h3>
          <p className="max-w-2xl text-left text-xl font-semibold text-white">
            I have been working in the field of Frontend for 2 years. I use
            React framework. My results are much better now!
          </p>
          <div className="flex flex-row gap-5 mt-8">
            <button className="px-8 py-3 rounded-full bg-slate-700 text-white hover:bg-transparent border-2 border-slate-700 transition-colors">
              Download CV
            </button>
            <a href="https://github.com/narzullayevdeveloper">
              <button className="px-8 py-3 rounded-full bg-slate-200 text-slate-700 flex flex-row items-center gap-5 hover:bg-white transition-colors">
                <BsGithub size={20} />
                View Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
