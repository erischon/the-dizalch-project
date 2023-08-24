import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

/**
 * @description
 * @version 1.0
 */
export default function ServiceCard({
  service,
}: {
  service: ServiceCardProps;
}) {
  const { title, description, icon, image } = service;

  return (
    <>
      <div className="group mx-auto rounded-md shadow-xl shadow-black/20 p-5 md:w-full bg-indigo-50 flex flex-col items-center w-52">
        <div className="text-5xl text-indigo-500 mb-5 w-fit">
          <div className="p-4 bg-indigo-100 rounded-full">{icon}</div>
        </div>

        <div className="text-lg font-light text-gray-900 mb-4 uppercase">
          {title}
        </div>

        {/* <div className="text-gray-900 text-center">{description}</div> */}
      </div>
    </>
  );
}
