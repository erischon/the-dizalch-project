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
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt={title}
              src={image}
              fill
            />
          </div>

          <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-700 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-4">{title}</h2>
              <p className="">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
