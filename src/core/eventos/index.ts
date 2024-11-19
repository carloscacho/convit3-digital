import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import {
  criarConvidadoVazio,
  complementarConvidado,
} from "./functions/convidadoCtrl";
import { criarEventoVazio, complementarEvento } from "./functions/eventoCtrl";

export type { Evento, Convidado };
export {
  criarConvidadoVazio,
  complementarConvidado,
  criarEventoVazio,
  complementarEvento,
};
