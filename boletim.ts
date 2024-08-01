export class Boletim {
    private nota1:          number | undefined
    private nota2:          number | undefined
    private nota3:          number | undefined
    private nota4:          number | undefined
    private avaliacaoFinal: number | undefined
    private mediaParcial:   number | undefined
    private mediaFinal:     number | undefined
    private trancado:    boolean
    private transferido: boolean

    constructor(nota1: number | undefined, nota2: number | undefined, nota3: number | undefined, nota4:number | undefined, avaliacaoFinal: number | undefined, trancado: boolean = false, transferido: boolean = false){
        this.nota1 = nota1,
        this.nota2 = nota2,
        this.nota3 = nota3,
        this.nota4 = nota4,
        this.avaliacaoFinal = avaliacaoFinal,
        this.mediaParcial = undefined
        this.mediaFinal = undefined
        this.trancado = trancado
        this.transferido = transferido
    }

    alterarNota1 (nota: number) {
        this.nota1 = nota
    }
    alterarNota2 (nota: number) {
        this.nota2 = nota
    }
    alterarNota3 (nota: number) {
        this.nota3 = nota
    }
    alterarNota4 (nota: number) {
        this.nota4 = nota
    }

    alterarNotaAvaliacaoFinal (nota: number) {
        this.avaliacaoFinal = nota
    }

    calcularMediaParcial () {
        if(this.nota1 == undefined || this.nota2 == undefined || this.nota3 == undefined || this.nota4 == undefined) {
            return false
        }
        this.mediaParcial = (this.nota1 * 2 + this.nota2 * 2 + this.nota3 * 3 + this.nota4 * 3) / 10
    }

    calcularMediaFinal () {
        if(this.mediaParcial == undefined || this.avaliacaoFinal == undefined) {
            return false
        }
        this.mediaFinal = (this.mediaParcial + this.avaliacaoFinal) / 2
    }

    situacaoEstudante(): string {
        if (this.trancado) {
            return 'Trancado'
        } else if (this.transferido) {
            return 'Transferido'
        } else if (this.calcularMediaFinal()) {
            if (this.mediaFinal) {
                if (this.mediaFinal < 60 ) {
                    return 'Reprovado'
                } else {
                    return 'Aporvado'
                }
            }
        } else if (this.calcularMediaParcial()) {
            if (this.mediaParcial) {
                if (this.mediaParcial >= 60) {
                    return 'Aprovado'
                } else if (this.mediaParcial < 10 ) {
                    return 'Reprovado'
                } else {
                    return 'Prova Final'
                }
            }
        }
        return 'Cursando'
    }

    transferirEstudante (transferido:boolean) {
        this.transferido = transferido
    }

    trancarEstudante (trancado:boolean) {
        this.trancado = trancado
    }
}