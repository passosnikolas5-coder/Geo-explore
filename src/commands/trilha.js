import { findTrack, listTechnologies, listLevels } from "../utils.js";

export function trilha(technology, level) {
  if (!technology || !level) {
    return [
      "Uso: trilha <tecnologia> <nivel>",
      `Tecnologias disponíveis: ${listTechnologies().join(", ")}`,
      `Níveis disponíveis: ${listLevels().join(", ")}`
    ].join("\n");
  }

  const track = findTrack(technology, level);

  if (!track) {
    return `Trilha não encontrada para "${technology}" no nível "${level}".`;
  }

  const modules = track.modulos
    .map((module, index) => `${index + 1}. ${module}`)
    .join("\n");

  return [
    "========================================",
    "           GEO-EXPLORER | TRILHA",
    "========================================",
    "",
    `Tecnologia: ${track.tecnologia}`,
    `Nível: ${capitalize(track.nivel)}`,
    "",
    track.descricao,
    "",
    "Módulos:",
    modules,
    "",
    "Dica: avance módulo por módulo e pratique com pequenos projetos."
  ].join("\n");
}

export function trilhaData(technology, level) {
  return findTrack(technology, level);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
