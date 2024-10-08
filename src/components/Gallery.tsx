import React from 'react'

const Gallery = () => {
  const placeholderImages = Array(12).fill(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {placeholderImages.map((_, index) => (
        <div key={index} className="bg-[#e0d1c1] p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <div className="aspect-w-1 aspect-h-1 bg-[#c1a28e] rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold">Pottery Piece {index + 1}</h3>
          <p className="text-sm text-[#6b5a4c]">Description of the pottery piece</p>
        </div>
      ))}
    </div>
  )
}

export default Gallery