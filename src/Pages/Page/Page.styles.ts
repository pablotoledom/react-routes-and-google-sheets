import styled from 'styled-components/macro';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import whatsapp from './img/whatsapp.png';

export const StyledPageContainer = styled.div`
  width: 100%;
  color: #000;
  background-color: rgb(255 255 255 / 90%);
`;

export const StyledContent = styled.div`
  padding: 20px;
`;

export const StyledTittle = styled.h1`
  font-size: 22px;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
`;

export const StyledImageParagraph = styled.img`
  width: 300px;
  float: left;
  margin-right: 20px;
`;

export const StyledImage= styled.img`
  width: 100%;

`;

export const StyledWhatsappLink= styled.a`
  background-image: url(${whatsapp});
  background-repeat: no-repeat;
  padding: 10px 0 10px 43px;
  display: inline-block;
`;

export const StyledFacebookLink= styled.a`
  background-image: url(${facebook});
  background-repeat: no-repeat;
  padding: 10px 43px;
  display: inline-block;
`;

export const StyledInstagramLink= styled.a`
  background-image: url(${instagram});
  background-repeat: no-repeat;
  padding: 10px 43px;
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

export const StyledImgGaleryContainer2 = styled.button`
  width: 100%;
  height: 300px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  
  @media (min-width: 450px) {
    width: 50%;
    display: inline-flex;
  }
`;

export const StyledImgGaleryContainer3 = styled.button`
  width: 100%;
  height: 200px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  
  @media (min-width: 450px) {
    width: 50%;
    display: inline-flex;
  }
  
  @media (min-width: 790px) {
    width: 33.3%;
    display: inline-flex;
  }
`;

export const StyledImgGalery = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
`;
