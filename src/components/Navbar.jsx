import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { PiCirclesThreePlusBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";
import NightMode from "./NightMode";
const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portofolio", link: "/portofolio" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <nav>
      <div
        className={`shadow-md w-full fixed z-10 transition-all duration-500 ${
          scroll ? " shadow-xl shadow-blue-500  backdrop-blur-md  " : ""
        }`}
      >
        <div className=" md:flex items-center justify-between py-4 md:px-20 px-7 ">
          <div className=" font-bold text-2xl cursor-pointer flex items-center text-sky-400 gap-2 ">
            <img src={Logo} alt="logo" className="w-6 h-6 font-p dark:" />
            <h4 className="font-sans">RenDev</h4>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:invisible mb-2 flex gap-3"
          >
            {open ? (
              <IoMdClose className="dark:text-slate-200 text-gray-800 hover:text-blue-700 duration-500" />
            ) : (
              <PiCirclesThreePlusBold className="dark:text-slate-200 text-gray-800 hover:text-blue-700 duration-500" />
            )}
          </div>

          <ul
            className={`md:flex  md:items-center md:pb-1 pb-2 absolute md:static bg-slate-50  opacity-95 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in ${
              open ? "top-14 " : "top-[-420px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  to={link.link}
                  className=" font-semibold   text-blue-500 dark:text-sky-400 hover:underline duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <NightMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
