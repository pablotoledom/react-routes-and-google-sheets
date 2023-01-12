import styled from 'styled-components';

export const Page = styled.section`
  display: grid;
  grid-template-columns: auto 90% auto;
  grid-template-rows: 70px auto;
  grid-template-areas: 
    "navbar navbar navbar"
    ". content .";

  @media (min-width: 1080px) {
    grid-template-columns: auto 1000px auto;
  }
`;

export const NavbarArea = styled.div`
  grid-area: navbar;
`;

export const ContentArea = styled.div`
  grid-area: content;
  padding: 10px 0;
`;
