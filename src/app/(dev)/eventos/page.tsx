  import QRCodeView from "@/components/QRCodeView";
import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
      {eventos.map((evento, index) => (
        <div
          key={evento.id}
          className="
        flex flex-col w-full
        bg-zinc-500 rounded-lg"
        >
          <div className="relative w-full h-44">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 p-7 gap-5 items-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <span className="text-sm flex-1 text-zinc-400 text-center">
              {evento.descricao}
            </span>
            <QRCodeView evento={evento} index={index} />
            <div className=" flex-1 flex gap-5">
              <Link
                className="flex-1 botao negative"
                href={`/evento/admin/${evento.id}/${evento.senha}`}
              >
                Admin
              </Link>
              <Link
                className="flex-1 botao positive"
                href={`/convite/${evento.alias}`}
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
