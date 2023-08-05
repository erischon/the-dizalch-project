import Link from "next/link";

import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

/**
 * @description Footer component
 * @version 1.0.0
 */
const Footer = () => {
  return (
    <div className="flex flex-col-reverse gap-4 py-8 items-end sm:flex-row sm:justify-between sm:items-center">
      <div className="text-gray-300 text-xs">
        © 2020-2023 Eri Schön All rights reserved
      </div>

      <div className="flex gap-2">
        <Link href="https://www.linkedin.com/in/ericschonhofen/">
          <BsLinkedin className="text-3xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </Link>

        <Link href="https://github.com/erischon">
          <BsGithub className="text-3xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </Link>

        <Link href="https://twitter.com/erischon">
          <BsTwitter className="text-3xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
