import Tabs from "../components/Tabs";
import ProjectWeb from "../assets/ProjectWeb";
import DesainWeb from "../assets/DesainWeb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import Artsweb from "../assets/Artsweb";
import { motion } from "framer-motion";
const Portofolio = () => {
  const tabs = [
    {
      title: "Website",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {ProjectWeb.map((project, index) => (
            <div key={index} className="shadow-xl rounded-lg dark:bg-slate-300">
              <img
                src={project.image}
                alt=""
                className="h-52 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h1 className="font-bold text-blue-600 text-lg">
                  {project.title}
                </h1>
                <h3 className="text-xl font-semibold mb-2 text-headingcolor">
                  {project.name}
                </h3>
                <p className="text-base mb-4">{project.build}</p>
                <div className="btn grid grid-cols-2  gap-1 text-sm place-items-center mx-auto text-white">
                  <button className="bg-blue-600 p-2 lg:rounded-full rounded-md gap-2 hover:scale-90 align-middle">
                    <a
                      href={project.link}
                      className="p-1 flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO{" "}
                      <MdOutlineRemoveRedEye className="mt-0.5 lg:mt-1" />
                    </a>
                  </button>
                  <button className="bg-blue-600 p-2 lg:rounded-full rounded-md gap-2 hover:scale-90">
                    <a
                      href={project.repository}
                      className="p-1 flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      REPOSITORY{" "}
                      <RiGitRepositoryLine className="mt-0.5 lg:mt-1" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    {
      title: "Desain",
      content: (
        <div className="grid lg:grid-cols-3 grid-cols-1 w-72 md:w-full lg:w-full md:grid-cols-2 gap-6 mx-auto justify-center place-items-center">
          {DesainWeb.map((desain, index) => (
            <div key={index} className="shadow-xl rounded-lg">
              <img
                src={desain.Image}
                alt=""
                className="max-w-full rounded-lg w-full md:w-96 lg:h-80 md:h-72 h-80 object-contain"
              />
              <div className="px-2 py-2 ">
                <h1 className="font-bold  text-lg">{desain.build}</h1>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Arts",
      content: (
        <div className="grid lg:grid-cols-3 grid-cols-1 w-full md:w-full lg:w-full lg:h-80  md:grid-cols-2 gap-3 mx-auto justify-center place-items-center">
          {Artsweb.map((gambar, index) => (
            <img
              key={index}
              src={gambar.image}
              alt=""
              className="max-w-full rounded-xl w-full lg:h-80 h-80 md:h-80 object-contain"
            />
          ))}
        </div>
      ),
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="h-full mx-auto flex justify-center"
    >
      <div className="container py-20 px-6 ">
        <header className="mx-auto justify-center text-center py-5">
          <h1 className="dark:text-slate-200 text-center lg:text-4xl md:text-3xl text-2xl text-gray-600 font-bold ">
            My{" "}
            <span className="dark:text-slate-200 skl" data-text="Projects">
              Projects
            </span>
          </h1>
        </header>
        <Tabs tabs={tabs} />
      </div>
    </motion.section>
  );
};

export default Portofolio;
