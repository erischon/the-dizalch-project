import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  isActive: boolean;
};

/**
 * @description
 * @version 1.0
 */
export default function ServiceCard({
  service,
}: {
  service: ServiceCardProps;
}) {
  const { title, description, icon, isActive } = service;

  return (
    <>
      <div
        className={`group mx-auto rounded-xl shadow-md shadow-black/20 p-5 w-52 md:w-full bg-indigo-900 flex flex-col items-center`}
      >
        <div className="text-4xl text-indigo-500 mb-2 w-fit">
          <div className="p-4 bg-indigo-100 rounded-full">{icon}</div>
        </div>

        <div className="text-lg font-semibold text-gray-100 uppercase">
          {title}
        </div>

        {/* <div className="text-gray-900 text-center">{description}</div> */}
      </div>
    </>
  );
}
