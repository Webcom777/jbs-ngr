import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function DigitalGatewayPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://raw.createusercontent.com/c29e1e29-5d80-445d-a800-c56e0a0074eb/")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Digital Gateway Initiative
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering 1000 young men and women with FREE digital skills
            training.
          </p>
          <a
            href="#register"
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 inline-flex items-center"
          >
            Apply Now <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Initiative
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Digital Gateway initiative, spearheaded by Jos Business School
              in consortium with nHub Nigeria and supported by the World Bank,
              is here to bridge the digital divide. We are providing free
              training in various digital tracks to equip youth and women,
              including people with disabilities, with the skills needed for the
              future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Available Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Software Development",
              "Data Science & Analytics",
              "Digital Marketing",
              "Product Design (UI/UX)",
              "Cybersecurity",
              "Graphics Design",
            ].map((track, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <CheckCircle
                  className="text-green-500 mr-4 flex-shrink-0"
                  size={24}
                />
                <span className="text-lg font-bold text-gray-800">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="register"
        className="py-20 bg-blue-900 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Don't Miss This Opportunity
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Registration is open for a limited time. Secure your spot today.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
