import Image from "next/image";

import { FaHammer } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";

import { TAGLINE } from "@/lib/constants";

export default function PortfolioPage() {
  return (
    <main className="h-full flex justify-center items-center">
      <section className="sm:grid sm:grid-cols-12 px-4 mx-auto my-4">
        <div className="flex flex-col sm:col-span-4 items-start justify-between h-full my-2">
          <p>Bonjour, je suis</p>

          <h2 className="text-3xl font-bold my-2 text-teal-400 lea">
            Eri Schön
          </h2>

          <h1 className="text-5xl font-bold mb-4">{TAGLINE}</h1>

          <h2 className="flex-grow">
            Je suis votre solution pour la fabrication d'application Web sur
            mesure{" "}
            <span className="bg-teal-300 font-semibold text-lg">fluide</span>,{" "}
            <span className="bg-teal-300 font-semibold text-lg">rapide</span>,
            et <span className="bg-teal-300 font-semibold text-lg">fiable</span>
          </h2>

          <a href="mailto:erischondev@gmail.com" className="my-8">
            <button className="bg-teal-600 rounded-md text-white px-6 py-2">
              Contactez-moi
            </button>
          </a>
        </div>

        <div className=" lg:flex lg:justify-center lg:items-center sm:col-span-5">
          <div className="lg:w-full lg:h-full relative w-[389px] h-[253px]">
            <Image src="/home-code.png" alt="" fill />
          </div>
        </div>

        <div className="flex flex-col justify-around sm:col-span-3 px-6 gap-2">
          <div className="flex justify-between items-center shadow-md rounded-sm p-4">
            <div className="w-4/5">
              <h3 className="font-semibold mb-1">Confection d'App Web</h3>
              <p className="text-sm text-black/60">
                Elaboration et fabrication d'application Web.
              </p>
            </div>

            <FaHammer className="text-4xl text-teal-500" />
          </div>

          <div className="flex justify-between items-center shadow-md rounded-sm p-4">
            <div className="w-4/5">
              <h3 className="font-semibold mb-1">Refonte et Migration</h3>
              <p className="text-sm text-black/60">
                Refonte d'application Web et/ou Migration de technologie.
              </p>
            </div>

            <BsArrowsMove className="text-4xl text-teal-500" />
          </div>

          <div className="flex justify-between items-center shadow-md rounded-sm p-4">
            <div className="w-4/5">
              <h3 className="font-semibold mb-1">Entretien et Mise à jour</h3>
              <p className="text-sm text-black/60">
                Entretien, mise à jour et suivi d'une application Web.
              </p>
            </div>

            <MdHomeRepairService className="text-4xl text-teal-500" />
          </div>
        </div>
      </section>
    </main>
  );
}
