import Image from "next/image";

import { FaHammer } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";

import { tagLine, revalidateTime } from "@/data/infos";

export const revalidate = revalidateTime.projects;

export default function PortfolioPage() {
  return (
    <div className="h-full flex justify-center items-center">
      <section className="flex justify-start flex-wrap px-4 mx-auto mb-16 lg:mt-6">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] mb-8 w-full md:max-w-2xl md:mx-auto">
          <div>
            <div className="mb-4 flex flex-col items-center gap-1 ">
              <div className="text-xs text-gray-500 md:text-sm dark:text-gray-100">
                Bonjour, je suis
              </div>

              <h2 className="text-2xl font-bold text-teal-400 md:text-4xl">
                Eri Schön
              </h2>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center sm:mb-10 sm:text-5xl md:text-6xl">
              {tagLine}
            </h1>
          </div>

          <h3 className="mb-8 md:text-lg sm:mb-10 text-center">
            Je suis votre solution pour la fabrication d'application Web{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              fluide
            </span>
            ,{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              rapide
            </span>
            , et{" "}
            <span className="bg-teal-300 font-semibold dark:text-gray-700">
              fiable
            </span>
          </h3>

          <a href="mailto:erischondev@gmail.com" className="my-8">
            <button className="bg-teal-500 text-white font-semibold px-6 py-2 hover:opacity-60 hover:text-black text-lg md:text-2xl">
              Parlons-en !
            </button>
          </a>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 shadow-md p-16 mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Tout pour la fabrication et l'entretien de votre application web
          </h2>

          <div className="flex flex-col w-full sm:flex-row gap-8">
            <div className="flex justify-between items-center shadow-md rounded-md p-4 bg-teal-300">
              <div className="w-4/5">
                <h3 className="font-semibold mb-1 dark:text-gray-800">
                  Confection d'App Web
                </h3>
                <p className="text-sm text-black/60">
                  Elaboration et fabrication d'application Web.
                </p>
              </div>

              <FaHammer className="text-4xl text-teal-500" />
            </div>

            <div className="flex justify-between items-center shadow-md rounded-md p-4 bg-teal-300">
              <div className="w-4/5">
                <h3 className="font-semibold mb-1 dark:text-gray-800">
                  Refonte et Migration
                </h3>
                <p className="text-sm text-black/60">
                  Refonte d'application Web et/ou Migration de technologie.
                </p>
              </div>

              <BsArrowsMove className="text-4xl text-teal-500" />
            </div>

            <div className="flex justify-between items-center shadow-md rounded-md p-4 bg-teal-300">
              <div className="w-4/5">
                <h3 className="font-semibold mb-1 dark:text-gray-800">
                  Entretien et Mise à jour
                </h3>
                <p className="text-sm text-black/60">
                  Entretien, mise à jour et suivi d'une application Web.
                </p>
              </div>

              <MdHomeRepairService className="text-4xl text-teal-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
