import { MdDesignServices, MdWeb, MdOutlineDraw } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
const Service = () => {
  return (
    <section className="mx-auto py-10 text-center justify-center">
      <div className="text-center mx-auto">
        <h1 className="text-gray-600 font-bold text-2xl dark:text-slate-100">
          SERVICE
        </h1>
        <h2 className="text-gray-900 font-bold text-3xl dark:text-gray-300">
          Specialized in
        </h2>
      </div>
      <div className="container  px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-center mt-6 justify-center gap-6">
        <div className="w-full md:w-80 p-6 lg:w-[550px] dark:bg-slate-200 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="text-center bg-blue-400 py-1 px-1 w-12 mx-auto rounded-md">
            <MdDesignServices className="text-4xl text-white mx-auto" />
          </div>
          <a href="#">
            <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Grapich Desainer
            </h5>
          </a>
          <p className="mb-3 text-base font-normal text-gray-500 ">
            Turn what you have in mind of digital product into reality. for any
            platform you consider
          </p>
        </div>

        <div className="w-full md:w-80 lg:w-[550px] p-6 dark:bg-slate-200 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="text-center bg-blue-400 py-1 px-1 w-12 mx-auto rounded-md">
            <MdWeb className="text-4xl text-white mx-auto" />
          </div>
          <a href="#">
            <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Web Programming
            </h5>
          </a>
          <p className="mb-3 text-base font-normal text-gray-500">
            create and maintain your website & also take care of its performance
            and traffic capacity
          </p>
        </div>

        <div className="w-full md:w-80 p-6 lg:w-[550px] dark:bg-slate-200  bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="text-center bg-blue-400 py-1 px-1 w-12 mx-auto rounded-md">
            <MdOutlineDraw className="text-4xl text-white mx-auto" />
          </div>
          <a href="#">
            <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Drawing Arts
            </h5>
          </a>
          <p className="mb-3 text-base font-normal text-gray-500">
            I can draw whatever you want and it is part of my hobby because I
            really like painting
          </p>
        </div>

        <div className="w-full md:w-80 p-6 lg:w-[550px] dark:bg-slate-200  bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="text-center bg-blue-400 py-1 px-1 w-12 mx-auto rounded-md">
            <IoShareSocialOutline className="text-4xl text-white mx-auto" />
          </div>
          <a href="#">
            <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Sosial Media Admin
            </h5>
          </a>
          <p className="mb-3 text-base font-normal text-gray-500">
            I have experience in managing social media so I can manage your
            social media accounts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
