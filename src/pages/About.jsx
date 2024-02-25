import Rendy from "../images/rendy.png";
import { GoMortarBoard } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Education from "../components/Education";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="w-full h-full mx-auto justify-center place-content-center"
    >
      <div className="container py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center px-4 md:px-2 mx-auto lg:px-8 gap-6 lg:gap-2 overflow-hidden">
        <div className="about-left mx-auto md:w-80 lg:w-[600px] w-full ">
          <div className="w-80 lg:ml-8 mx-auto">
            <h1 className="dark:text-slate-100 bg-blue-400 p-1 text-center text-3xl rounded-xl mb-2 text-white font-bold font-sans">
              Profile
            </h1>
            <div className="profile dark:bg-slate-200 px-6 py-6 rounded-md shadow-xl dark:shadow-blue-500">
              <img
                src={Rendy}
                alt="rendy"
                className="w-72 h-72 object-cover border-2 border-blue-400 rounded-xl bg-gradient-to-r from-slate-200 via-sky-200 to-blue-300"
              />
              <div className="dark:text-slate-100 biodata mt-4 text-sm font-semibold bg-blue-400 text-white rounded-xl">
                <div className="container mx-auto py-4 px-4">
                  <h1>Name : Rendy</h1>
                  <h1>Age : 20 Years Old</h1>
                  <h1>Gender : Male</h1>
                  <h1>Address : Jakarta Barat</h1>
                  <h1>Nasionality : Indonesia</h1>
                  <div className="link-student flex gap-2 py-1">
                    <h2>Active Student in :</h2>
                    <a
                      href="https://www.bsi.ac.id/ubsi/kampus-cengkareng.ajax"
                      className="text-gray-700 flex gap-2 hover:text-blue-700"
                    >
                      UBSI <GoMortarBoard className="mt-1" />{" "}
                      <BsBoxArrowUpRight className="mt-[2px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right mx-auto">
          <h1 className="dark:text-slate-100 bg-blue-400 py-1 lg:w-60 w-full text-3xl font-bold rounded-xl mb-2 text-white px-4 text-center font-sans">
            About Me
          </h1>
          <div className="dark:text-slate-100 container px-6 py-6 lg:text-lg text-md leading-4 mt-4 font-semibold bg-blue-400 text-white rounded-xl">
            Greetings! Im Rendy, an enthusiastic React developer diving into the
            world of front-end development. As a passionate learner in the
            field, Im on a journey to master the art of crafting engaging and
            responsive user interfaces using React. Driven by curiosity and a
            thirst for knowledge, Im exploring the dynamic landscape of web
            development and honing my skills in building modern, user-friendly
            interfaces. My journey as a React developer is just beginning, and
            Im excited about the endless possibilities for growth and innovation
            in this ever-evolving field. Join me on this learning adventure,
            where every line of code is a step towards creating seamless and
            visually appealing front-end experiences. Lets embark on this coding
            journey together!
          </div>
          <div className="px-5 py-6 bg-blue-400 rounded-xl mt-4 text-center">
            <h1 className="font-bold dark:text-slate-100 text-white">
              Hobby : Drawing Arts & Watching Anime
            </h1>
          </div>
        </div>
      </div>
      <div className="py-12 px-6 ">
        <Education />
      </div>
    </motion.section>
  );
};

export default About;
