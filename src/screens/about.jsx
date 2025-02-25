import  React from "react"
import { Users, Award, Recycle, Clock } from "lucide-react"
import { Link } from "react-router-dom"

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
    <h2 className="text-3xl font-bold text-center mb-8">Our Value Proposition</h2>
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Direct Factory Sourcing</h3>
        <p className="text-gray-700">
          We cut out the middlemen by sourcing custom faucets straight from the factory, ensuring top quality at competitive prices.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Customizable Solutions</h3>
        <p className="text-gray-700">
          Our products are fully customizable and white-label ready, letting you embed your brand identity on every faucet.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Competitive Pricing</h3>
        <p className="text-gray-700">
          By eliminating extra distribution layers, we offer you premium faucets at prices that enhance your bottom line.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Uncompromised Quality</h3>
        <p className="text-gray-700">
          Our commitment to excellence ensures each faucet delivers consistent performance and reliability for your customers.
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
          <Link to="/contact">

          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Get a Free Quote
          </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

