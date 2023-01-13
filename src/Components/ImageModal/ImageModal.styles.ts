import styled from "styled-components/macro";

export const StyledImageModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #000000d4;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50px;
  right: 50px;
  color: #fff;
  font-size: 28px;
`;

export const StyledImageModal = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
