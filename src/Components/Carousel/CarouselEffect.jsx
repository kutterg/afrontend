import React from 'react'
import {Carousel} from 'react-responsive-carousel'
// import {Carousel} from '../../Components/Carousel/CarouselEffect'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from './Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        // autoplay={true}
        infiniteLoop={true}
        // infiniteloop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
