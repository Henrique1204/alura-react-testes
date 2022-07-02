import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Configuracoes from "./paginas/Configuracoes";
import Sorteio from "./paginas/Sorteio";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracoes />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
