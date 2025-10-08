import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-sans flex flex-col transition-colors duration-500 ease-in-out">

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-b border-gray-200 dark:border-gray-700 shadow-md transition-all">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight hover:scale-105 transition-transform">
            Porto-jim
          </h1>
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            {["About", "Projects", "Skills", "Experience", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Jim Raihan Gumay
        </h2>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
          IT Professional & Full-Stack Developer
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-1">
          Cikarang Selatan, Kab Bekasi, Jawa Barat
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-1">
          Email:{" "}
          <a
            href="mailto:raihangumay02@gmail.com"
            className="text-blue-500 dark:text-blue-300 hover:underline"
          >
            raihangumay02@gmail.com
          </a>
        </p>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Phone: (+62) 821 2320 7891
        </p>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Competitive problem-solver born in 2003, passionate about challenges and continuous learning.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-700 dark:text-blue-400">
          Featured Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Inventory Management System"
            description="A full-stack Java application using MySQL and Swing UI for stock control."
            tags={["Java", "MySQL", "Swing"]}
          />
          <ProjectCard
            title="Room Booking System"
            description="Web app with admin and customer modules built with PHP & MySQL."
            tags={["PHP", "MySQL", "Bootstrap"]}
          />
          <ProjectCard
            title="Personal Portfolio"
            description="Modern portfolio website built with React and Tailwind CSS."
            tags={["React", "Tailwind", "Vite"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="container mx-auto py-20 px-6 bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "PHP",
            "Laravel",
            "Git",
            "Epicor ERP",
            "Unity",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
          Professional Experience
        </h2>
        <ExperienceItem
          title="IT Training Administrator"
          company="BPPTIK Kementrian Kominfo"
          period="Feb 2024 - Apr 2024"
          description="Managed social media, attendance, and participant data for government training programs."
        />
        <ExperienceItem
          title="SEO Content Specialist"
          company="Kampus Dosen Jualan"
          period="Aug 2023 - Dec 2023"
          description="Produced SEO-optimized content and managed client website visibility improvements."
        />
        <ExperienceItem
          title="IT Support Administrator"
          company="PT. Hume Concrete Indonesia"
          period="Internship (3 months)"
          description="Provided IT support and managed system troubleshooting for production systems."
        />
      </section>

      {/* Education */}
      <section
        id="education"
        className="container mx-auto py-20 px-6 bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
          Education
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <EducationItem
            school="President University"
            degree="Information Technology"
            period="2021 - 2025"
            gpa="3.45 / 4.00"
          />
          <EducationItem
            school="SMK Ananda Mitra Industri Deltamas"
            degree="Mechanical Engineering"
            period="2018 - 2021"
            gpa="8 / 10"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
          Get In Touch
        </h2>
        <p className="mb-3">
          Email:{" "}
          <a
            href="mailto:raihangumay02@gmail.com"
            className="text-blue-600 dark:text-blue-300 underline hover:text-blue-800"
          >
            raihangumay02@gmail.com
          </a>
        </p>
        <p className="mb-2">Phone: (+62) 821 2320 7891</p>
        <p>Cikarang Selatan, Kab Bekasi, Jawa Barat</p>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-cyan-700 dark:from-blue-900 dark:to-cyan-800 text-white py-6 text-center mt-auto shadow-inner">
        <p>&copy; 2025 Jim Raihan Gumay · Porto-jim</p>
      </footer>
    </div>
  );
}

/* Reusable Components */
function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div className="mb-10 hover:translate-x-1 transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{title}</h3>
      <p className="italic text-gray-600 dark:text-gray-400 mb-1">{company} | {period}</p>
      <p className="max-w-xl text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function EducationItem({ school, degree, period, gpa }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-96 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{school}</h3>
      <p className="italic text-gray-600 dark:text-gray-400">{degree}</p>
      <p className="my-1 text-gray-700 dark:text-gray-300">Period: {period}</p>
      <p className="text-gray-700 dark:text-gray-300">GPA: {gpa}</p>
    </div>
  );
}

export default App;
