import { Estudante } from "./estudante"
import { RegistroNota } from "./registroNota";

export class Disciplina {
    private id: number
    private nome: string
    private sigla: string
    private docente: string
    private cargaHoraria: number
    private matriculados: Estudante[]
    private registroNota: RegistroNota[]
    private maxEstudantes: number; //quantidade máxima
    constructor(id: number, nome: string, sigla: string, docente: string, cargaHoraria: number, maxEstudantes: number = 45) {
        this.id = id
        this.nome = nome
        this.sigla = sigla 
        this.docente = docente
        this.cargaHoraria = cargaHoraria
        this.matriculados = []
        this.registroNota = []
        this.maxEstudantes = maxEstudantes
    }
    procurarEstudante(est: Estudante): Estudante | undefined {
        for (let pos = 0; pos < this.matriculados.length; pos++) {
            if (this.matriculados[pos].obterMatricula() == est.obterMatricula()) { 
                return this.matriculados[pos] 
            }
        }
        return undefined
    }
    estaMatriculado(est: Estudante): boolean {
        let matriculado = this.procurarEstudante(est)
        if (matriculado){
            return true
        }
        return false       
    }
    //Ainda tem vaga para matricular
    temVaga(): boolean {
        if (this.matriculados.length < this.maxEstudantes) { 
            return true
        }
        return false
    }
    matricularEstudante(est: Estudante): boolean {
        if (est && !this.estaMatriculado(est) && this.temVaga()) { 
            this.matriculados.push(est) 
            return true
        }
        return false
    }

    verificarRegistroNota (novoRegistroNota: RegistroNota): RegistroNota | undefined {
        for (let count = 0; count < this.registroNota.length; count++) {
            if (this.registroNota[count].obterMatricula() == novoRegistroNota.obterMatricula()) { 
                return this.registroNota[count]
            }
            return undefined
        }
    }
    obterRegistroNota(matricula: number): RegistroNota | undefined {
        for (let count = 0; count < this.registroNota.length; count++) {
            if (this.registroNota[count].obterMatricula() == matricula) { 
                return this.registroNota[count]
            }
            return undefined
        }
    }
    obterRegistroNotaCompleto () {
        return this.registroNota
    }
    adcionarRegistroNota(registroNota: RegistroNota): boolean {
        if (registroNota && !this.verificarRegistroNota(registroNota)) { 
            this.registroNota.push(registroNota) 
            return true
        }
        return false
    }
}