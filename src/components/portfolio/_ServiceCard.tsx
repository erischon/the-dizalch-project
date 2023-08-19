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
      <div className="group h-60 w-60 [perspective:1000px] mx-auto">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-700">
          <div className="absolute inset-0">
            <div className="flex flex-col justify-center items-center h-full w-full">
              <div className="text-4xl text-teal-400 mb-4">{icon}</div>

              <h2 className="text-2xl text-gray-200 font-medium">{title}</h2>
            </div>
          </div>

          <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-700 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
