"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
var curso_1 = require("./curso");
var Estudante = /** @class */ (function () {
    function Estudante(matricula, nome, curso) {
        if (curso === void 0) { curso = curso_1.Curso.INFO; }
        this.matricula = matricula;
        this.nome = nome;
        this.dataNascimento = new Date();
        this.curso = curso;
    }
    Estudante.prototype.alterarDataNascimento = function (dia, mes, ano) {
        this.dataNascimento = new Date(ano, mes - 1, dia);
    };
    Estudante.prototype.alterarMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Estudante.prototype.alterarNome = function (nome) {
        this.nome = nome;
    };
    Estudante.prototype.obterDataNascimento = function () {
        return this.dataNascimento.toLocaleDateString();
    };
    Estudante.prototype.obterMatricula = function () {
        return this.matricula;
    };
    Estudante.prototype.obterNome = function () {
        return this.nome;
    };
    return Estudante;
}());
exports.Estudante = Estudante;
var clara = new Estudante(2021112828283, 'Maria Clara');
clara.alterarDataNascimento(9, 11, 2004);
console.log(clara.obterDataNascimento());
