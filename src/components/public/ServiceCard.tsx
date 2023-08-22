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
const ServiceCard = ({ service }: { service: ServiceCardProps }) => {
  const { title, description, icon, image } = service;

  return (
    <>
      <div className="group mx-auto rounded-md shadow-md p-5 w-full">
        <div className="text-5xl text-indigo-500 mb-5 w-fit">
          <div className="p-4 bg-indigo-100 rounded-full">{icon}</div>
        </div>
        <div className="text-lg font-light text-gray-900 mb-4 uppercase">
          {title}
        </div>
        <div className="text-gray-900">{description}</div>
      </div>
    </>
  );
};
export default ServiceCard;
