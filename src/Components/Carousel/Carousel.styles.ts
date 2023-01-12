import styled, { css } from "styled-components/macro";

type CarouselImgEffectProps = {
  show: boolean,
  time: number,
}

export const CarouselContainerStyled = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
`;

export const CarouselImgEffect = styled.div<CarouselImgEffectProps>`
  ${props => props.show && css`
    visibility: visible;
    opacity: 1;
    transition: opacity ${props.time/1000}s linear;
  `}
  
  ${props => !props.show && css`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s ${(props.time/1000)}s, opacity ${props.time/1000}s linear;
  `}
`;

export const ImagenStyled = styled.img`
  width: 100%;
  vertical-align: middle;
`;