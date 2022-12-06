import styled from "styled-components";

export const Page = styled.section`
  display: grid;
  grid-template-columns: auto 90% auto;
  grid-template-rows: 142px auto;
  grid-template-areas: 
    "navbar navbar navbar"
    ". content .";

  @media (min-width: 1281px) {
    grid-template-columns: auto 1200px auto;
    grid-template-rows: 142px auto;
  }
`;

export const NavbarArea = styled.div`
  grid-area: navbar;
`;

export const ContentArea = styled.div`
  grid-area: content;
  padding: 10px 0;
`;
