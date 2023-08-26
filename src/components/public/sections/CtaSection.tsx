import Section from "@/components/public/Section";
import Container from "../Container";

/**
 * @description CTA Section component
 * @version 1.0.0
 */
export default function CtaSection() {
  return (
    <Section id="cta" background="bg-indigo-900">
      <Container otherClass="shadow-none md:flex md:justify-between text-center md:text-left">
        <div className="flex flex-col gap-5 md:w-2/3 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            delectus.
          </h2>

          <h3 className="text-xl font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            expedita eveniet veniam tenetur molestias? Veniam placeat ex dolores
            cumque reiciendis.
          </h3>
        </div>

        <div className="flex justify-center items-center md:w-1/3">
          <button className="text-2xl font-semibold py-3 px-9 rounded-xl shadow-lg shadow-black/20 bg-amber-500 text-gray-900 uppercase">
            Réserver
          </button>
        </div>
      </Container>
    </Section>
  );
}
