export class Prueba{
    id?: number;
    descripcion: string;
    notaMaxima: number;
    codigoEstudiante: number;
    nombreEstudiante: string;
    nota: number;

    constructor(descripcion: string = null, notaMaxima: number = null, codigoEstudiante: number = null,
        nombreEstudiante: string = null, nota: number = null){
        this.descripcion = descripcion;
        this.notaMaxima = notaMaxima;
        this.codigoEstudiante = codigoEstudiante;
        this.nombreEstudiante = nombreEstudiante;
        this.nota = nota;
    }

}