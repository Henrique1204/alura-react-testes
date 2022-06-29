import React from "react";

import useAdicionarParticipantes from "../state/hooks/useAdicionarParticipantes";
import useMensagemDeErro from "../state/hooks/useMensagemDeErro";

const Formulario: React.FC = () => {
  const [nome, setNome] = React.useState("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const adicionarParticipante = useAdicionarParticipantes();
  const mensagemDeError = useMensagemDeErro();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    adicionarParticipante(nome);

    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        placeholder="Insira os nomes dos participante"
      />

      <button disabled={!nome}>Adicionar</button>

      {mensagemDeError && <p role="alert">{mensagemDeError}</p>}
    </form>
  );
};

export default Formulario;
