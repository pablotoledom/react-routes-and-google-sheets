import styled, { css } from 'styled-components/macro'
import logo from "./img/logo.png";

type NavButton = {
  active: boolean,
}

export const StyledNav = styled.div`
  width: 100%;
  background-color: #6b6b6bd1;
  display: flex;
  justify-content: center;
`;

export const StyledNavContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 70px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 790px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1281px) {
    font-size: 14px;
  }
`;


export const StyledNavTittleContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledNavTittle= styled.div`
  margin: 0 20px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: monospace;

  @media (min-width: 500px) {
    font-size: 22px;
  }
`;

export const StyledLogoButton = styled.button`
  background-image: url(${logo});
  width: 100px;
  min-width: 100px;
  height: 67px;
  background-size: contain;
  margin-left: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

export const StyledNavButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000000c4;

  @media (min-width: 790px) {
    background-color: initial;
  }
`;

export const StyledNavButton = styled.button<NavButton>`
  border: none;
  color: #fff;
  padding: 5px 10px;
  background-color: transparent;
  font-size: 16px;
  border-left: 1px solid #6b6b6b;
  cursor: pointer;
  transition-duration: 0.4s;

  ${props => props.active && css`
    background-color: #555;
  `}

  &:last-of-type {
    border-right: 1px solid #6b6b6b;
  }

  &:hover {
    background-color: #000;
    color: #fff;
    font-size: 18px;
  }

  @media (min-width: 790px) {
    background-color: #555;
    color: #fff;
    padding: 20px;

    ${props => props.active && css`
      background-color: #000;
    `}
  }
`;