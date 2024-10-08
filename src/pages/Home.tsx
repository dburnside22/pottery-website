import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const featuredPieces = [
  { id: 1, title: 'Elegant Vase', description: 'A sleek, modern vase with a unique glaze.' },
  { id: 2, title: 'Rustic Bowl Set', description: 'A set of handcrafted bowls with an earthy finish.' },
  { id: 3, title: 'Sculptural Teapot', description: 'An artistic teapot that doubles as a centerpiece.' },
]

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPieces.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPieces.length) % featuredPieces.length)
  }

  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-4xl font-bold mb-8">Welcome to Pottery Maker</h1>
      <p className="mb-8 text-lg">Discover the beauty of handcrafted pottery</p>
      
      <div className="relative w-full max-w-2xl mx-auto mb-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          {featuredPieces.map((piece, index) => (
            <div
              key={piece.id}
              className={`absolute w-full h-64 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full bg-[#c1a28e] flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{piece.title}</h3>
                  <p>{piece.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#8c7a6b] text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#8c7a6b] text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <Link to="/gallery" className="bg-[#8c7a6b] text-white px-6 py-3 rounded-lg hover:bg-[#6b5a4c] transition-colors">
        View Gallery
      </Link>
    </div>
  )
}

export default Home