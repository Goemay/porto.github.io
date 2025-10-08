import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col transition-colors duration-300 scroll-smooth">
      
      {/* NAVBAR */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 backdrop-blur-md bg-opacity-80 dark:bg-opacity-70 transition">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">Porto-jim</h1>
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300">
            {["about", "projects", "skills", "experience", "education", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
            <li><DarkModeToggle /></li>
          </ul>
        </nav>
      </header>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10 text-center md:text-left"
      >
        {/* IMAGE */}
        <motion.img
          src="me.png"
          alt="Jim Raihan Gumay"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover border-4 border-blue-500 dark:border-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Jim Raihan Gumay</h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            IT Professional & Full-Stack Developer
          </p>
          <p className="mb-2">Cikarang Selatan, Kab Bekasi, Jawa Barat</p>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:raihangumay02@gmail.com"
              className="text-blue-500 dark:text-blue-300 underline hover:text-blue-700 dark:hover:text-blue-200 transition"
            >
              raihangumay02@gmail.com
            </a>
          </p>
          <p className="mb-6">Phone: (+62) 821 2320 7891</p>
          <p className="max-w-xl text-gray-700 dark:text-gray-300">
            Competitive problem-solver born in 2003, passionate about challenges and continuous learning.
          </p>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-700 dark:text-blue-400">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Inventory Management System",
              description: "A full-stack web app for managing stock, sales, and reports.",
              tags: ["React", "Node.js", "MySQL"],
            },
            {
              title: "Portfolio Website",
              description: "A responsive personal portfolio built with React & Tailwind.",
              tags: ["Vite", "TailwindCSS", "Framer Motion"],
            },
            {
              title: "Attandece App",
              description: "A responsive personal portfolio built with React & Tailwind.",
              tags: ["PHP", "Slim", "MySQL"],
            },
          ].map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-700 dark:text-blue-400">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Tailwind CSS", "Git", "Epicor ERP", "Unity"].map(
            (skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold cursor-default transition"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">Professional Experience</h2>
        <ExperienceItem
          title="IT Training Administrator"
          company="BPPTIK Kementrian Kominfo"
          period="Feb 2024 - Apr 2024"
          description="Managed social media, attendance, and participant data for government training classes."
        />
        <ExperienceItem
          title="SEO Content Specialist"
          company="Kampus Dosen Jualan"
          period="Aug 2023 - Dec 2023"
          description="Created SEO-optimized articles, managed website content to improve client visibility."
        />
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">Education</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
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
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">Get In Touch</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <ContactButton
            icon={<FaGithub />}
            label="GitHub"
            link="https://github.com/goemay"
          />
          <ContactButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            link="https://linkedin.com/in/jim-raihan"
          />
          <ContactButton
            icon={<FaEnvelope />}
            label="Email"
            link="mailto:raihangumay02@gmail.com"
          />
          <ContactButton
            icon={<FaPhone />}
            label="Phone"
            link="tel:+6282123207891"
          />
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-blue-900 dark:bg-blue-800 text-white py-6 text-center mt-auto">
        <p>&copy; 2025 Jim Raihan Gumay · Porto-jim</p>
      </footer>
    </div>
  );
}

/* Components */

function ProjectCard({ title, description, tags }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{title}</h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
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
    </motion.div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{title}</h3>
      <p className="italic text-gray-600 dark:text-gray-400">{company} | {period}</p>
      <p className="mt-1 max-w-xl text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

function EducationItem({ school, degree, period, gpa }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-96 border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{school}</h3>
      <p className="italic text-gray-600 dark:text-gray-400">{degree}</p>
      <p className="my-1">Period: {period}</p>
      <p>GPA: {gpa}</p>
    </motion.div>
  );
}

function ContactButton({ icon, label, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-5 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition"
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}

export default App;
