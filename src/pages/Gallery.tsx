import React, { useState } from 'react'

const categories = ['All', 'Vases', 'Bowls', 'Plates', 'Sculptures']

const placeholderImages = Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  title: `Pottery Piece ${index + 1}`,
  description: 'Description of the pottery piece',
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}))

const Gallery = () => {
  const [filter, setFilter] = useState('All')

  const filteredImages = filter === 'All'
    ? placeholderImages
    : placeholderImages.filter(item => item.category === filter)

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Pottery Collection</h2>
      
      <div className="mb-8 flex justify-center space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? 'bg-[#8c7a6b] text-white'
                : 'bg-[#e0d1c1] text-[#4a3728] hover:bg-[#d7c0ae]'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredImages.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#e0d1c1] p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <div className="aspect-w-1 aspect-h-1 bg-[#c1a28e] rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-[#6b5a4c]">{item.description}</p>
            <p className="text-sm text-[#8c7a6b] mt-2">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery