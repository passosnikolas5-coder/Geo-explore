import { findTrack } from "../utils.js";

export function certificado(technology, level = "iniciante", student = "Nome do aluno") {
  if (!technology) {
    return "Uso: certificado <tecnologia> [nivel] [nome]";
  }

  const track = findTrack(technology, level);

  if (!track) {
    return `Não foi possível gerar certificado para "${technology}" no nível "${level}".`;
  }

  const date = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date());

  return [
    "╔══════════════════════════════════════════════╗",
    "║         CERTIFICADO GEO-EXPLORER            ║",
    "╚══════════════════════════════════════════════╝",
    "",
    `Certificamos que ${student}`,
    "",
    "concluiu a trilha de aprendizagem",
    "",
    `              ${track.tecnologia.toUpperCase()}`,
    `              Nível: ${track.nivel}`,
    "",
    `Data de emissão: ${date}`,
    "Código: GEO-" + createCode(track.tecnologiaId, track.nivel),
    "",
    "Certificado fictício para fins educacionais.",
    "",
    "                GEO-EXPLORER"
  ].join("\n");
}

function createCode(technology, level) {
  const base = `${technology}-${level}-${new Date().toISOString().slice(0, 10)}`;
  let hash = 0;
  for (const char of base) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash.toString(16).toUpperCase().padStart(8, "0");
}
