import realizarSorteio from "./realizarSorteio";

describe("Dado um sorteio de amigo secreto.", () => {
  it("Cada participante não sorteie o próprio nome.", () => {
    const participantes = ["Paulo", "Henrique", "Silva", "Souza"];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);

      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
