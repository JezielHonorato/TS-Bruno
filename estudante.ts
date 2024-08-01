import { Curso } from "./curso"

export class Estudante {
    private matricula: number
    private nome: string
    private dataNascimento: Date
    private curso: Curso

    constructor(matricula: number, nome: string, curso: Curso = Curso.INFO) {
        this.matricula = matricula
        this.nome = nome
        this.dataNascimento = new Date()
        this.curso = curso
    }

    alterarDataNascimento(dia: number, mes: number, ano: number) {
        this.dataNascimento = new Date(ano, mes -1, dia)
    }
    alterarMatricula(matricula: number) {
        this.matricula = matricula
    }
    alterarNome(nome: string) {
        this.nome = nome
    }
    obterDataNascimento(): string {
        return this.dataNascimento.toLocaleDateString()
    }
    obterMatricula(): number {
        return this.matricula
    }
    obterNome(): string {
        return this.nome
    }
}

let clara = new Estudante(2021112828283, 'Maria Clara')
clara.alterarDataNascimento(9, 11, 2004)
console.log(clara.obterDataNascimento())