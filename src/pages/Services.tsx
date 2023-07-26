import Image from "../components/Image";
import { imgItems } from "../util";

function Services() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-zinc-950 p-32">
      <div className="w-full h-full max-w-7xl flex justify-between items-center gap-20">
        <div className="w-1/2">
          <h2 className="text-slate-300 text-4xl font-bold mb-5">
            Work Experience
          </h2>
          <p className="text-slate-300 text-lg max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat et
            vero, quam accusamus unde qui impedit dolore a expedita deleniti
            aliquam ad iste repellat ullam aspernatur in debitis distinctio
            eius.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            excepturi commodi dolorem modi quas, earum est harum debitis vel
            sunt temporibus sint minus sed, ad quis vero rerum molestiae ab.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 w-1/2">
          {imgItems.map((img, i) => (
            <Image key={i} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
