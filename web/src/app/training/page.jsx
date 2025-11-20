import React from "react";
import { CheckCircle } from "lucide-react";

const programs = [
  {
    title: "Entrepreneurship & Business Management Workshop",
    synopsis:
      "Assess the fundamental skills necessary to start and operate your own business, and to collaborate with others to identify business opportunities.",
    audience: "Students, Graduates, Business Owners",
  },
  {
    title: "Developing Managerial Competences",
    synopsis:
      "Learn the basics of setting and achieving performance targets, innovation and creativity in the change management process.",
    audience: "Business Professionals, Managers, Supervisors",
  },
  {
    title: "Leading Teams for Effective Performance",
    synopsis:
      "Learn essential leadership skills, including how to inspire and motivate individuals, manage talent, influence without authority, and lead teams.",
    audience: "Top, Middle & Low Level Managers, Entrepreneurs",
  },
  {
    title: "Critical Thinking & Problem Solving Skills",
    synopsis:
      "Structured approach to tackling problems, opportunities and decisions that will ultimately help participants get better results.",
    audience: "Directors, Heads of Departments, HR Managers",
  },
  {
    title: "Human Resource Management",
    synopsis:
      "Impart appropriate skills, techniques and concepts that will assist managers sharpen their abilities to effectively lead and manage their personnel.",
    audience: "HR Managers, Entrepreneurs",
  },
  {
    title: "Project Management Principles & Practices",
    synopsis:
      "Intensive and hands-on program giving you the skills to ensure your projects are completed on time and on budget.",
    audience: "Project Managers, Teams, Business Managers",
  },
  {
    title: "Leading with Emotional Intelligence",
    synopsis: "Links emotional intelligence to practical leadership behavior.",
    audience: "Heads of Departments, Managers, Team Leaders",
  },
  {
    title: "Strategic Thinking & Planning",
    synopsis:
      "Cover the 7 steps of the strategy management process, starting with the 'thinking' components and moving into execution.",
    audience: "All Managers, Senior Professionals",
  },
];

export default function TrainingPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Training Programs
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Enhance your capabilities with our expert-led executive education
            courses.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Jos Business School has been able to schedule our Training
            Programmes with a wide spread throughout the year. You can also have
            special scheduled programmes tailored for your organization. Our
            programs are flexible, vibrant, and fast-paced.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {program.synopsis}
                </p>

                <div className="bg-blue-50 p-4 rounded-md mt-auto">
                  <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-2">
                    Who Should Attend
                  </h4>
                  <p className="text-sm text-gray-700">{program.audience}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    Duration: 1-5 Days
                  </span>
                  <a
                    href="/contact"
                    className="text-blue-600 font-bold hover:text-blue-800 flex items-center"
                  >
                    Register <CheckCircle size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Program Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Leadership & Governance",
              "Sales & Marketing",
              "Finance & Accounting",
              "General Management",
              "Asset Management",
              "ICT Skills",
            ].map((cat, i) => (
              <span
                key={i}
                className="bg-gray-800 hover:bg-blue-700 px-6 py-3 rounded-full text-lg transition cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
