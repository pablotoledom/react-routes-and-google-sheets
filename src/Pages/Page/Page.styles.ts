import styled, { css } from 'styled-components/macro';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import whatsapp from './img/whatsapp.png';

type ImageGalery = {
  src: string,
}

export const StyledPageContainer = styled.div`
  width: 100%;
  color: #000;
  background-color: rgb(255 255 255 / 90%);
`;

export const StyledContent = styled.div`
  padding: 10px;

  @media (min-width: 550px) {
    padding: 20px;
  }
`;

export const StyledTittle = styled.h1`
  font-size: 22px;
`;

export const StyledTittle2 = styled.h2`

`;

export const StyledTittle3 = styled.h3`
  font-weight: bold;
  color: #000000a1;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
  margin-top: 0;
`;

export const StyledImageParagraph = styled.img`
  width: 140px;
  float: left;
  margin-right: 10px;
  border-radius: 10px;

  @media (min-width: 550px) {
    width: 300px;
  }
`;

export const StyledImage= styled.img`
  width: 100%;

`;

export const StyledWhatsappLink= styled.a`
  background-image: url(${whatsapp});
  background-repeat: no-repeat;
  margin: 5px;
  padding: 10px 20px 10px 43px;
  display: inline-block;
`;

export const StyledFacebookLink= styled.a`
  background-image: url(${facebook});
  background-repeat: no-repeat;
  margin: 5px;
  padding: 10px 20px 10px 43px;
  display: inline-block;
`;

export const StyledInstagramLink= styled.a`
  background-image: url(${instagram});
  background-repeat: no-repeat;
  margin: 5px;
  padding: 10px 20px 10px 43px;
  display: inline-block;
`;

export const StyledSeparator = styled.div`
  margin: 10px 0;
  width: 100%;
`;

export const StyledSeparatorLine = styled.hr`
  margin: 10px 0;
  width: 100%;
`;

export const StyledImgGaleryContainer2 = styled.button<ImageGalery>`
  ${props => props.src && css`
    background-image: url(${props.src});
  `}

  width: 100%;
  height: 250px;
  margin-bottom: 5px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border-radius: 10px;
  
  @media (min-width: 450px) {
    width: 48%;
    height: 180px;
    margin: 1%;
    display: inline-flex;
  }

  @media (min-width: 650px) {
    width: 48%;
    height: 250px;
    margin: 1%;
    display: inline-flex;
  }
`;

export const StyledImgGaleryContainer3 = styled.button<ImageGalery>`
  ${props => props.src && css`
    background-image: url(${props.src});
  `}

  width: 100%;
  height: 200px;
  margin-bottom: 5px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  align-items: end;
  display: inline-flex;
  border-radius: 10px;
  
  @media (min-width: 450px) {
    width: 48%;
    margin: 1%;
  }
  
  @media (min-width: 790px) {
    width: 31.3%;
    margin: 1%;
  }
`;

export const StyledImgAlt = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background-color: #000000b3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StyledImgGalery = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
`;
