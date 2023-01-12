import { useEffect, useState } from 'react';
import { CarouselContainerStyled, CarouselImgEffect, ImagenStyled } from './Carousel.styles';

// images
import img01 from "./img/01.jpg";
import img02 from "./img/02.jpg";
import img03 from "./img/03.jpg";
import img04 from "./img/04.jpg";

// time
const changeTime = 6000;
const timeEffect = 1000;

function Carousel() {
  const images = [img01, img02, img03, img04];
  const [slideIndex, setSlideIndex] = useState(0);
  const [showEffect, setShowEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowEffect(false);
    }, (changeTime - timeEffect + 300));

    setTimeout(() => {
      const newSlide = slideIndex + 1 < images.length ? slideIndex + 1 : 0;
      setShowEffect(true);
      setSlideIndex(newSlide);
    }, changeTime);
  }, [slideIndex, images.length]);

  return (
    <CarouselContainerStyled>
      <CarouselImgEffect show={showEffect} time={timeEffect}>
        <ImagenStyled src={images[slideIndex]} />
      </CarouselImgEffect>
    </CarouselContainerStyled>
  );
}

export default Carousel;