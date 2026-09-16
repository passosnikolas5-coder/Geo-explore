import test from "node:test";
import assert from "node:assert/strict";
import { certificado } from "../src/commands/certificado.js";

test("gera certificado fictício", () => {
  const result = certificado("java", "avancado", "Maria Silva");
  assert.match(result, /CERTIFICADO GEO-EXPLORER/);
  assert.match(result, /Maria Silva/);
  assert.match(result, /JAVA/);
  assert.match(result, /Certificado fictício/);
});

test("usa nível iniciante por padrão", () => {
  const result = certificado("python");
  assert.match(result, /python/i);
  assert.match(result, /iniciante/i);
});

test("retorna uso quando tecnologia não é informada", () => {
  assert.equal(certificado(), "Uso: certificado <tecnologia> [nivel] [nome]");
});
