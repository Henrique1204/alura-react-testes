import React from "react";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";

const ListaParticipantes: React.FC = () => {
    const participantes = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>
          {participante}
        </li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
