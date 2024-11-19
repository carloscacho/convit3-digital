import { Id } from "../../shared";
import Convidado from "../model/Convidado";

const criarConvidadoVazio = (): Partial<Convidado> => {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0
  };
};

const complementarConvidado = (prevConvidado: Partial<Convidado>): Convidado => {
  const erros = validarConvidado(prevConvidado);

  if (erros.length) throw new Error(erros.join("\n"));

  const qtdeAcompanhantes = prevConvidado.qtdeAcompanhantes ?? 0;
  const permiteAcompanhantes = prevConvidado.confirmado && prevConvidado.possuiAcompanhantes && qtdeAcompanhantes > 0

  const convidado: Convidado = {
    ...prevConvidado,
    id: prevConvidado.id ?? Id.novo(),
    qtdeAcompanhantes: permiteAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: permiteAcompanhantes,
  } as Convidado;

  return convidado
};

const validarConvidado = (convidado: Partial<Convidado>): string[] => {
  const erros: string[] = [];

  if (!convidado.nome) erros.push("Nome é um campo obrigatório");

  if (!convidado.email) erros.push("Email é um campo obrigatório");

  return erros;
};

console.log(criarConvidadoVazio());


export {validarConvidado, complementarConvidado, criarConvidadoVazio}