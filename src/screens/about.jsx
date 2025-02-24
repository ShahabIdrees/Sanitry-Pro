import  React from "react"
import { Users, Award, Recycle, Clock } from "lucide-react"

const About= () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SanitaryPro</h1>
          <p className="text-xl md:text-2xl mb-8">Revolutionizing Sanitation for a Healthier World</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
          At Sanitry Pro, our mission is to empower businesses by providing high-quality, customizable taps and faucets that blend exceptional performance with competitive pricing. We are dedicated to streamlining your supply chain and enhancing your brand’s presence with innovative, reliable sanitary ware solutions. Join us as we redefine industry standards and help you deliver excellence to your customers every day.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">We prioritize our customers' needs and satisfaction above all else.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our products.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Recycle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">We are committed to using environmentally safe practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">We deliver consistent, dependable products designed to exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">2010: The Beginning</h3>
              <p className="text-gray-700">
                CleanCo was founded with a vision to transform the cleaning industry through innovation and dedication
                to customer satisfaction.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">2015: Eco-Innovation</h3>
              <p className="text-gray-700">
                We introduced our line of eco-friendly cleaning products, setting a new standard for sustainable
                cleaning practices.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">2020: Expansion</h3>
              <p className="text-gray-700">
                CleanCo expanded its services nationwide, bringing our exceptional cleaning solutions to more homes and
                businesses.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Today</h3>
              <p className="text-gray-700">
                We continue to grow and innovate, always striving to provide the best cleaning services and products to
                our valued customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Aashir Azeem", role: "CEO & Founder", image: "/aashir.jpg" },
              { name: "Amjad Azeem", role: "Operations Manager", image: "/amjad.png" },
              { name: "Shahab Idrees", role: "Customer Relations", image: "/shahab.png" },
            ].map((member, index) => (
              <div key={index} className="bg-white circle rounded-lg shadow-md overflow-hidden items-center">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the SanitryPro Difference?</h2>
          <p className="text-xl mb-8">Join the many businesses that trust us for quality and reliability.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  )
}

export default About

