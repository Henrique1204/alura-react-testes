import React from "react";
import { RecoilRoot } from "recoil";

import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";

import Sorteio from "./Sorteio";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";
import useResultadoDoSorteio from "../state/hooks/useResultadoDoSorteio";

jest.mock("../state/hooks/useListaDeParticipantes");
jest.mock("../state/hooks/useResultadoDoSorteio");

describe("Na página de sorteio", () => {
  const participantes = ["Paulo", "Henrique", "Silva", "Souza"];

  const resultado = new Map([
    ["Paulo", "Henrique"],
    ["Henrique", "Silva"],
    ["Silva", "Souza"],
    ["Souza", "Paulo"],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  it("Todos os particpantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length);
  });

  it("O amigo secreto é exibido quando solicitado.", async () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
