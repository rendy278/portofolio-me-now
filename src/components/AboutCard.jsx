const AboutCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-60 group flex">
      <div className="w-10 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-blue-500 bg-opacity-60">
          <span className="w-3 h-3 rounded-full  inline-flex group-hover:bg-white duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-blue-400 rounded-lg p-4 flex flex-col justify-center gap-6 shadow-xl dark:shadow-blue-600">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-slate-100 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-white bg-blue-500  rounded-lg flex justify-center items-center shadow-xl text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-white ">{des}</p>
      </div>
    </div>
  );
};

export default AboutCard;
