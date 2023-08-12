import Image from "next/image";
import Link from "next/link";

/**
 * @description Brand Component, logo and name
 * @version 1.0.0
 */
const Brand = () => {
  return (
    <Link href="/" className="">
      <div className="flex justify-center items-center gap-1">
        <div className="relative w-7 h-7">
          <Image src="/logo-esdev-000-transp-1.png" alt="Eri Schön" fill />
        </div>

        <h1 className="font-bold">Eri Schön</h1>
      </div>
    </Link>
  );
};

export default Brand;
