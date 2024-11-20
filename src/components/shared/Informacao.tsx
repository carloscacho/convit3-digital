import React from "react";

export interface InformacaoProps {
  label: string;
  children: any;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex-1 flex flex-col items-center border border-zinc-800 px-6 py-4 rounded-md">
      <span className="text-zinc-300 font-bold">{props.label}</span>
      <div className="text-xl">{props.children}</div>
    </div>
  );
}
