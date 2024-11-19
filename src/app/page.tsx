import Logo from "@/components/template/Logo";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="
    h-screen flex flex-col justify-center items-center gap-10
    bg-cover bgImgInicio
    "
    >
      <div className="flex flex-col items-center gap-5">
        <Logo size="100" />
        <p className="text-gray-500 font-light w-96 leading-6">
          crie convites para seu evento de forma rápida e fácil. faça o
          gerenciamento dos convites sem complicações
        </p>
      </div>
      <Link className="botao primary text-lg uppercase" href="/evento">
        Crie seu evento
      </Link>
    </div>
  );
}
