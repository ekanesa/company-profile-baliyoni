import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? "left-0" : "left-full";

  return (
    <div className="navbar fixed w-full transition-all py-6">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo w-50">
            <img src="public/img/BYS_LOGO.png" />
          </div>
          <ul
            className={`flex md:gap-12 gap-8 sm:static sm:flex-row sm:text-black sm:shadow-none sm:bg-transparent sm:h-auto sm:translate-y-0 sm:w-auto sm:p-0 sm:m-0 sm:transition-none no-underline fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 rounded-lg shadow-slate-300 bg-red-500 text-white font-semibold transition-all`}
          >
            <li>
              <a className="hover:text-red-600" href="">
                Homepage
              </a>
            </li>
            <li>
              <a className="hover:text-red-600" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-red-600" href="">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-red-600" href="">
                Partnership
              </a>
            </li>
            <li>
              <div className="contact-us bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all">
                <a href="">Contact Us</a>
              </div>
            </li>
          </ul>

          <div className="translate items-center ">
            <Icon icon="mdi:g-translate" width="40" height="40"></Icon>
          </div>
          <Icon
            className="sm:hidden block"
            icon="mdi:menu"
            width="40"
            height="40"
            onClick={handleClick}
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
