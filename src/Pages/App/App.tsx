import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import Welcome from "../Welcome";
import LayoutSite  from "../LayoutSite";
import PageA from "../PageA";
import PageB from "../PageB";
// import PageArea from "../PageArea";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LayoutSite />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route index element={<Welcome />} />
          {/* <Route path="/area/:idArea/:nameArea" element={<PageArea />} />*/}
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
