import React from 'react';
import DarkModeToggle from './DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col transition-colors duration-300">

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">Porto-jim</h1>
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
            <li><DarkModeToggle /></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Jim Raihan Gumay</h2>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">IT Professional & Full-Stack Developer</p>
        <p className="mb-2">Cikarang Selatan, Kab Bekasi, Jawa Barat</p>
        <p className="mb-1">Email: <a href="mailto:raihangumay02@gmail.com" className="text-blue-500 dark:text-blue-300 underline">raihangumay02@gmail.com</a></p>
        <p className="mb-6">Phone: (+62) 821 2320 7891</p>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300">Competitive problem-solver born in 2003, passionate about challenges and continuous learning.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project cards here, add dark mode classes similarly */}
          {/* For brevity, you can reuse your existing project cards with added dark mode classes */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-16 px-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Tailwind CSS", "Git", "Epicor ERP", "Unity"].map(skill => (
            <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold">{skill}</span>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Professional Experience</h2>
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
        <ExperienceItem
          title="IT Support Administrator"
          company="PT. Hume Concrete Indonesia"
          period="3 months"
          description="Provided IT support and administration for concrete manufacturing company."
        />
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto py-16 px-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Education</h2>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Get In Touch</h2>
        <p className="mb-2">Email: <a href="mailto:raihangumay02@gmail.com" className="text-blue-600 underline">raihangumay02@gmail.com</a></p>
        <p className="mb-2">Phone: (+62) 821 2320 7891</p>
        <p>Cikarang Selatan, Kab Bekasi, Jawa Barat</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 dark:bg-blue-800 text-white py-6 text-center mt-auto">
        <p>&copy; 2025 Jim Raihan Gumay · Porto-jim</p>
      </footer>
    </div>
  );
}



function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="italic text-gray-600">{company} | {period}</p>
      <p className="mt-1 max-w-xl text-gray-700">{description}</p>
    </div>
  );
}

function EducationItem({ school, degree, period, gpa }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-96">
      <h3 className="text-xl font-semibold text-blue-700">{school}</h3>
      <p className="italic text-gray-600">{degree}</p>
      <p className="my-1">Period: {period}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
}

export default App;
