import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import Welcome from "../Welcome";
import LayoutSite  from "../LayoutSite";
import PageA from "../PageA";
import PageB from "../PageB";
import Items from "../Items";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LayoutSite />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route index element={<Welcome />} />
          <Route path="/category/:idItem/:nameItem" element={<Items />} />
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
