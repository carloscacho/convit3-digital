"use client";
import { Evento } from "@/core";
import React from "react";
import QRCode from "react-qr-code";

interface propsQRCodeView {
  evento: Partial<Evento>;
  index: number;
}

export default function QRCodeView(props: propsQRCodeView) {
  const { evento, index } = props;

  const [isVisibleQrPos, setVisibleQrPos] = React.useState(-1);

  function toggleVisible(index: number) {
    if (isVisibleQrPos == index) {
      setVisibleQrPos(-1);
    } else {
      setVisibleQrPos(index);
    }
  }

  return (
    <div className="flex flex-col flex-1 p-7 gap-5 items-center">
      <button onClick={() => toggleVisible(index)} className="botao primary">
        {isVisibleQrPos == index ? "Ocultar QrCode" : "Mostrar QrCode"}
      </button>
      <div className={isVisibleQrPos == index ? "" : "hidden"}>
        <QRCode
          value={JSON.stringify({ id: evento.id, senha: evento.senha })}
          className="w-44 h-44"
        />
      </div>
    </div>
  );
}
