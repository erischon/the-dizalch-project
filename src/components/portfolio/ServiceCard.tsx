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
      <div className="group mx-auto rounded-md shadow-md dark:shadow-black/60 p-5">
        <div className="text-5xl text-indigo-500 mb-4">{icon}</div>
        <div className="text-lg font-semibold mb-4">{title}</div>
        <div className="">{description}</div>
      </div>
    </>
  );
};
export default ServiceCard;
