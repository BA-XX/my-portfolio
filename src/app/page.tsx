import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Timeline from "@/components/Timeline";
import Head from "next/head";
import Link from "next/link";
import Experience from "@/sections/Experience";


function Home() {
  return (
    <main className="bg-base-100 text-base-content">

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl font-bold">Bilal Aloui</h1>
        <p className="mt-4 text-xl">Cybersecurity Student & Ethical Hacking Enthusiast</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="/blog" className="btn btn-outline">Read My Blog</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a cybersecurity student with a strong interest in digital trust, ethical hacking, and cyber defense. I enjoy building secure systems and learning through CTFs, bug bounties, and hands-on labs.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-base-200 px-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="badge badge-primary">Linux</span>
          <span className="badge badge-secondary">Wireshark</span>
          <span className="badge badge-accent">Nmap</span>
          <span className="badge badge-neutral">Python</span>
          <span className="badge badge-warning">Burp Suite</span>
          <span className="badge badge-info">Metasploit</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card Example */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">ML-Based Intrusion Detection System</h3>
              <p>Used CICIDS2017 and Car-Hacking datasets to detect internal and external cyber attacks in vehicles using machine learning.</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/your-project" className="btn btn-sm btn-outline">View Code</a>
              </div>
            </div>
          </div>

          {/* Add more project cards */}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-base-200 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Certifications</h2>
        <ul className="timeline">
          <li>
            <h3 className="font-bold">TryHackMe: Offensive Pentesting</h3>
            <p className="text-sm text-gray-500">Completed 2024</p>
          </li>
          <li>
            <h3 className="font-bold">HackTheBox: Starting Point</h3>
            <p className="text-sm text-gray-500">Completed 2023</p>
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <section id="education" className="py-16 bg-base-200 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
        <div className="text-center">
          <h3 className="text-xl font-bold">École Normale Supérieure de l’Enseignement Technique – Mohammedia</h3>
          <p className="text-sm text-gray-500">Computer Engineering – Cybersecurity Track (2023–2026)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-md mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-4">I'm open to internships, collaborations, or cybersecurity research.</p>
        <a href="mailto:your.email@example.com" className="btn btn-primary">Email Me</a>
      </section>

    </main>

  );
}

export default Home;
