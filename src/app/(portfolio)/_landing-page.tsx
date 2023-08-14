import Image from "next/image";

import { tagLine } from "@/data/infos";

export default function PortfolioPage() {
  return (
    <main className="h-full flex justify-center items-center">
      <section className="grid grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col col-span-4 items-start justify-between">
          <h1 className="text-5xl font-bold mb-4">{tagLine}</h1>

          <h2 className="flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet hendrerit nulla, at tempus ante. Aliquam at erat porttitor,
            lacinia ex nec, vulputate nunc.{" "}
          </h2>

          <button className="bg-teal-600 rounded-md text-white px-6 py-2">
            Contactez-moi
          </button>
        </div>

        <div className="flex justify-center items-center col-span-5">
          <div className="w-[350px] h-[285px] relative">
            <Image src="/home-2.png" alt="" fill />
          </div>
        </div>

        <div className="flex flex-col justify-around col-span-3 px-6 gap-2">
          <div className=" shadow-md rounded-sm p-4">
            <h3 className="font-semibold mb-1">Soutien</h3>
            <p className="text-sm text-black/60">
              Gardez vos ressources internes
            </p>
          </div>

          <div className=" shadow-md rounded-sm p-4">
            <h3 className="font-semibold mb-1">Soutien</h3>
            <p className="text-sm text-black/60">
              Gardez vos ressources internes
            </p>
          </div>

          <div className=" shadow-md rounded-sm p-4">
            <h3 className="font-semibold mb-1">Soutien</h3>
            <p className="text-sm text-black/60">
              Gardez vos ressources internes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
