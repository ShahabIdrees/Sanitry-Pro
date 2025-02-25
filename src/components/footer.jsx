import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background SVG Decoration */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,144C672,160,768,224,864,245.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192V320H0Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">SanitaryPro</h3>
            <p className="text-gray-400 mb-6">
              Engineered for excellence, our sanitary ware is crafted with top-grade materials and advanced engineering techniques. Elevate your space with our high-performance, stylish faucets.
            </p>
            {/* <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
  <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-3">
    {["Home", "About", "Contact", "Styles"].map((link, index) => (
      <li key={index}>
        <Link
          to={link === "Home" ? "/" : `/${link.toLowerCase()}`} // Home → "/", Others → "/about", "/contact", etc.
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          {link}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex justify-center md:justify-start items-center">
                <Phone size={20} className="mr-3 text-blue-500" />
                <span className="text-gray-400">+1 (832) 962‑1214</span>
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <Mail size={20} className="mr-3 text-blue-500" />
                <a href="mailto:faucettpro@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  faucettpro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 SanitaryPro. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
