import React from "react";

import Formulario from "../componentes/Formulario";
import ListaParticipantes from "../componentes/ListaParticipantes";
import Rodape from "../componentes/Rodape";

const Configuracoes: React.FC = () => {
  return (
    <>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </>
  );
};

export default Configuracoes;
