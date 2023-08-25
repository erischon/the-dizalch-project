export default function Section({
  children,
  background,
  id,
}: {
  children: React.ReactNode;
  background?: string;
  id?: string;
}) {
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
