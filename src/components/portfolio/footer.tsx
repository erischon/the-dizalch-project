import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

/**
 * @description Footer component
 * @version 1.0.0
 */
const Footer = () => {
  return (
    <div className="flex flex-col-reverse gap-4 py-8 items-center sm:flex-row sm:justify-between sm:items-center">
      <div className="text-gray-300 text-xs">
        © 2020-2023 Eri Schön All rights reserved
      </div>

      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ericschonhofen/"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-2xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </a>

        <a
          target="_blank"
          href="https://github.com/erischon"
          rel="noopener noreferrer"
        >
          <BsGithub className="text-2xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/erischon"
          rel="noopener noreferrer"
        >
          <BsTwitter className="text-2xl inline-block mr-2 text-teal-300 hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
