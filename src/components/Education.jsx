import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science",
      school: "Shivaji University,Kolhapur",
      year: "2017 - 2020",
    },
    {
      degree: "Diploma in IT",
      school: "Government polytechnic, Kolhapur",
      year: "2012 - 2016",
    },
  ];

 return (
  <div id="Education" className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-slate-700 ">
        My <span className="text-teal-600 ">Education</span>
      </h2>
      {/* Changed gap-2 to gap-8 for better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            // Removed fixed width (w-2/3) so cards fill the grid column
            // Added mx-auto to center the card if there is only one item
            className="w-full max-w-2xl mx-auto p-8 border border-zinc-400 rounded hover:border-zinc-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaGraduationCap className="text-3xl text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">{edu.degree}</h3>
            <p className="text-teal-600 font-semibold mb-2">{edu.school}</p>
            <p className="text-slate-600">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Education;
