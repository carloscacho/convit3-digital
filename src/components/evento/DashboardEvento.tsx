import { Convidado, Evento } from "core";
import React from "react";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  confirmados: Convidado[];
  ausentes: Convidado[];
  totalPessoas: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de Convidados: "
          valor={props.evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Presenças confirmada: "
          valor={props.confirmados.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          texto="total confirmados: "
          valor={props.totalPessoas}
          imagem="/icones/acompanhantes.svg"
        />
      </div>
      <div className="flex flex-1 flex-col mt-12">
        <button className="botao primary  self-end">
          <span>Atualizar Lista de Convidados</span>
        </button>
        <span className="flex py-2 text-xl font-bold text-white/80">
          Convidados que Confirmaram PRESENÇA
        </span>
        <ListaConvidados convidados={props.confirmados} />
      </div>
      <div>
        <span className="flex py-2 text-xl font-bold text-white/80">
          Convidados que NÃO Confirmaram PRESENÇA
        </span>
        <ListaConvidados convidados={props.ausentes} />
      </div>
    </div>
  );
}
