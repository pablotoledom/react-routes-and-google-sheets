import styled from 'styled-components/macro'

export const Nav = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const NavContent = styled.div`
  width: 100%;
  height: 64px;
  background-color: #6b6b6b;
  display: flex;
  align-items: center;
  border-top: 8px solid #000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 40px;

  @media (min-width: 1281px) {
    font-size: 14px;
  }
`;

export const NavTittle= styled.div`
  margin: 0 20px 0 250px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: monospace;
`;

export const LogoButton = styled.button`
  font-family: retronoid;
  transition: all 1s;
  padding: 28px;
  font-size: 38px;
  text-align: left;
  text-shadow: 1px 1px 1px #fff;
  word-break: break-all;
  height: 142px;
  background-size: contain;
  position: absolute;
  margin-left: 10px;
  top: 0px;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transform: rotate(-10deg)
`;

export const NavButton = styled.button`
  background-color: #555;
  padding: 20px;
  height: 100%;
  width: 120px;
  border: none;
  color: #fff;
  font-size: 16px;
  border-left: 1px solid #6b6b6b;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #000;
    color: #fff;
    font-size: 18px;
  }
`;