"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boletim = void 0;
var Boletim = /** @class */ (function () {
    function Boletim(nota1, nota2, nota3, nota4, avaliacaoFinal, trancado, transferido) {
        if (trancado === void 0) { trancado = false; }
        if (transferido === void 0) { transferido = false; }
        this.nota1 = nota1,
            this.nota2 = nota2,
            this.nota3 = nota3,
            this.nota4 = nota4,
            this.avaliacaoFinal = avaliacaoFinal,
            this.mediaParcial = undefined;
        this.mediaFinal = undefined;
        this.trancado = trancado;
        this.transferido = transferido;
    }
    Boletim.prototype.alterarNota1 = function (nota) {
        this.nota1 = nota;
    };
    Boletim.prototype.alterarNota2 = function (nota) {
        this.nota2 = nota;
    };
    Boletim.prototype.alterarNota3 = function (nota) {
        this.nota3 = nota;
    };
    Boletim.prototype.alterarNota4 = function (nota) {
        this.nota4 = nota;
    };
    Boletim.prototype.alterarNotaAvaliacaoFinal = function (nota) {
        this.avaliacaoFinal = nota;
    };
    Boletim.prototype.calcularMediaParcial = function () {
        if (this.nota1 == undefined || this.nota2 == undefined || this.nota3 == undefined || this.nota4 == undefined) {
            return false;
        }
        this.mediaParcial = (this.nota1 * 2 + this.nota2 * 2 + this.nota3 * 3 + this.nota4 * 3) / 10;
    };
    Boletim.prototype.calcularMediaFinal = function () {
        if (this.mediaParcial == undefined || this.avaliacaoFinal == undefined) {
            return false;
        }
        this.mediaFinal = (this.mediaParcial + this.avaliacaoFinal) / 2;
    };
    Boletim.prototype.situacaoEstudante = function () {
        if (this.trancado) {
            return 'Trancado';
        }
        else if (this.transferido) {
            return 'Transferido';
        }
        else if (this.calcularMediaFinal()) {
            if (this.mediaFinal) {
                if (this.mediaFinal < 60) {
                    return 'Reprovado';
                }
                else {
                    return 'Aporvado';
                }
            }
        }
        else if (this.calcularMediaParcial()) {
            if (this.mediaParcial) {
                if (this.mediaParcial >= 60) {
                    return 'Aprovado';
                }
                else if (this.mediaParcial < 10) {
                    return 'Reprovado';
                }
                else {
                    return 'Prova Final';
                }
            }
        }
        return 'Cursando';
    };
    Boletim.prototype.transferirEstudante = function (transferido) {
        this.transferido = transferido;
    };
    Boletim.prototype.trancarEstudante = function (trancado) {
        this.trancado = trancado;
    };
    return Boletim;
}());
exports.Boletim = Boletim;
