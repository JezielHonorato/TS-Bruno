"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var disciplina_1 = require("./disciplina");
var estudante_1 = require("./estudante");
var boletim_1 = require("./boletim");
var registroNota_1 = require("./registroNota");
var mariadeDeus = new estudante_1.Estudante(2021112828283, 'Maria de Deus', curso_1.Curso.MECA);
var mariadeJesus = new estudante_1.Estudante(2021112828284, 'Maria de Jesus', curso_1.Curso.MECA);
var mariadoEspirito = new estudante_1.Estudante(2021112828285, 'Maria do Espirito', curso_1.Curso.MECA);
var mariadoDiabo = new estudante_1.Estudante(2021112828286, 'Maria do Diabo', curso_1.Curso.MECA);
mariadeDeus.alterarDataNascimento(1, 1, 2001);
mariadeJesus.alterarDataNascimento(2, 2, 2002);
mariadoEspirito.alterarDataNascimento(3, 3, 2003);
mariadoDiabo.alterarDataNascimento(4, 4, 2004);
mariadoDiabo.alterarNome("Maria Convertida");
var ppi = new disciplina_1.Disciplina(1, "Programação Para Internet", "PPI", "Bruno", 120);
var boletimMariaDeDeus = new boletim_1.Boletim(60, 60, 60, 60, undefined);
var registroNotaMariaDeDeus = new registroNota_1.RegistroNota(2021112828283, boletimMariaDeDeus);
if (ppi.matricularEstudante(mariadeDeus)) {
    console.log("Estudante matriculado(a)");
}
else {
    console.log("N\u00E3o matriculado(a)");
}
ppi.matricularEstudante(mariadeJesus);
ppi.matricularEstudante(mariadoEspirito);
ppi.matricularEstudante(mariadoDiabo);
ppi.adcionarRegistroNota(registroNotaMariaDeDeus);
console.log(ppi);
ppi.procurarEstudante(mariadeDeus);
ppi.obterRegistroNota(mariadeDeus.obterMatricula());
