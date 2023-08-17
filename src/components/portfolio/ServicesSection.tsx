import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="max-w-2xl mx-auto p-8 ">
      <div className="flex flex-col sm:flex-row gap-6 my-8 p-10 bg-gray-100">
        <div className="basis-full sm:w-[170px] sm:max-w-[170px] h-[170px] max-h-[170px] min-h-[100px] relative">
          <Image
            src="/images/testing.jpg"
            alt="testing"
            fill
            className="object-cover object-center sm:rounded-tl-[45%] shadow-md"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-light uppercase text-gray-800">
            Testing
          </h3>
          <p className="text-gray-600 text-sm flex-grow font-light">
            Eri's attention to detail and ability to identify issues quickly
            took our React application to new heights. She's truly a wizard!
          </p>
          <Link href="/" className="text-teal-500">
            En savoir plus
          </Link>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-6">
        <div className="basis-full w-[170px] max-w-[170px] h-[170px] max-h-[170px] relative ">
          <Image
            src="/images/performance.jpg"
            alt="testing"
            fill
            className="object-cover object-center rounded-br-[45%] rounded-tr-[45%] "
          />
        </div>

        <div className="flex flex-col items-end">
          <h3 className="text-xl font-light mb-4 uppercase">Performance</h3>
          <p className="text-right">
            Eri's attention to detail and ability to identify issues quickly
            took our React application to new heights. She's truly a wizard!
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="basis-full w-[170px] max-w-[170px] h-[170px] max-h-[170px] relative ">
          <Image
            src="/images/security.jpg"
            alt="testing"
            fill
            className="object-cover object-center rounded-bl-[45%] border-b-4 "
          />
        </div>

        <div className="flex-shrink">
          <h3 className="text-xl font-light mb-4 uppercase">Security</h3>
          <p>
            Eri's attention to detail and ability to identify issues quickly
            took our React application to new heights. She's truly a wizard!
          </p>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
