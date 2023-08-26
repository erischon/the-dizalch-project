"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";

import { gains } from "@/data/infos";
import GainCard from "@/components/public/GainCard";
import Slideshow from "@/components/public/Slideshow";
import Section from "@/components/public/Section";
import SectionHeader from "@/components/public/SectionHeader";
import Container from "../Container";

import { sections } from "@/data/infos";

/**
 * @descriptionSolution Section
 * @version 1.0.0
 */
export default function SolutionSection() {
  const media = useMediaQuery("(max-width: 768px)");
  const { header, title } = sections.solution;

  return (
    <Section id="solution" background="bg-gray-800">
      <Container background="bg-gray-900">
        <SectionHeader header={header} title={title} />

        <div className="grid lg:grid-cols-12 grow md:mb-10">
          <div className="lg:col-span-7 lg:pr-14 max-w-3xl flex flex-col">
            <div className="flex flex-col gap-5 md:text-lg lg:text-xl mb-5">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
                dolorem, adipisci neque perferendis.
              </p>

              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                praesentium! Quo voluptates tenetur fugit deserunt reprehenderit
                dolorem, adipisci neque perferendis.
              </p>
            </div>
          </div>

          <div className="relative w-[14rem] h-[14rem] lg:w-[22rem] lg:h-[22rem] mx-auto lg:col-span-5 hidden md:block">
            <Image src="/images/solution.png" alt="" fill className="" />
          </div>
        </div>

        <div className="grid md:grid-cols-12 sm:justify-center gap-4 grow items-center">
          {!media ? (
            <>
              {gains.map((gain, index) => (
                <div className="lg:col-span-4" key={index}>
                  <GainCard gain={gain} />
                </div>
              ))}
            </>
          ) : (
            <Slideshow
              content={gains.map((gain) => (
                <GainCard gain={gain} key={gain.title} />
              ))}
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
