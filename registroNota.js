"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroNota = void 0;
var RegistroNota = /** @class */ (function () {
    function RegistroNota(matricula, boletim) {
        this.matricula = matricula;
        this.boletim = boletim;
    }
    RegistroNota.prototype.obterMatricula = function () {
        return this.matricula;
    };
    RegistroNota.prototype.obterBoletim = function () {
        return this.boletim;
    };
    return RegistroNota;
}());
exports.RegistroNota = RegistroNota;
