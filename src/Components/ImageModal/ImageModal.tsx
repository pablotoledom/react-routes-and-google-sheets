import { useEffect, useState } from 'react';
import { StyledCloseButton, StyledImageModal, StyledImageModalContainer } from './ImageModal.styles';
import { ImageModalProps } from './ImageModal.types';

function Carousel({
  show,
  src,
  closeCallback,
  ...props
}: ImageModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showEffect, setShowEffect] = useState(true);

  console.log(show, src);

  useEffect(() => {

  }, []);

  return (
    <>
      { show && (
        <StyledImageModalContainer>
          <StyledCloseButton onClick={closeCallback}>X</StyledCloseButton>
          <StyledImageModal alt="image" src={src}/>
        </StyledImageModalContainer>
      )}
    </>
  );
}

export default Carousel;