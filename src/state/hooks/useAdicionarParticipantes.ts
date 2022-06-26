import { useSetRecoilState } from "recoil";

import { listaParticipantes } from "../atom";

type adicionarParticipanteFn = (participante: string) => void;

const useAdicionarParticipantes = (): adicionarParticipanteFn => {
  const setLista = useSetRecoilState(listaParticipantes);

  const adicionarParticipante: adicionarParticipanteFn = (participante) => {
    setLista((prevLista) => [...prevLista, participante]);
  };

  return adicionarParticipante;
};

export default useAdicionarParticipantes;
