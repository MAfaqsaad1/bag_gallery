import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="px-3 py-8 bg-[#383838]">
      <div className="flex flex-col  justify-around items-center">
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row lg:space-x-10 mx-auto">
          <nav className=" flex flex-col items-center justify-center md:pr-5 text-center">
            <div className="hover:text-gray-700 dark:hover:text-white text-gray-400">
              <span className="text-white"> e-mail: </span> abc@xyz.com
            </div>
            <div className="hover:text-gray-700 dark:hover:text-white  text-gray-400">
              <span className="text-white"> address: </span> New York, Saint
              Nicholas Avenue 13/1
            </div>
            <div className="hover:text-gray-700 dark:hover:text-white  text-gray-400">
              <span className="text-white">fax:</span> +92 308 488 6911
            </div>
          </nav>

          <div className="mt-4 md:mt-0  flex items-center justify-center ">
            <h2
              className="text-2xl text-white
            "
            >
              <Link to="/">Logo</Link>
            </h2>
          </div>

          <div className="mt-7 md:mt-0 flex flex-col items-center justify-center md:items-start md:pl-5">
            <span className="text-white">
              © Design by M.Afaq All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
