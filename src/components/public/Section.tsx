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
      className={`px-[3%] py-[10%] lg:px-[6%] lg:py[15%] mx-auto ${style} flex flex-col md:justify-center`}
      id={id}
    >
      {children}
    </section>
  );
}
