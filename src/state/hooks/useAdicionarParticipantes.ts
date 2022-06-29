import { useRecoilValue, useSetRecoilState } from "recoil";

import { erroState, listaParticipantes } from "../atom";

type adicionarParticipanteFn = (participante: string) => void;

const useAdicionarParticipantes = (): adicionarParticipanteFn => {
  const setLista = useSetRecoilState(listaParticipantes);
  const lista = useRecoilValue(listaParticipantes);

  const setErro = useSetRecoilState(erroState);

  const adicionarParticipante: adicionarParticipanteFn = (participante) => {
    if (lista.includes(participante)) {
      setErro("Nome duplicados não são permitidos.");

      return setTimeout(() => setErro(""), 5 * 1000);
    }

    setLista((prevLista) => [...prevLista, participante]);
  };

  return adicionarParticipante;
};

export default useAdicionarParticipantes;
