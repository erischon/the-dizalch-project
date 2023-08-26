import { testimonials } from "@/data/infos";
import Section from "@/components/public/Section";
import SectionHeader from "@/components/public/SectionHeader";

import { sections } from "@/data/infos";
import TestimonialCard from "@/components/public/TestimonialCard";
import React from "react";

/**
 * @description Testimonials Section component
 * @version 1.0.0
 */
export default function TestimonialsSection() {
  const { header, title } = sections.testimonials;

  return (
    <Section id="testimonials">
      <SectionHeader header={header} title={title} style="center" />

      <div className="grid md:grid-cols-12 w-full justify-center gap-4">
        {testimonials.map((testimonial) => (
          <React.Fragment key={testimonial.title}>
            <TestimonialCard testimonial={testimonial} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}
