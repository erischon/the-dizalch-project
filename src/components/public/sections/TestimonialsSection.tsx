import Image from "next/image";

import { ImQuotesRight } from "react-icons/im";

import { testimonials } from "@/data/infos";
import Section from "@/components/public/Section";

/**
 * @description Testimonials Section component
 * @version 1.0.0
 */
export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="flex flex-col items-center mb-10">
        <p className="text-md text-gray-300 mb-5">Testimmonials</p>

        <h2 className="text-4xl text-gray-100 font-semibold">
          Ce que nos clients disent de nous
        </h2>
      </div>

      <div className="grid md:grid-cols-12 w-full h-full justify-center gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.title}
            className="flex flex-col justify-between md:col-span-4 rounded-lg bg-gray-50 p-6 shadow-md shadow-black/90"
          >
            <p className="mb-4 flex-grow text-gray-800">{testimonial.quote}</p>

            <div className="grid grid-cols-12 justify-between">
              <div className="col-span-8 flex ">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <div>
                  <p className="text-lg text-indigo-600 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-light text-gray-800">
                    {testimonial.title} / {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center col-span-4">
                <ImQuotesRight className=" text-indigo-400  text-6xl mx-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
