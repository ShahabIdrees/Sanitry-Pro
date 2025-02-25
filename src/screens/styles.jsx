import  React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"


const stylesData = [
  {
    id: 1,
    name: "Modern Minimalist Faucet",
    description: "Sleek design with clean lines, perfect for a contemporary kitchen or bath.",
    imageUrl: "style-1.jpeg",
    category: "Residential",
  },
  {
    id: 2,
    name: "Eco-Friendly Faucet",
    description: "Water-saving technology and sustainable materials for an eco-conscious home.",
    imageUrl: "style-2.jpeg",
    category: "Eco-Friendly",
  },
  {
    id: 3,
    name: "Precision Flow Faucet",
    description: "Engineered for optimal water flow and efficiency in commercial settings.",
    imageUrl: "style-3.jpeg",
    category: "Commercial",
  },
  {
    id: 4,
    name: "Luxury Elegance Faucet",
    description: "Premium design with exquisite detailing, ideal for upscale residential projects.",
    imageUrl: "style-4.jpeg",
    category: "Residential",
  },
  {
    id: 5,
    name: "Quick-Flow Faucet",
    description: "Instant water delivery with modern design for immediate functionality.",
    imageUrl: "style-5.jpeg",
    category: "Commercial",
  },
  {
    id: 6,
    name: "All-Season Faucet",
    description: "Engineered for year-round performance, adapting to varying water pressures.",
    imageUrl: "style-6.jpeg",
    category: "Residential",
  },
  {
    id: 7,
    name: "SmartClean Faucet",
    description: "Designed for easy use and maintenance, ensuring a hygienic solution.",
    imageUrl: "style-7.jpeg",
    category: "Residential",
  },
  {
    id: 8,
    name: "Office Series Faucet",
    description: "Sleek and functional design tailored for high-traffic office environments.",
    imageUrl: "style-8.jpeg",
    category: "Commercial",
  },
  {
    id: 9,
    name: "Renovation Ready Faucet",
    description: "Engineered for seamless integration in post-construction and remodeling projects.",
    imageUrl: "style-9.jpeg",
    category: "Specialized",
  },
  {
    id: 10,
    name: "Budget Series Faucet",
    description: "Affordable and reliable—perfect for budget-conscious projects.",
    imageUrl: "style-10.jpeg",
    category: "Residential",
  },
  {
    id: 11,
    name: "Industrial Strength Faucet",
    description: "Built for heavy-duty performance in demanding industrial environments.",
    imageUrl: "style-11.jpeg",
    category: "Commercial",
  },
  {
    id: 12,
    name: "Designer Collection Faucet",
    description: "Sophisticated design that enhances both residential and boutique commercial spaces.",
    imageUrl: "style-12.jpeg",
    category: "Residential",
  },
  {
    id: 13,
    name: "Smart Sensor Faucet",
    description: "Touchless operation with advanced sensor technology for improved hygiene.",
    imageUrl: "style-13.jpeg",
    category: "Commercial",
  },
  {
    id: 14,
    name: "Vintage Charm Faucet",
    description: "Classic design meets modern functionality for timeless appeal.",
    imageUrl: "style-14.jpeg",
    category: "Residential",
  },
  {
    id: 15,
    name: "Compact Space Faucet",
    description: "Optimized for small spaces without compromising on performance.",
    imageUrl: "style-15.jpeg",
    category: "Residential",
  },
  {
    id: 16,
    name: "Dual-Function Faucet",
    description: "Versatile design featuring dual water streams for varied usage.",
    imageUrl: "style-16.jpeg",
    category: "Commercial",
  },
  {
    id: 17,
    name: "High-Pressure Faucet",
    description: "Engineered to perform under high water pressure conditions.",
    imageUrl: "style-17.jpeg",
    category: "Commercial",
  },
  {
    id: 18,
    name: "Customizable Touch Faucet",
    description: "Fully customizable features to match your unique brand requirements.",
    imageUrl: "style-18.jpeg",
    category: "Specialized",
  },
  {
    id: 19,
    name: "SmartFlow Faucet",
    description: "Next-generation faucet with intelligent flow control for enhanced efficiency.",
    imageUrl: "style-19.jpeg",
    category: "Commercial",
  },
  // Add more products as needed
];



const Styles= () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredStyles, setFilteredStyles] = useState(stylesData)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const itemsPerPage = 6

  const categories = ["All", ...new Set(stylesData.map((style) => style.category))]

  useEffect(() => {
    const filtered = stylesData.filter(
      (style) =>
        (selectedCategory === "All" || style.category === selectedCategory) &&
        (style.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          style.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredStyles(filtered)
    setCurrentPage(1)
  }, [selectedCategory, searchTerm])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredStyles.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredStyles.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const featuredStyle = stylesData[Math.floor(Math.random() * stylesData.length)]

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Cleaning Styles</h1>

        {/* Featured Style Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={featuredStyle.imageUrl || "/placeholder.svg"}
                alt={featuredStyle.name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Featured Style</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {featuredStyle.name}
              </a>
              <p className="mt-2 text-gray-500">{featuredStyle.description}</p>
            </div>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/3 relative">
            <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">
              Search Styles
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Search styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
            />
            <div
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              style={{ top: "1.75rem" }}
            >
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Grid of style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((style) => (
            <div
              key={style.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img src={style.imageUrl || "/placeholder.svg"} alt={style.name} className="w-full h-48 object-contain" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{style.name}</h3>
                  <span className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                    {style.category}
                  </span>
                </div>
                <p className="text-gray-600">{style.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md bg-indigo-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-indigo-600 transition-colors duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md bg-indigo-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-indigo-600 transition-colors duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Styles

