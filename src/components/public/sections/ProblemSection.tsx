import Image from "next/image";

import Section from "@/components/public/Section";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
export default function ProblemSection() {
  return (
    <Section id="problem">
      <div className="bg-gray-800 rounded-3xl p-10 lg:p-20 shadow-lg shadow-black/20">
        <div className="flex flex-col md:items-start mb-10 max-w-3xl text-center md:text-left">
          <p className="text-md text-gray-300 mb-5">Le soucis</p>

          <h2 className="text-4xl font-semibold">
            Une dette technique bloquante et pas assez de ressources pour la
            gérer
          </h2>
        </div>

        <div className="grid md:grid-cols-12 mb-10">
          <div className="md:col-span-7 order-1 md:order-2 md:pl-14 text-lg lg:text-xl flex flex-col gap-5">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
              consequuntur cum harum. Debitis veritatis quaerat dolor ratione
              voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Porro dolor ullam laborum doloribus maxime!
              Deleniti nesciunt nostrum corporis accusamus iure?
            </p>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
              consequuntur cum harum. Debitis veritatis quaerat dolor ratione
              voluptatibus repellat! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Porro dolor ullam laborum doloribus maxime!
              Deleniti nesciunt nostrum corporis accusamus iure?
            </p>
          </div>

          <div className="relative w-[20rem] lg:w-[25rem] h-[20rem] lg:h-[25rem] mx-auto mt-4 md:my-auto md:col-span-5 order-2 md:order-1">
            <Image src="/images/stress.png" alt="" fill className="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
