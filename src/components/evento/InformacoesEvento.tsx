import { Evento } from "@/core";
import React from "react";

export interface InformacoesEventoProps {
  evento: Evento;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  return <div>{props.evento.nome}</div>;
}
