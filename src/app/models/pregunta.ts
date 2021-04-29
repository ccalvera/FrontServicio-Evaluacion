import { RespuestasPosiblesDto } from "./RespuestasPosiblesDto";

export class Pregunta{
    id?: number;
    descripcion: string;
    imagen: string;
    valoracion: number;
    tipoPregunta: number;
    idPrueba: number;
    rUnicaCorrecta: number;
    rUnicaEstudiante: number;
    respuestasPosiblesDto: RespuestasPosiblesDto[];
    respuestasMultiplesEstudiante: string;
    respuestasMultiplesCorrectas: string;
    respuestaAbierta: string;
    rAbiertaCorrecta: boolean;

    constructor(descripcion: string = null, imagen: string = null, valoracion: number = null, tipoPregunta: number = null,
        idPrueba: number = null, rUnicaCorrecta: number = null, rUnicaEstudiante: number = null,
        respuestasPosiblesDto: RespuestasPosiblesDto[] = null, respuestasMultiplesEstudiante: string = null,
        respuestasMultiplesCorrectas: string = null, respuestaAbierta: string = null, rAbiertaCorrecta: boolean = false){   
    }

}