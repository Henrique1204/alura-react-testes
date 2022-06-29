import { useRecoilValue } from "recoil";

import { erroState } from "../atom";

const useMensagemDeErro = (): string => {
  const mensagem = useRecoilValue(erroState);

  return mensagem;
};

export default useMensagemDeErro;
