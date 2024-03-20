import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Tabs from "../components/Tabs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import ProjectWeb from "../assets/ProjectWeb";
import DesainWeb from "../assets/DesainWeb";
import Artsweb from "../assets/Artsweb";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const openModal = (index, images) => {
    setCurrentImageIndex(index);
    setCurrentImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const modalContent = (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center ">
      <div className="relative mt-8">
        <button
          className="absolute top-0 right-1 bg-red-500 rounded-md p-3 text-white"
          onClick={closeModal}
        >
          <IoMdClose className="text-lg" />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-400 rounded-md p-3 left-4 text-white"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-400 rounded-md p-3 right-4 text-white"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>
        <img
          src={currentImages[currentImageIndex]}
          alt="Image"
          className="h-[550px] lg:h-[450px] w-[600px] object-contain"
        />
      </div>
    </div>
  );

  const onTabItemClick = (index, images, tabName) => {
    setCurrentImageIndex(index);
    setCurrentImages(images);
    setCurrentTab(tabName);
    setModalOpen(true);
  };

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
                <div className="btn grid grid-cols-2 gap-1 text-sm place-items-center mx-auto text-white">
                  <button className="bg-blue-600 p-2 lg:rounded-full rounded-md gap-2 hover:scale-90 align-middle">
                    <a
                      href={project.link}
                      className="p-1 flex gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
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
                      REPOSITORY
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
            <div
              key={index}
              className="shadow-xl rounded-lg hover:scale-95 transition-all duration-300"
              onClick={() =>
                onTabItemClick(
                  index,
                  DesainWeb.map((desain) => desain.Image),
                  "Desain"
                )
              }
            >
              <img
                src={desain.Image}
                alt=""
                className="max-w-full rounded-lg w-full md:w-96 lg:h-80 md:h-72 h-80 object-contain cursor-pointer"
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
        <div className="flex flex-wrap w-full md:w-full lg:w-full lg:h-80 md:grid-cols-2 gap-3 mx-auto justify-around">
          {Artsweb.map((gambar, index) => (
            <div
              key={index}
              className="shadow-xl rounded-lg hover:scale-95 transition-all duration-300"
              onClick={() =>
                onTabItemClick(
                  index,
                  Artsweb.map((gambar) => gambar.image),
                  "Arts"
                )
              }
            >
              <img
                src={gambar.image}
                alt=""
                className="max-w-full rounded-xl w-full lg:h-80 h-80 md:h-80 object-contain cursor-pointer"
              />
            </div>
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
        {modalOpen && modalContent}
      </div>
    </motion.section>
  );
};

export default Portfolio;
