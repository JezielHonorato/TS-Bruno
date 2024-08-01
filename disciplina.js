"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(id, nome, sigla, docente, cargaHoraria, maxEstudantes) {
        if (maxEstudantes === void 0) { maxEstudantes = 45; }
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
        this.docente = docente;
        this.cargaHoraria = cargaHoraria;
        this.matriculados = [];
        this.registroNota = [];
        this.maxEstudantes = maxEstudantes;
    }
    Disciplina.prototype.procurarEstudante = function (est) {
        for (var pos = 0; pos < this.matriculados.length; pos++) {
            if (this.matriculados[pos].obterMatricula() == est.obterMatricula()) {
                return this.matriculados[pos];
            }
        }
        return undefined;
    };
    Disciplina.prototype.estaMatriculado = function (est) {
        var matriculado = this.procurarEstudante(est);
        if (matriculado) {
            return true;
        }
        return false;
    };
    //Ainda tem vaga para matricular
    Disciplina.prototype.temVaga = function () {
        if (this.matriculados.length < this.maxEstudantes) {
            return true;
        }
        return false;
    };
    Disciplina.prototype.matricularEstudante = function (est) {
        if (est && !this.estaMatriculado(est) && this.temVaga()) {
            this.matriculados.push(est);
            return true;
        }
        return false;
    };
    Disciplina.prototype.verificarRegistroNota = function (novoRegistroNota) {
        for (var count = 0; count < this.registroNota.length; count++) {
            if (this.registroNota[count].obterMatricula() == novoRegistroNota.obterMatricula()) {
                return this.registroNota[count];
            }
            return undefined;
        }
    };
    Disciplina.prototype.obterRegistroNota = function (matricula) {
        for (var count = 0; count < this.registroNota.length; count++) {
            if (this.registroNota[count].obterMatricula() == matricula) {
                return this.registroNota[count];
            }
            return undefined;
        }
    };
    Disciplina.prototype.obterRegistroNotaCompleto = function () {
        return this.registroNota;
    };
    Disciplina.prototype.adcionarRegistroNota = function (registroNota) {
        if (registroNota && !this.verificarRegistroNota(registroNota)) {
            this.registroNota.push(registroNota);
            return true;
        }
        return false;
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
