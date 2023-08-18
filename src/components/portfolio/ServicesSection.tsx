import { services } from "@/data/infos";

import ServiceCard from "@/components/portfolio//ServiceCard";
import SectionTitle from "./SectionTitle";

const ServicesSection = () => {
  return (
    <section className="my-8 mx-auto text-center">
      <SectionTitle title="Services" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center mt-8 gap-4">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
