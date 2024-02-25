import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isFormValid = Array.from(formData).every(
      ([key, value]) => value.trim() !== ""
    );

    if (!isFormValid) {
      toast.error("Harap isi semua kolom formulir.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    emailjs
      .sendForm(
        "service_8v3ijab",
        "template_8a6enjh",
        form.current,
        "XCn1E7CGzVgIDdlAx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email terkirim");
          form.current.reset();
          toast.success("Pesan telah terkirim", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Gagal mengirim pesan. Silakan coba lagi.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex h-full  mx-auto justify-center "
    >
      <div className="container lg:px-12 px-4 py-20 mt-10">
        <div className="mb-10  text-center">
          <p className="text-xl text-headingcolor font-semibold text-blue-500 dark:text-blue-400">
            Get In Touch
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold dark:text-slate-200">
            Contact me
          </h2>
          <p className="mt-3 text-blue-500 dark:text-blue-400">
            Lets talk about questions
          </p>
        </div>
        <div className="md:w-2/3 mx-auto mb-20">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="firstname"
                  className="text-base text-headingcolor w-full dark:text-slate-200"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=" First name..."
                  className="px-4 block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="lastname"
                  className="text-base text-headingcolor w-full dark:text-slate-200"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder=" Last name..."
                  className="px-4 block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="email"
                  className=" text-base text-headingcolor w-full dark:text-slate-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" Email..."
                  className="px-4 block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="number"
                  className="text-base text-headingcolor w-full dark:text-slate-200"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder=" Phone number..."
                  className="px-4 block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
                />
              </div>
            </div>

            <div className="w-full mb-8">
              <label
                htmlFor="message"
                className="text-base text-headingcolor w-full dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="px-4 block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div data-aos="fade-up" className="w-full mb-8">
              <input type="checkbox" name="agree" id="agree" />
              <label
                htmlFor="message"
                className="text-base text-headingcolor w-full ml-3 dark:text-slate-200"
              >
                I accept the terms
              </label>
            </div>
            <div className="w-36 mx-auto border rounded-lg bg-blue-500 border-blue-500 active:bg-blue-400">
              <input
                type="submit"
                value="Submit"
                className=" py-3 font-bold px-8 text-white  rounded-b-md cursor-pointer inline-block w-full "
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
