import { services } from "@/data/infos";

import ServiceCard from "@/components/public//ServiceCard";

/**
 * @description Services Section component,
 * @version 1.0.0
 */
const ServicesSection = () => {
  return (
    <section
      className="min-h-screen py-[4rem] lg:py-[6rem] px-[6%] max-w-screen-xl mx-auto"
      id="services"
    >
      <div className="flex flex-col items-center mb-8">
        <p className="mb-2 text-indigo-500 dark:text-indigo-300 relative before:inline-block before:w-20 before:h-[0.1rem] before:bg-indigo-300 before:bottom-[50%] before:left-[-6rem] before:absolute after:inline-block after:w-20 after:h-[0.1rem] after:bg-indigo-300 after:bottom-[50%] after:right-[-6rem] after:absolute">
          Nos services
        </p>

        <h2 className="text-3xl font-semibold">
          Ce que nous faisons pour vous
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-4">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
