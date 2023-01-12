import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getRoutes } from "../../Api";
import { GlobalStyle } from "./App.styles";
import Page from "../Page";
import LayoutSite  from "../LayoutSite";
import Items from "../Items";

function App() {
  const [pageList, setPageList] = useState<Route[]>([]);

  const getPageList = async () => {
    const pages: Route[] = await getRoutes();
    setPageList(pages);
  };


  useEffect(() => {
    getPageList();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LayoutSite />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/category/:idItem/:nameItem" element={<Items />} />
          <>
            {pageList.length > 0 && pageList.map((route) => (
              <Route key={route.id} path={route.link} element={<Page />} />
            ))}
          </>
        </Route>
      </Routes>
    </>
  );
}

export default App;
