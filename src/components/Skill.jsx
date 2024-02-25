import Skills from "../assets/Skills";
import Info from "../images/skill.gif";

const Skill = () => {
  return (
    <div>
      <section className="flex items-center justify-center sm:h-screen md:h-auto skill ">
        <div className="mx-auto px-6 mb-3 ">
          <div className="mt-10 ">
            <div className="flex gap-3 justify-center mb-3 dark:text-slate-200">
              <h2 className="font-bold lg:text-4xl  text-3xl  mt-2 flex gap-2">
                My{""}
                <span className="skl dark:text-slate-200" data-text="Skills">
                  Skills
                </span>
              </h2>
              <img src={Info} alt="" className="w-12 h-12" />
            </div>
            <h2
              className="dark:text-slate-300 justify-center flex text-gray-700 font-bold text-3xl mr-4"
              data-aos="fade-up"
            >
              Tech Stack
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mt-10 mb-5 text-2xl text-balance ">
              {Skills.map((skill, index) => (
                <div
                  key={index}
                  className="dark:bg-slate-200 px-1 text-center rounded shadow-lg dark:shadow-blue-500  transition-transform hover:shadow-lg hover:scale-105"
                >
                  <div className="w-24 h-24  mt-3 mx-auto ">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-20 h-20 lg:w-full lg:h-full object-cover mx-auto"
                    />
                  </div>
                  <h1 className="font-bold text-gray-800 mb-3 text-sm lg:text-lg  ">
                    {skill.name}
                  </h1>
                  <p className="text-gray-800 mb-3 font-semibold text-sm lg:text-md ">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
