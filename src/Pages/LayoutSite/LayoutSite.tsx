import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { ContentArea, NavbarArea, Page } from "./LayoutSite.styles";

function LayoutSite() {
  return (
    <Page>
      <NavbarArea>
        <Navbar />
      </NavbarArea>

      <ContentArea>
        <Outlet />
      </ContentArea>
    </Page>
  );
}

export default LayoutSite;