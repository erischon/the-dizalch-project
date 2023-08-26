"use client";

import { useMediaQuery } from "usehooks-ts";

import { services, sections } from "@/data/infos";

import ServiceCard from "@/components/public//ServiceCard";
import Section from "@/components/public/Section";
import Slideshow from "@/components/public/Slideshow";
import Container from "@/components/public/Container";
import SectionHeader from "@/components/public/SectionHeader";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
export default function ServicesSection() {
  const media = useMediaQuery("(max-width: 768px)");
  const { header, title } = sections.services;

  return (
    <Section id="services" background="bg-gray-900">
      <Container background="bg-gray-800">
        <SectionHeader header={header} title={title} style="center" />

        <div className="lg:col-span-7 grid md:grid-cols-3 lg:grid-cols-3 md:gap-1 md:h-fit lg:gap-5">
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
      </Container>
    </Section>
  );
}
