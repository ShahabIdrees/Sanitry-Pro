import  React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setFormErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)
      // Reset form after submission
      setFormData({ name: "", email: "", phone: "", message: "" })
      alert("Thank you for your message. We will get back to you soon!")
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="bg-blue-600 text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-8">Fill out the form or contact us directly using the information below.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Clean Street, Sparkle City, SC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>info@cleanco.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <span>Mon-Fri: 9AM - 5PM</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Your Name"
                  />
                  {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Your Email"
                  />
                  {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Your Message"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-xs italic">{formErrors.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965804!2d-73.98656668505626!3d40.75889097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1579712922293!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
              title="CleanCo Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

