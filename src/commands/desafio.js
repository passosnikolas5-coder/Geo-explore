import { findTrack } from "../utils.js";

export function desafio(technology, level) {
  if (!technology || !level) {
    return "Uso: desafio <tecnologia> <nivel>";
  }

  const track = findTrack(technology, level);

  if (!track) {
    return `Não foi possível gerar um desafio para "${technology}" no nível "${level}".`;
  }

  const requirements = track.desafio.requisitos
    .map((item) => `- ${item}`)
    .join("\n");

  return [
    "========================================",
    "          GEO-EXPLORER | DESAFIO",
    "========================================",
    "",
    `Tecnologia: ${track.tecnologia}`,
    `Nível: ${capitalize(track.nivel)}`,
    `Título: ${track.desafio.titulo}`,
    "",
    "Enunciado:",
    track.desafio.enunciado,
    "",
    "Requisitos:",
    requirements,
    "",
    "Entrega sugerida: publique sua solução em um repositório Git e documente as decisões tomadas."
  ].join("\n");
}

function capitalize(value) {
  const labels = {
    iniciante: "Iniciante",
    intermediario: "Intermediário",
    avancado: "Avançado"
  };
  return labels[value] ?? (value.charAt(0).toUpperCase() + value.slice(1));
}
