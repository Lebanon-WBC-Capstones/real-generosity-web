import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import sofa from '../../assets/images/sofa.png';
export default function CarouselComponent() {
  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={sofa} />
        </div>
        <div>
          <img src={sofa} />
        </div>
        <div>
          <img src={sofa} />
        </div>
      </Carousel>
    </div>
  );
}
