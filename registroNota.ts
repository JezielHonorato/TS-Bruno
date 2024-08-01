import { Boletim } from "./boletim";

export class RegistroNota {
    private matricula: number
    private boletim: Boletim

    constructor (matricula: number, boletim: Boletim) {
        this.matricula = matricula
        this.boletim = boletim
    }

    obterMatricula(): number {
        return this.matricula
    }
    obterBoletim(): Boletim {
        return this.boletim
    }
}

