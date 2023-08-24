export default function Section({
  children,
  background,
  id,
}: {
  children: React.ReactNode;
  background?: string;
  id?: string;
}) {
  const style = background ? background : "bg-gray-800";

  return (
    <section
      className={`min-h-screen py-[4rem] lg:py-[6rem] px-[3%] lg:px-[6%] mx-auto ${style} flex flex-col md:justify-center`}
      id={id}
    >
      {children}
    </section>
  );
}
