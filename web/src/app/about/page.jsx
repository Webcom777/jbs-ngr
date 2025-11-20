import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Empowering leaders and entrepreneurs through world-class education
            and training.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="prose lg:prose-xl text-gray-600">
              <p className="mb-4">
                The Jos Business School (JBS Business Services) was incorporated
                in August 2004 and commenced operations in 2005 as an integrated
                learning and resource center designed to encourage the growth
                and application of business management and leadership skills, as
                well as practical entrepreneurial techniques aimed at equipping
                our participants to face national and global challenges.
              </p>
              <p>
                The thrust of JBS's activities is to assist in the creation of a
                new generation of leaders, managers, and entrepreneurs that are
                empowered to tackle the unfolding challenges in their work,
                businesses, or private lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower business executives, business owners, entrepreneurs,
                and public/private sector managers with high-quality skills,
                techniques, and insight that will significantly widen their
                horizon and thereby add value to their future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Our Philosophy
              </h2>
              <p className="text-gray-600">
                The focus of JBS training activities is anchored on our core
                values which include integrity, credibility, and a
                result-oriented knowledge transfer based on the 3As -{" "}
                <strong>Acquire, Adapt, and Apply</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Goals & Objectives
            </h2>
            <ul className="space-y-4">
              {[
                "Design and deliver executive programs that will address specific management, business and financial problems.",
                "Undertake consultancy services for the private and public sectors on manpower development and human capital issues.",
                "Encourage the growth of a new generation of entrepreneurs in the North Central Zone and Nigeria.",
                "Develop the innate skills and capabilities in people, especially youth and women, to make them self-reliant.",
                "Alleviate poverty in the region by providing skills and knowledge transfer for self-employment.",
                "Assist in the promotion of good governance in Nigeria's public and private sector.",
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-lg">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Structure & Management
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-12 flex flex-col md:flex-row gap-8 items-center">
              {/* Placeholder for Director Image */}
              <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">Photo</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Mr. Ezekiel Gomos OFR
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Executive Director
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The day to day activities of JBS are coordinated by the
                  Executive Director, Mr. Ezekiel Gomos OFR who is also the Team
                  Leader of the faculty. He was the pioneer MD/CEO of Plateau
                  Investment Property Development Company (PIPDC) Jos. He has
                  had a distinguished career spanning banking, government
                  service, and international fellowships including being a
                  Hubert Humphrey Fellow and a British Chevening Fellow.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Advisory Board
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Chief (Mrs) Loretta Aniagolu",
                  desc: "Economist and finance specialist with significant experience in enterprise development.",
                },
                {
                  name: "Mallam Lamis Dikko",
                  desc: "Accomplished banker with over 25 years experience, former MD/CEO of Intercity Bank.",
                },
                {
                  name: "Senator A.A. Ibrahim",
                  desc: "Investment and management expert, former Senator representing Taraba Central.",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                    <span className="text-xs">Photo</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
