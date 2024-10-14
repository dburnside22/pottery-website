import { useState } from "react";

const categories = ["All", "Vases", "Bowls", "Plates", "Sculptures"];

const galleryItems = [
  {
    id: 1,
    title: "Elegant Vase",
    description: "A sleek, modern vase with a unique glaze.",
    category: "Vases",
    image: "/assets/images/photo1.jpg",
  },
  {
    id: 2,
    title: "Rustic Bowl Set",
    description: "A set of handcrafted bowls with an earthy finish.",
    category: "Bowls",
    image: "/assets/images/photo2.jpg",
  },
  {
    id: 3,
    title: "Decorative Plate",
    description: "An intricately designed plate for special occasions.",
    category: "Plates",
    image: "/assets/images/photo3.jpg",
  },
  {
    id: 4,
    title: "Abstract Sculpture",
    description: "A unique sculptural piece that adds character to any space.",
    category: "Sculptures",
    image: "/assets/images/photo4.jpg",
  },
  {
    id: 5,
    title: "Minimalist Vase",
    description: "A simple yet elegant vase for modern interiors.",
    category: "Vases",
    image: "/assets/images/photo5.jpg",
  },
  {
    id: 6,
    title: "Serving Bowl",
    description:
      "A large, versatile bowl perfect for serving salads or fruits.",
    category: "Bowls",
    image: "/assets/images/photo6.jpg",
  },
  {
    id: 7,
    title: "Ceramic Plate Set",
    description: "A set of four matching plates with a unique glaze pattern.",
    category: "Plates",
    image: "/assets/images/photo7.jpg",
  },
  {
    id: 8,
    title: "Figurative Sculpture",
    description: "A detailed figurative sculpture showcasing human form.",
    category: "Sculptures",
    image: "/assets/images/photo8.jpg",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Our Pottery Collection
      </h2>

      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? "bg-[#8c7a6b] text-white"
                : "bg-[#e0d1c1] text-[#4a3728] hover:bg-[#d7c0ae]"
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#e0d1c1] p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full rounded-md aspect-1"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-[#6b5a4c]">{item.description}</p>
            <p className="text-sm text-[#8c7a6b] mt-2">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
