type SectionProps = {
  children: React.ReactNode;
  background?: string;
  id?: string;
};

/**
 * @description Section component
 * @version 1.0.0
 */
export default function Section({ children, background, id }: SectionProps) {
  const style = background ? background : "bg-gray-900";

  return (
    <section
      className={`px-[3%] py-[5%] lg:px-[5%] lg:py-[10%] mx-auto ${style} flex flex-col md:justify-center`}
      id={id}
    >
      {children}
    </section>
  );
}
