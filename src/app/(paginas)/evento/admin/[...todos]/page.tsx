"use client";
import { Convidado, Evento, eventos } from "@/core";
import { use, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params);

  const id = params.todos[0];
  // const senha = params.todos[1];
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);
  const [evento, setEvento] = useState<Evento | null>(null);

  const confimardos = evento?.convidados.filter(c => c.confirmado) ?? []
  const ausentes = evento?.convidados.filter(c => !c.confirmado).length ?? 0
  
  const totalPessoas = evento?.convidados.reduce(
    (total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1
  },0)

  function carregarEvento() {
    const e = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(e ?? null);
  }

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  return evento ? (
    <div>
      <p>{evento.nome}</p>
      <p>{evento.descricao}</p>
    </div>
  ) : (
    <p>Evento não encontrado</p>
  );
}
