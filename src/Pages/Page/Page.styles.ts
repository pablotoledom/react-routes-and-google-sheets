import styled from 'styled-components/macro';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import whatsapp from './img/whatsapp.png';

export const StyledPageContainer = styled.div`
  width: 100%;
  color: #000;
  background-color: rgb(255 255 255 / 90%);
  border: 5px solid #ffffff00;
`;

export const StyledContent = styled.div`
  padding: 20px;
`;

export const StyledTittle = styled.p`
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

export const StyledImgGaleryContainer = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;

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
  width: 100%;
`;
