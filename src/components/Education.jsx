import AboutCard from "./AboutCard";
const Education = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2  place-items-center gap-5">
      {/* part one */}
      <div className="">
        <div className=" flex flex-col ">
          <h2 className="text-3xl dark:text-slate-100 text-gray-700 md:text-4xl font-bold">
            Education
          </h2>
        </div>
        <div className="mt-6 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="SMK YADIKA 3"
            subTitle="Teknik Komputer Jaringan"
            result="2019 - 2022"
            des="While I was at school here I studied computer networks, hardware and basic programming."
          />
          <AboutCard
            title="UNIVERSITAS UBSI"
            subTitle="Teknologi Informasi (S1)"
            result="Today"
            des="I am still an active student at this university, I chose to continue my education at this university to deepen my knowledge of computer science."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className=" flex flex-col ">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-slate-100 text-gray-700">
            Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="Pt Gapura Angkasa"
            subTitle="Internship Ms.Office"
            result="05 - 08 - 05 - 10 - 2022"
            des="I interned for only 2 month during the COVID 19 pandemic and during my internship I always operated Ms.Excell."
          />
          <AboutCard
            title="Taekwondo Merdeka Club"
            subTitle="Admin Socials media"
            result="18 - 09 - 2022 - 28 - 12- 2023"
            des="I have served as a social media admin in this organization and I managed all social media accounts & edited various content for the needs of the organization."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
