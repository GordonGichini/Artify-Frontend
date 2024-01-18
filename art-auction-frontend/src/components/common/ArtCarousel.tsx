import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArtCarousel: React.FC = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Artworks</h2>
      <Slider {...settings} className="flex">
        {/* Your individual art cards go here */}
        <div className="w-64 mx-2">
          <img src="https://via.placeholder.com/300x200" alt="Artwork 1" />
        </div>
        <div className="w-64 mx-2">
          <img src="https://via.placeholder.com/300x200" alt="Artwork 2" />
        </div>
        <div className="w-64 mx-2">
          <img src="https://via.placeholder.com/300x200" alt="Artwork 3" />
        </div>
        {/* Add more art cards as needed */}
      </Slider>
    </div>
  );
};

export default ArtCarousel;
