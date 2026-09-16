import { trilha } from "./commands/trilha.js";
import { desafio } from "./commands/desafio.js";
import { certificado } from "./commands/certificado.js";

const [command, technology, level, ...rest] = process.argv.slice(2);

function help() {
  console.log(`
Geo-Explorer — trilhas, desafios e certificados

Comandos:
  npm start -- trilha <tecnologia> <nivel>
  npm start -- desafio <tecnologia> <nivel>
  npm start -- certificado <tecnologia> [nivel] [nome]

Exemplos:
  npm start -- trilha javascript iniciante
  npm start -- desafio python intermediario
  npm start -- certificado java avancado "João da Silva"
  `);
}

switch (command) {
  case "trilha":
    console.log(trilha(technology, level));
    break;
  case "desafio":
    console.log(desafio(technology, level));
    break;
  case "certificado":
    console.log(certificado(technology, level ?? "iniciante", rest.join(" ") || "Nome do aluno"));
    break;
  case undefined:
  case "help":
  case "--help":
  case "-h":
    help();
    break;
  default:
    console.error(`Comando desconhecido: ${command}`);
    help();
    process.exitCode = 1;
}
