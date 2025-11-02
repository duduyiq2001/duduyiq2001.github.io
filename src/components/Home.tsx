import React from "react";
import { useState } from "react";
import ContactModal from "./ContactModel";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GlowButton: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-block px-8 py-3 bg-neon-pink rounded-lg button-glow ${className}`}
    >
      {children}
    </a>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  status: "ongoing" | "completed";
  technologies: string[];
  languages: string[];
  link?: string; // Optional project link
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  status,
  technologies,
  languages,
  link,
}) => {
  return (
    <div className="card rounded-xl p-6 hover:border-neon-pink transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-pink transition-colors duration-300 flex items-center gap-2"
            >
              {title}
              <svg
                className="w-4 h-4 inline-block opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">{date}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "ongoing"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-neon-pink mb-2">
            Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neon-pink/20 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neon-pink mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neon-pink/10 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const projects = [
  {
    title: "Yakamoto Clean Sweep",
    description:
      "A stylish 2D action game developed for Game Off 2023, featuring a cleaning robot protagonist in a cyberpunk setting. Players navigate through challenging levels while managing power resources and defeating enemies.",
    date: "Dec 2021",
    status: "completed" as const,
    languages: ["C#"],
    technologies: ["Unity"],
    link: "https://maidandready.itch.io/yakamoto-clean-sweep",
  },
  {
    title: "Fablix movie website",
    description:
      "a full-stack website facilitating the search and purchase of movies on AWS EC2, leveraging load balancing, master slave replication, and MySQL connection pooling for improved scalability, as well as an android mobile app for enhanced accessibility.",
    date: "Dec 2021",
    status: "completed" as const,
    languages: ["Java", "Javascript"],
    technologies: [
      "JQery",
      "Jakarta servlet",
      "Jmeter",
      "MySQL",
      "MySQL load balancer",
      "Full text search",
      "Fuzzy search",
      "Ruby on Rail",
    ],
    link: "",
  },
  {
    title: "Centero",
    description:
      "A Firebase-based application for streamlining communication between residents and property managers. Features serverless architecture and real-time call routing capabilities powered by google cloud messaging.",
    date: "Dec 2023",
    status: "completed" as const,
    languages: ["Dart", "TypeScript"],
    technologies: [
      "Firebase",
      "Google Cloud Functions",
      "Flutter",
      "Firebase cloud messaging",
    ],
  },
  {
    title: "Multithreaded Course Registration Server",
    description:
      "A high-performance course registration system utilizing multithreading for concurrent user handling. Features robust error handling and efficient database operations. Adopted epoll/kqueue (depending on OS) for non-blocking I/O, drastically reducing overhead. Enabled rolling updates by decoupling each thread’s operational context, allowing server instances to be updated in real time.",
    date: "March 2024",
    status: "completed" as const,
    languages: ["C"],
    technologies: ["Multithreading", "Pthread ", "Pthread mutex", "gcc"],
    link: "https://github.com/duduyiq2001/multithreaded-course-registration-server",
  },
  {
    title: "Smart Business AI",
    description:
      " a React-based web application underpinned by a powerful LLM orchestration layer (LangChain) for intelligent financial analysis, recognized with the MasterCard Prize at Hack WashU 2024.",
    date: "Oct 2024",
    status: "completed" as const,
    languages: ["JavaScript"],
    technologies: [
      "OpenAI API",
      "React",
      "mastercard Openbanking API",
      "Axios",
    ],
    link: "https://github.com/duduyiq2001/Smart-business-AI",
  },
  {
    title: "Sanitized LLM",
    description:
      "An ongoing research project focused on developing a more secure and controlled version of large language models. Implements advanced sanitization techniques to ensure safe and reliable AI responses.",
    date: "Oct 2024",
    status: "ongoing" as const,
    languages: ["Python"],
    technologies: ["PyTorch", "Transformers", "pandas"],
    link: "https://github.com/duduyiq2001/Sanitized_LLM",
  },
];

interface SkillCardProps {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

const skillSets = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Rust",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Angular.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Langchain",
        icon: "https://python.langchain.com/v0.1/img/brand/wordmark.png",
      },
      {
        name: "Apache Tomcat",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Apache_Tomcat_logo.svg",
      },
      {
        name: "Apache Server",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/Apache_HTTP_server_logo_%282019-present%29.svg",
      },
      {
        name: "Ruby on Rails",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Sanic",
        icon: "https://raw.githubusercontent.com/sanic-org/sanic-assets/master/png/sanic-framework-logo-400x97.png",
      },
    ],
  },
  {
    title: "Softwares, Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Unity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Vim",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },
      {
        name: "WebGL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg",
      },
      { name: "Jmeter", icon: "https://jmeter.apache.org/images/asf-logo.svg" },
      {
        name: "Postman",
        icon: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Binary Ninja",
        icon: "https://cloud.binary.ninja/static/images/cloudlogo-square.png",
      },
      {
        name: "VirtualBox",
        icon: "https://1000logos.net/wp-content/uploads/2020/08/VirtualBox-Logo-2010.png",
      },
      {
        name: "Linux system administration",
        icon: "https://www.svgrepo.com/show/3968/linux.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Datadog",
        icon: "https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_icon_rgb.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Cassandra",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
      {
        name: "Neo4j",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
      },
    ],
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="card rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6 text-neon-pink">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 mb-2 relative">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain transition-all duration-300 
                           group-hover:drop-shadow-[0_0_8px_rgba(255,27,107,0.5)]"
              />
            </div>
            <span className="text-sm text-gray-400 text-center group-hover:text-neon-pink transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="neon-text">Dean Du</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Computer Engineering Major at 🏫 Washington University in Saint
            Louis | Software Developer | Computer Security Ethusiast
          </p>
          <div className="mt-8">
            <GlowButton href="#contact">Get In Touch</GlowButton>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="card rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 neon-text">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              My name is Dean and I am a computer engineering master student at
              Washington University in Saint Louis. My interests are web
              development, AI as well as computer security.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 neon-text">
            Notable Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 neon-text">
            Technical Skills
          </h2>
          <div className="space-y-8">
            {skillSets.map((skillSet, index) => (
              <SkillCard
                key={index}
                title={skillSet.title}
                skills={skillSet.skills}
              />
            ))}

            {/* Special card for conceptual skills */}
            <div className="card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-neon-pink">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Object Oriented Programming",
                  "Object Oriented Analysis & Design",
                  "Machine Learning",
                  "Data Structures",
                  "Algorithms",
                  "System Design",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neon-pink/10 rounded-full text-sm text-gray-300 
                         hover:bg-neon-pink/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="card rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 neon-text">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              Interested in working together? Let's connect!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-neon-pink rounded-lg button-glow"
              >
                Email Me
              </button>
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://github.com/duduyiq2001"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yiqun-dean-du-4b4583200/"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/deanduinsta"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default Home;
