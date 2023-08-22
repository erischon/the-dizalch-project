import Image from "next/image";

import { ImQuotesRight } from "react-icons/im";

import { testimonials } from "@/data/infos";

/**
 * @description Testimonials Section component
 * @version 1.0.0
 */
export default function TestimonialsSection() {
  return (
    <section className="min-h-screen py-[4rem] lg:py-[6rem] px-[6%]" id="about">
      <div className="flex flex-col items-center mb-8">
        <p className="mb-2 text-indigo-500 dark:text-indigo-300 relative before:inline-block before:w-20 before:h-[0.1rem] before:bg-indigo-300 before:bottom-[50%] before:left-[-6rem] before:absolute after:inline-block after:w-20 after:h-[0.1rem] after:bg-indigo-300 after:bottom-[50%] after:right-[-6rem] after:absolute">
          Testimonials
        </p>

        <h2 className="text-3xl font-semibold">
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
    </section>
  );
}
