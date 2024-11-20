import { Id, Senha } from "../../shared";
import Evento from "../model/Evento";

const criarEventoVazio = (): Partial<Evento> => {
  return {
    id: Id.novo(),
    nome: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
};

const complementarEvento = (prevEvento: Partial<Evento>): Evento => {
  const erros = validarEvento(prevEvento);

  if (erros.length) throw new Error(erros.join("\n"));

  const evento: Evento = {
    ...prevEvento,
    id: prevEvento.id ?? Id.novo(),
    senha: prevEvento.senha ?? Senha.nova(),
    publicoEsperado: +(prevEvento.publicoEsperado ?? 1),
  } as Evento;

  return evento;
};

const validarEvento = (evento: Partial<Evento>): string[] => {
  const erros: string[] = [];

  if (!evento.alias) erros.push("Alias é um campo obrigatório");

  if (!evento.nome) erros.push("Nome é um campo obrigatório");

  if (!evento.descricao) erros.push("Descrição é um campo obrigatório");

  if (!evento.data) erros.push("Data é um campo obrigatório");

  if (!evento.local) erros.push("Local é um campo obrigatório");

  if (!evento.publicoEsperado || evento.publicoEsperado < 1)
    erros.push(
      "Publico Esperado é um campo obrigatório e deve ser maior que 1"
    );

  if (!evento.imagem) erros.push("Imagem é um campo obrigatório");

  if (!evento.imagemBackground)
    erros.push("Imagem Background é um campo obrigatório");

  return erros;
};


export {validarEvento, complementarEvento, criarEventoVazio}