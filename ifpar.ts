import { Curso } from "./curso";
import { Disciplina } from "./disciplina";
import { Estudante } from "./estudante";
import { Boletim } from "./boletim";
import { RegistroNota } from "./registroNota";

let mariadeDeus = new Estudante (2021112828283, 'Maria de Deus', Curso.MECA)
let mariadeJesus = new Estudante (2021112828284, 'Maria de Jesus', Curso.MECA)
let mariadoEspirito = new Estudante (2021112828285, 'Maria do Espirito', Curso.MECA)
let mariadoDiabo = new Estudante (2021112828286, 'Maria do Diabo', Curso.MECA)

mariadeDeus.alterarDataNascimento(1, 1, 2001)
mariadeJesus.alterarDataNascimento(2, 2, 2002)
mariadoEspirito.alterarDataNascimento(3, 3, 2003)
mariadoDiabo.alterarDataNascimento(4, 4, 2004)

mariadoDiabo.alterarNome("Maria Convertida")

let ppi = new Disciplina(1, "Programação Para Internet", "PPI", "Bruno", 120)

let boletimMariaDeDeus = new Boletim (60, 60, 60, 60, undefined)
let registroNotaMariaDeDeus = new RegistroNota (2021112828283, boletimMariaDeDeus)

if (ppi.matricularEstudante(mariadeDeus)) {
    console.log(`Estudante matriculado(a)`)
} else {
    console.log(`Não matriculado(a)`)
}

ppi.matricularEstudante(mariadeJesus)
ppi.matricularEstudante(mariadoEspirito)
ppi.matricularEstudante(mariadoDiabo)

ppi.adcionarRegistroNota(registroNotaMariaDeDeus)

console.log(ppi)

ppi.procurarEstudante(mariadeDeus)
ppi.obterRegistroNota(mariadeDeus.obterMatricula())