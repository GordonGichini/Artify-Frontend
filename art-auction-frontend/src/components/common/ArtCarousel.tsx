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
          <img src="https://images.pexels.com/photos/16842473/pexels-photo-16842473/free-photo-of-people-looking-at-painting-in-art-gallery.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 1" />
        </div>
        <div className="w-64 mx-2">
          <img src="https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 2" />
        </div>
        <div className="w-64 mx-2">
          <img src="https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork 3" />
        </div>
        {/* Add more art cards as needed */}
      </Slider>
    </div>
  );
};

export default ArtCarousel;
