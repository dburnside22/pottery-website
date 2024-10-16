import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const featuredImages = [
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
    }
  ];

  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-8'>Welcome to Home Thrown Pottery</h1>
      <Slider {...settings} className='mb-12'>
        {featuredImages.map((image, index) => (
            <div key={index}>
            <img
              className="d-block w-56 h-56 object-cover text-center mx-auto border-4 border-[#8c7a6b] rounded-lg"
              src={image.image}
              alt={image.title}
            />
            <div className="carousel-caption">
              <h3 className="text-center font-semibold">{image.title}</h3>
              <p className="text-center">{image.description}</p>
            </div>
            </div>
        ))}
      </Slider>
      <div className="text-center">
        <button
          className="bg-[#8c7a6b] hover:bg-[#b8a08c] text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.href = '/gallery'}
        >
          View Gallery
        </button>
      </div>
    </div>
  );
};

export default Home;
