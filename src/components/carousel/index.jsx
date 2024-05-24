import React from 'react';
import { CarouselContainer } from './index.styles';
import Slider from 'react-slick';

export default function VenueCarousel({ media }) {
  const settings = {
    dots: true,
    infinite: media.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (media.length === 1) {
    return (
      <CarouselContainer>
        <div>
          <img src={media[0].url} alt={media[0].alt || 'Venue Image'} />
        </div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {media.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.alt || `Venue Image ${index}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
