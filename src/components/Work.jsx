
// import { projectData } from "../assets/asstes";

// const Work = () => {
//   return (
//     <div id="Work" className="py-20">
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
//             Featured<span className="text-teal-600">Projects</span>
//           </h2>
//           <p className="text-xl max-w-3xl mx-auto">
//             Developing responsive, future-ready applications that put users first.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//           {projectData.map((project, index) => (
//             <div
//               key={index}
//               className="group rounded overflow-hidden hover:shadow-lg transition border border-gray-200 hover:-translate-y-1 duration-300 flex flex-col"
//             >
//               <div className="relative flex items-center justify-center"> 
//                 <img className="group-hover:opacity-100" src={project.image} alt={project.title}/>
//               </div>
              
//               <div className="p-6 flex-grow">
//                 <h2 className="text-xl font-bold mb-2">{project.title}</h2> 
//                 <p className="text-slate-900 text-sm leading-relaxed text-left">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {project.tech.map((language, i) => (
//                     <span key={i} className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full">
//                       {language}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Added View Project and Live Demo Links */}
//               <div className="p-6 pt-0 flex gap-4 mt-auto">
//                 {/* <a href={project.projectLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-600 hover:underline">
//                   View Project →
//                 </a> */}
//                 <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm font-bold  text-teal-600 hover:underline">
//                   Live Demo →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;


import React, { useState } from "react";
import { projectData } from "../assets/asstes";

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  // Number of projects to display initially
  const initialCount = 4;
  const displayedProjects = showAll ? projectData : projectData.slice(0, initialCount);

  return (
    <div id="Work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            Featured<span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Developing responsive, future-ready applications that put users first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded overflow-hidden hover:shadow-lg transition border border-gray-200 hover:-translate-y-1 duration-300 flex flex-col"
            >
              <div className="relative flex items-center justify-center"> 
                <img className="group-hover:opacity-100" src={project.image} alt={project.title}/>
              </div>
              
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2> 
                <p className="text-slate-900 text-sm leading-relaxed text-left">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((language, i) => (
                    <span key={i} className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Added View Project and Live Demo Links */}
              <div className="p-6 pt-0 flex gap-4 mt-auto">
                {/* <a href={project.projectLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-600 hover:underline">
                  View Project →
                </a> */}
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm font-bold  text-teal-600 hover:underline">
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {projectData.length > initialCount && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;