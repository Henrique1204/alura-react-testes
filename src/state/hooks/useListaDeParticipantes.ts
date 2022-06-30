import { useRecoilValue } from "recoil";

import { listaParticipantes } from "../atom";

const useListaDeParticipantes = (): string[] => {
  const participantes = useRecoilValue(listaParticipantes);

  return participantes;
};

export default useListaDeParticipantes;
