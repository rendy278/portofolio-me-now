import { Typewriter } from "react-simple-typewriter";
import { MdDownload } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { MdVisibility } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import CV from "../assets/CV-RESUME-RENDY.pdf";
import Tzuyu from "../images/tzuyu.jpeg";
import Halo from "../images/wave.gif";

const Header = () => {
  const handleDownloadCV = () => {
    toast.success("CV Berhasil Di Download", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <div className="main__header h-full justify-center mx-auto" id="home">
      <div className="container grid md:grid-cols-2 grid-cols-1 py-20 place-items-center mx-auto px-6">
        <div className="main__left mt-6 lg:w-full w-full md:w-[340px] text-center md:text-left">
          <div className="haloo flex mb-3 gap-2 justify-center md:justify-start">
            <h1 className="dark:text-slate-200 lg:text-4xl text-2xl font-bold mt-3">
              Hi <span className="text-blue-500">I'm </span>
            </h1>
            <img src={Halo} alt="" className="lg:w-12 lg:h-12 w-8 h-8 mt-1" />
          </div>
          <h2 className="lg:text-4xl text-2xl mb-3 font-semibold text-blue-500">
            R E N D Y
          </h2>
          <h2 className="text-3xl mb-3 md:text-2xl dark:text-slate-200">
            I'm{" "}
            <span className="lg:text-4xl text-2xl font-montserrat font-bold text-blue-500 ">
              <Typewriter
                words={["Front End", "Web Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={180}
              />
            </span>
          </h2>
          <p className="dark:text-slate-200 lg:text-xl text-lg leading-7 mb-4">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div className="socials text-4xl text-white flex gap-3 mx-auto justify-center lg:justify-start md:justify-start">
            <a
              href="https://www.instagram.com/rnd_arstls?igsh=bWZiNjNqNmhybGps"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-blue-500 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="p-1" />
            </a>
            <a
              href="https://linkedin.com/in/rendy-b232b1248"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-blue-500 rounded-lg"
            >
              <FaLinkedin className="p-1" />
            </a>
            <a
              href="https://wa.me/6283122895534"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-blue-500 rounded-lg"
            >
              <FaWhatsapp className="p-1" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081835780873&mibextid=2JQ9oc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-blue-500 rounded-lg"
            >
              <FaFacebookSquare className="p-1" />
            </a>
            <a
              href="https://github.com/rendy278"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-blue-500 rounded-lg"
            >
              <GrGithub className="p-1" />
            </a>
          </div>
          <div className="btn flex flex-col md:flex-row gap-4 mt-4 font-medium justify-center md:justify-start">
            <button className="lg:py-4 lg:px-6 py-2 px-3 relative rounded-md bg-sky-600 text-white font-bold hover:border hover:border-blue-600 hover:bg-transparent hover:text-gray-800 dark:text-slate-100">
              <a href="https://wa.me/6283122895534">Hire me</a>
            </button>
            <button className="lg:py-4 lg:px-6 py-2 px-3 relative rounded-md bg-sky-600 text-white font-bold hover:border hover:bg-transparent hover:text-gray-800 hover:border-blue-600 dark:text-slate-100">
              <a
                href={CV}
                className="flex gap-1 justify-center "
                onClick={handleDownloadCV}
                download
              >
                <MdDownload className="mt-1" /> Download CV
              </a>
              <div className="bg-blue-400 text-slate-200 rounded-full px-1 py-1 absolute -top-2 -right-2">
                <a
                  href="https://cv-resume-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVisibility />
                </a>
              </div>
            </button>
          </div>
        </div>
        <div className="main__right flex justify-center w-full lg:w-[800px]  lg:col-start-2 row-start-1 mx-auto mt-3">
          <div className="w-[250px] h-[250px] lg:w-[420px] lg:h-[430px] md:w-[280px] md:h-[280px]">
            <img
              src={Tzuyu}
              alt="sukuna"
              className="rounded-full border-solid border-4 object-cover border-blue-600 heroImg shadow-xl dark:shadow-blue-500"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
