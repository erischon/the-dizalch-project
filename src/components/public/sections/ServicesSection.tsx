"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

import { services } from "@/data/infos";

import ServiceCard from "@/components/public//ServiceCard";
import Section from "@/components/public/Section";
import Slideshow from "@/components/public/Slideshow";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
export default function ServicesSection() {
  const media = useMediaQuery("(max-width: 768px)");

  return (
    <Section id="services">
      <div className="flex flex-col md:items-center mb-10 text-center md:text-left w-full">
        <p className="text-md text-gray-300 mb-5">
          Ce que nous faisons pour vous
        </p>

        <h2 className="text-4xl text-gray-00 font-semibold max-w-3xl text-center leading-snug">
          Augmenter la Qualité et optimiser le process de développement
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 grow">
        <div className="relative w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] mx-auto lg:col-span-5 my-10 md:my-0">
          <Image src="/images/services.png" alt="" fill className="" />
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-3 lg:grid-cols-3 md:gap-5">
          {!media ? (
            <>
              {services.map((service) => (
                <ServiceCard service={service} key={service.title} />
              ))}
            </>
          ) : (
            <Slideshow
              content={services.map((service) => (
                <ServiceCard service={service} key={service.title} />
              ))}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
