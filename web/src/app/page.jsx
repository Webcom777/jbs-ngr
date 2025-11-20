import React from "react";
import { ArrowRight, BookOpen, Users, Monitor, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://raw.createusercontent.com/99318e7f-9602-4aee-822f-a6bf1c8b0b38/")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Jos Business School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Encouraging the growth and application of business management and
            leadership skills.
          </p>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            Learn More <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Digital Gateway Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://raw.createusercontent.com/c29e1e29-5d80-445d-a800-c56e0a0074eb/"
                alt="Digital Gateway Training"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Digital Gateway Initiative
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Are you ready to kickstart your journey in the world of digital
                skills? The Digital Gateway initiative, spearheaded by Jos
                Business School in consortium with nHub Nigeria and supported by
                the World Bank, is here to empower 1000 young men and women with
                FREE training in various digital tracks.
              </p>
              <a
                href="/digital-gateway"
                className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center text-lg"
              >
                Join the Program <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Key Areas</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide comprehensive solutions for personal and organizational
              growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Training</h3>
              <p className="text-gray-600">
                Executive education and capacity building programs.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-600">
                Expert advice for business and management challenges.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Monitor size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ICT Services</h3>
              <p className="text-gray-600">
                Digital solutions and technology integration.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Projects</h3>
              <p className="text-gray-600">
                Implementation of development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JBS Residence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                JBS Residence
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Experience comfort and convenience at the heart of Jos. Our
                residence provides premium accommodation services for our
                training participants, visitors, and guests.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Whether you're attending our training programs or visiting Jos
                for business, JBS Residence offers a welcoming environment with
                excellent hospitality and modern facilities.
              </p>
              <a
                href="/hotel"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
              >
                View Accommodation Services{" "}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
                alt="JBS Residence"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Training Programs
              </h2>
              <p className="text-gray-600 mt-2">
                Enhance your skills with our specialized courses.
              </p>
            </div>
            <a
              href="/training"
              className="hidden md:flex text-blue-600 font-bold hover:text-blue-800 items-center"
            >
              View All Programs <ArrowRight className="ml-2" size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Leadership & Governance",
              "Sales and Marketing",
              "Finance and Accounting",
              "General Management",
              "Business Management",
              "Asset Management",
            ].map((program, index) => (
              <a
                href="/training"
                key={index}
                className="group block bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {program}
                </h3>
                <span className="text-sm text-gray-500 mt-2 block">
                  Learn more &rarr;
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <a
              href="/training"
              className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center"
            >
              View All Programs <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join our programs and become part of a network of successful
            professionals and entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/training"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
