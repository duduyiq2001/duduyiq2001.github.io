import React from "react";
import { motion } from "framer-motion";

interface ExperienceData {
  organization: string;
  title: string;
  period: string;
  description: string[];
  location: string;
  image?: string;
  link?: string;
}

const ExperienceCard: React.FC<ExperienceData> = ({
  organization,
  title,
  period,
  description,
  location,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card rounded-xl p-6 md:p-8 hover:border-neon-pink/50 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Content Container */}
        <div className="flex-grow">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-neon-pink mb-1">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  {organization}
                </a>
              ) : (
                organization
              )}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-lg text-white">{title}</span>
              <span className="text-sm text-gray-400">{period}</span>
              <span className="text-sm text-gray-400">{location}</span>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2">
            {description.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-2 text-gray-300"
              >
                <span className="text-neon-pink mt-1.5">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      organization: "PayPal",
      title: "Software Engineer Intern",
      period: "May 2025 - August 2025",
      location: "Chicago, Illinois",
      link: "https://www.paypal.com",
      description: [
        "Designed and implemented a comprehensive testing tool that validates critical payment processing paths and processor codes across the platform, resulting in a robust smoke test suite",
        "Instrumented multi-threading and container orchestration configurations to enable load testing simulating production traffic, with distributed telemetry to collect performance metrics and failure details",
        "Authored a domain-specific testing language using meta-programming to create an expressive framework adhering to DRY principles, with before-after hooks and abstracted metrics reporting",
        "Participated in a major backend refactoring initiative focused on modularization, improving system maintainability and component decoupling",
        "Implemented strict serialization boundaries and data objects for inter-component APIs with static type checking and automated contract-level tests triggered by code changes in CI, reducing runtime errors in production",
      ],
    },
    {
      organization: "SF Express",
      title: "Software Developer Intern",
      period: "July 2021 - August 2021",
      location: "Shanghai China",
      description: [
        "Facilitated the retrieval of detailed delivery methods and products information by implementing a part of the order management system Rest API powered by Python Sanic framework, ensuring alignment with technical specifications through Postman tests.",
        "Engineered and Optimized over 30 sql queries to ensure efficient Postgresql database access through implementation of indexing strategies and query refactoring, reduced average query execution time from 200ms to 150ms, enabling the system to handle 20% more transactions per second.	",
      ],
    },
   {
      organization: "UC Irvine (research project with chen li and not employment and for course credit)",
      title: "Research Asistent",
      period: "August 2023 - December 2024",
      location: "Irvine, California",
      description: [
        "Conducted an in-depth comparative analysis of data analytics platforms, including Galaxy and Amazon Glue, evaluating user experience, resource allocation strategies, machine learning workflows, and parallel data processing capabilities, providing strategic insights to enhance Texera's competitive positioning.",
        "Enhanced user engagement by overhauling Texera's Angular front end to integrate a real-time community discussion feature, facilitating seamless collaboration among users and increasing platform interaction.",
        "Streamlined cross-platform development and deployment by developing robust Bash and PowerShell scripts, automating the installation and configuration of discussion forums across various operating systems, reducing setup time by 50%.",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold neon-text mb-4">Experience</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, research, and
            academia.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
``;
