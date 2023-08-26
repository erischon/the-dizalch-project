import React from "react";
import Image from "next/image";

import { ImQuotesRight } from "react-icons/im";

type TestimonialCardProps = {
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
};

/**
 * @description Testimonial Card component
 * @version 1.0.0
 */
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) {
  const { name, title, company, image, quote } = testimonial;

  return (
    <div
      key={title}
      className="flex flex-col justify-between md:col-span-4 rounded-lg bg-gray-50 p-6 shadow-md shadow-black/90"
    >
      <p className="mb-4 flex-grow text-gray-800">{quote}</p>

      <div className="grid md:grid-cols-12 md:justify-between">
        <div className="col-span-8 flex ">
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div>
            <p className="text-indigo-600 font-semibold">{name}</p>

            <p className="text-sm font-light text-gray-800">
              {title} / {company}
            </p>
          </div>
        </div>

        <div className="md:flex md:justify-center md:items-center md:col-span-4 hidden">
          <ImQuotesRight className="text-indigo-400 text-6xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
