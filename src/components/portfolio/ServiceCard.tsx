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
      <div className="group mx-auto rounded-md shadow-md dark:shadow-black/60 p-5 w-full">
        <div className="text-5xl text-indigo-500 mb-5 w-fit">
          <div className="p-4 bg-indigo-50 rounded-full">{icon}</div>
        </div>
        <div className="text-lg font-light mb-4 uppercase">{title}</div>
        <div className="">{description}</div>
      </div>
    </>
  );
};
export default ServiceCard;
