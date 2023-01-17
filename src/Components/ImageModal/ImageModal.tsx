import { useEffect } from 'react';
import { StyledCloseButton, StyledImageModal, StyledImageModalContainer } from './ImageModal.styles';
import { ImageModalProps } from './ImageModal.types';

function Carousel({
  show,
  src,
  closeCallback,
  ...props
}: ImageModalProps) {

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