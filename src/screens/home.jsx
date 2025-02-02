import { useEffect } from "react"
import { ArrowRight, CheckCircle, Star, PhoneCall } from "lucide-react"

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="../assets/home.jpg"
          alt="Clean bathroom"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Welcome to CleanCo</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Revolutionizing Sanitation for a Healthier World
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 animate-pulse">
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Zigzag Sections */}
      <section className="py-16 px-4 md:px-0 bg-gray-50">
        <div className="container mx-auto">
          {/* First Zigzag Section */}
          <div className="flex flex-col md:flex-row items-center mb-16 animate-on-scroll">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Innovative Cleaning Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                Our cutting-edge technology and eco-friendly products ensure a spotless and hygienic environment for
                your home or business. Experience the future of cleaning with CleanCo.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="../assets/section3.jpg"
                alt="Innovative cleaning products"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>

          {/* Second Zigzag Section */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 animate-on-scroll">
            <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Professional Cleaning Teams</h2>
              <p className="text-gray-600 leading-relaxed">
                Our highly trained and certified cleaning experts use the latest techniques to deliver exceptional
                results every time. Trust in our team to bring sparkle to your space.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="../assets/section-1.jpg"
                alt="Professional cleaning team"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>

          {/* Third Zigzag Section */}
          <div className="flex flex-col md:flex-row items-center animate-on-scroll">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Customized Cleaning Plans</h2>
              <p className="text-gray-600 leading-relaxed">
                We tailor our services to meet your specific needs, ensuring a personalized approach to cleanliness and
                sanitation. Your unique space deserves a unique cleaning solution.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="../assets/section2.jpg"
                alt="Customized cleaning plan"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-0 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">Why Choose CleanCo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <CheckCircle size={48} className="mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Eco-Friendly</h3>
              <p>We use environmentally safe products to protect your health and our planet.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <Star size={48} className="mb-4" />
              <h3 className="text-2xl font-semibold mb-2">5-Star Service</h3>
              <p>Our commitment to excellence has earned us top ratings from satisfied customers.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <PhoneCall size={48} className="mb-4" />
              <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
              <p>Our customer service team is always ready to assist you, any time of day or night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Ready for a Cleaner, Healthier Space?</h2>
          <p className="text-xl text-gray-600 mb-8 animate-on-scroll">
            Contact us today for a free consultation and quote!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 animate-on-scroll">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home

