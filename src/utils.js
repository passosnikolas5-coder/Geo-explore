import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const projectRoot = path.resolve(__dirname, "..");

export function loadTracks() {
  const filePath = path.join(projectRoot, "data", "tracks.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function normalize(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function findTrack(technology, level) {
  const tracks = loadTracks();
  const techKey = normalize(technology);
  const levelKey = normalize(level);

  const aliases = {
    javascript: "javascript",
    js: "javascript",
    python: "python",
    py: "python",
    java: "java"
  };

  const tech = aliases[techKey] ?? techKey;
  const track = tracks[tech];

  if (!track) return null;

  const levelAliases = {
    iniciante: "iniciante",
    beginner: "iniciante",
    intermediario: "intermediario",
    intermediate: "intermediario",
    avancado: "avancado",
    advanced: "avancado"
  };

  const normalizedLevel = levelAliases[levelKey] ?? levelKey;
  const levelData = track.niveis[normalizedLevel];

  if (!levelData) return null;

  return {
    tecnologia: track.nome,
    tecnologiaId: tech,
    descricao: track.descricao,
    nivel: normalizedLevel,
    ...levelData
  };
}

export function listTechnologies() {
  return Object.values(loadTracks()).map((track) => track.nome);
}

export function listLevels() {
  return ["iniciante", "intermediario", "avancado"];
}
