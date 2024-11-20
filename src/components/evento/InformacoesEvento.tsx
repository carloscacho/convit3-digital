import { Evento, eventos } from "@/core";
import React from "react";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  return (
    <div className={`flex flex-col mb-2 gap-2 ${props.className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border-zinc-800 px-6 py-2 rounded">
        <span className="text-2xl font-black">{props.evento.alias}</span>
        <span className="text-xl text-zinc-300">{props.evento.nome}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data: ">
          <span>
            {new Date(props.evento.data!).toLocaleDateString()}
            {" às "}
            {new Date(props.evento.data!).toLocaleTimeString()}
          </span>
        </Informacao>
        <Informacao label="Local: ">
          <span>{props.evento.local}</span>
        </Informacao>
      </div>
      <Informacao label="Descrição: ">
        <span>{props.evento.descricao}</span>
      </Informacao>
    </div>
  );
}
