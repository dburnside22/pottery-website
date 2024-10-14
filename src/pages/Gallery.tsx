import { useState } from "react";

const categories = ["All", "Vases", "Bowls", "Plates", "Sculptures"];

const galleryItems = [
  {
    id: 1,
    title: "Bear Pot",
    description: "A pot with a bear design.",
    category: "Vases",
    image: "/assets/images/bearPot.JPG",
  },
  {
    id: 2,
    title: "Big Boy Mug",
    description: "A large mug for big drinks.",
    category: "Mugs",
    image: "/assets/images/bigBoyMug.jpg",
  },
  {
    id: 3,
    title: "Blue Bowl",
    description: "A beautiful blue bowl.",
    category: "Bowls",
    image: "/assets/images/blueBowl.JPG",
  },
  {
    id: 4,
    title: "Blue Jar",
    description: "A jar with a blue glaze.",
    category: "Jars",
    image: "/assets/images/blueJar.JPG",
  },
  {
    id: 5,
    title: "Fire Station Mugs",
    description: "Mugs with a fire station theme.",
    category: "Mugs",
    image: "/assets/images/fireStationMugs.JPG",
  },
  {
    id: 6,
    title: "Foam Jar",
    description: "A jar with a foam texture.",
    category: "Jars",
    image: "/assets/images/foamJar.JPG",
  },
  {
    id: 7,
    title: "Henry Horton Turtle Mug",
    description: "A mug with a turtle design.",
    category: "Mugs",
    image: "/assets/images/henryHortonTurtleMug.JPG",
  },
  {
    id: 8,
    title: "Honey Pot",
    description: "A pot for storing honey.",
    category: "Pots",
    image: "/assets/images/honeyPot.JPG",
  },
  {
    id: 9,
    title: "Joy Mugs",
    description: "Mugs with the word 'Joy'.",
    category: "Mugs",
    image: "/assets/images/joyMugs.JPG",
  },
  {
    id: 10,
    title: "Jug",
    description: "A large jug.",
    category: "Jugs",
    image: "/assets/images/jug.JPG",
  },
  {
    id: 11,
    title: "Jugs and Mugs",
    description: "A collection of jugs and mugs.",
    category: "Mixed",
    image: "/assets/images/jugsAndMugs.jpg",
  },
  {
    id: 12,
    title: "Letter Mugs",
    description: "Mugs with letters on them.",
    category: "Mugs",
    image: "/assets/images/letterMugs.JPG",
  },
  {
    id: 13,
    title: "Lynchburg Mug",
    description: "A mug with a Lynchburg design.",
    category: "Mugs",
    image: "/assets/images/LynchburgMug.JPG",
  },
  {
    id: 14,
    title: "Mama and Papa",
    description: "Mugs for Mama and Papa.",
    category: "Mugs",
    image: "/assets/images/mamaPapa.JPG",
  },
  {
    id: 15,
    title: "Mike Photo",
    description: "A photo of Mike.",
    category: "Photos",
    image: "/assets/images/mikePhoto.JPG",
  },
  {
    id: 16,
    title: "Mom Mug",
    description: "A mug for Mom.",
    category: "Mugs",
    image: "/assets/images/momMug.JPG",
  },
  {
    id: 17,
    title: "Nanny Mug",
    description: "A mug for Nanny.",
    category: "Mugs",
    image: "/assets/images/nannyMug.jpg",
  },
  {
    id: 18,
    title: "Plate Sculpture",
    description: "A sculpture made from plates.",
    category: "Sculptures",
    image: "/assets/images/plateScuplture.JPG",
  },
  {
    id: 19,
    title: "Star Mugs",
    description: "Mugs with star designs.",
    category: "Mugs",
    image: "/assets/images/starMugs.JPG",
  },
  {
    id: 20,
    title: "Sugar and Creamer Set",
    description: "A set for sugar and creamer.",
    category: "Sets",
    image: "/assets/images/sugarAndCreamerSet.JPG",
  },
  {
    id: 21,
    title: "Thanks Mugs",
    description: "Mugs with 'Thanks' written on them.",
    category: "Mugs",
    image: "/assets/images/thanksMugs.JPG",
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
