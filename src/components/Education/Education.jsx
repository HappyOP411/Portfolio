import React from "react";
// import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
     <section id="education" class=" py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    {/* <h2 class="text-3xl font-bold text-gray-800 mb-8 border-b pb-2 border-gray-300">
      Education
    </h2> */}

   
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-white">Senior Secondary (12th Science)</h3>
      <p class="text-gray-400 mt-1">
        I completed my 12th Science from <span class="font-medium">National Institute of Open Schooling (NIOS)</span> in the year 2023. This flexible and self-paced learning program allowed me to develop a deep understanding of core scientific subjects such as Physics, Chemistry, and Mathematics. Throughout the course, I honed essential academic skills including critical thinking, logical reasoning, and effective time management. The open schooling system also encouraged independent learning, which has played a key role in shaping my discipline and curiosity for knowledge. Completing this program laid the groundwork for my interest in technology and problem-solving.
      </p>
    </div>

    <div>
      <h3 class="text-xl font-semibold text-white">MERN Stack Development Certification</h3>
      <p class="text-gray-400 mt-1">
        I earned a professional certification in MERN Stack Development from <span className="font-medium">Red & White Multimedia Education,</span> where I received in-depth training in full-stack web development technologies. The program focused on MongoDB, Express.js, React.js, and Node.js, enabling me to build dynamic, responsive, and scalable web applications. I worked on various hands-on projects, which helped me understand real-world development workflows, version control with Git, and best coding practices. This experience not only improved my technical proficiency but also enhanced my ability to work in a team, troubleshoot effectively, and stay updated with modern development trends. It marked a significant step toward my career in software development.
      </p>
    </div>
  </div>
</section>

    </section>
  );
};

export default Education;
