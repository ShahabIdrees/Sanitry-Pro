import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">SanitaryPro</h3>
            <p className="text-gray-400 mb-4">
            Engineered for excellence, our sanitary ware is crafted with top-grade materials and advanced engineering techniques. Enjoy faucets that not only perform flawlessly but also add a touch of sophistication to every setting.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Post-construction Cleanup
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                <span className="text-gray-400">+1 (832) 962‑1214</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                <a
                  href="mailto:faucettpro@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  faucettpro@gmail.com              
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 SanitaryPro All rights reserved.</p>
          <div className="flex space-x-4">
            {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

