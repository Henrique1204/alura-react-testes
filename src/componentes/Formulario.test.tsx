import { fireEvent, render, screen, act } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import Formulario from "./Formulario";

describe("O comportamento do formulário.", () => {
  it("Quando o input está vazio, novos participantes não podem ser adicionados.", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participante"
    );
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("Adicionar um participante caso exista um preenchido.", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participante"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Paulo Henrique" } });
    expect(input).toHaveValue("Paulo Henrique");

    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  it("Nomes duplicados não podem ser adicionados na lista.", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participante"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Paulo Henrique" } });
    expect(input).toHaveValue("Paulo Henrique");

    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Paulo Henrique" } });
    expect(input).toHaveValue("Paulo Henrique");

    fireEvent.click(button);

    const mensagemErro = screen.getByRole("alert");

    expect(mensagemErro.textContent).toBe(
      "Nome duplicados não são permitidos."
    );
  });

  it("A mensagem de erro deve sumir após os timers.", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participante"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Paulo Henrique" } });
    expect(input).toHaveValue("Paulo Henrique");

    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Paulo Henrique" } });
    expect(input).toHaveValue("Paulo Henrique");

    fireEvent.click(button);

    const mensagemErroGet = screen.getByRole("alert");
    expect(mensagemErroGet).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    const mensagemErroQuery = screen.queryByRole("alert");
    expect(mensagemErroQuery).not.toBeInTheDocument();
  });
});
