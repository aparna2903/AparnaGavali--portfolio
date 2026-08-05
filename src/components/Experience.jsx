// import { FaBriefcase } from "react-icons/fa6";

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Fullstack developer intern",
//       company: "Qweez Technology",
//       years: "December 2025 - Present",
//     },

//     {
//       title: "Associate software engineer trainee",
//       company: "Testyantra software solutions pvt ltd.",
//       years: "January 2023 - May 2023",
//     },
//     {
//       title: "Associate software engineer",
//       company: "Web Works",
//       years: "December 2020 -December 2022",
//     },
//   ];

//   return (
//     <div id="Experience" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center text-teal-600 ">
//           Work <span className="text-slate-700">Experience</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="p-8 border border-zinc-400 rounded hover:border-zinc-600 transition duration-300 hover:-translate-y-1 bg-white"
//             >
//               <FaBriefcase className="text-3xl text-teal-600 mb-4" />
//               <h3 className="text-xl font-bold text-slate-700">{exp.title}</h3>
//               <p className="text-teal-600 font-semibold mb-2">{exp.company}</p>
//               <p className="text-slate-600">{exp.years}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import { FaBriefcase } from "react-icons/fa6";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack developer intern",
      company: "Qweez Technology",
      years: "December 2025 - Present",
    },
    {
      title: "Associate software engineer trainee",
      company: "Testyantra software solutions pvt ltd.",
      years: "January 2023 - May 2023",
    },
    {
      title: "Associate software engineer",
      company: "Advayas Tech Solutions Pvt. Ltd",
      years: "December 2020 - December 2022",
    },
  ];

  return (
    <div id="Experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-teal-600">
          Work <span className="text-slate-700">Experience</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Vertical Line (Hidden on mobile, visible on medium screens and up) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-teal-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="p-8 border border-zinc-300 rounded-lg hover:border-teal-500 transition duration-300 hover:-translate-y-1 bg-white shadow-sm">
                      <FaBriefcase className="text-3xl text-teal-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-700">{exp.title}</h3>
                      <p className="text-teal-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-slate-500 text-sm">{exp.years}</p>
                    </div>
                  </div>

                  {/* Center Dot Indicator (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-md"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;