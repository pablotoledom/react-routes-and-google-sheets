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
  margin-left: 250px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'monospace';
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