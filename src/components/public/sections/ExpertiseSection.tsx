import Section from "@/components/public/Section";

export default function ExpertiseSection() {
  return (
    <>
      <Section id="expertise" background="bg-indigo-50">
        <div className="flex flex-col md:items-start mb-10 max-w-3xl text-center md:text-left">
          <p className="text-md text-gray-500 mb-5">Notre expertise</p>

          <h2 className="text-4xl text-gray-800 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </Section>
    </>
  );
}
