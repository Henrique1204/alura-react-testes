import { RecoilRoot } from "recoil";

import { fireEvent, render, screen } from "@testing-library/react";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";

import Rodape from "./Rodape";

const mockUseNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

jest.mock("../state/hooks/useSorteador", () => () => mockSorteio);

jest.mock("../state/hooks/useListaDeParticipantes");

describe("Onde não existam participantes suficientes.", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(["Paulo"]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("A brincadeira não pode ser iniciada.", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();

    fireEvent.click(botao);

    expect(mockUseNavigate).toBeCalledTimes(0);
  });
});

describe("Onde existam participantes suficientes.", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Paulo",
      "Henrique",
      "Silva",
      "Souza",
    ]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("A brincadeira pode ser iniciada.", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).not.toBeDisabled();

    fireEvent.click(botao);

    expect(mockUseNavigate).toBeCalledTimes(1);
    expect(mockUseNavigate).toBeCalledWith("/sorteio");

    expect(mockSorteio).toBeCalledTimes(1);
  });
});
