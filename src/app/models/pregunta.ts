import { RespuestasPosiblesDto } from "./RespuestasPosiblesDto";

export class Pregunta{
    id?: number;
    descripcion: string;
    imagen: string;
    valoracion: number;
    tipoPregunta: number;
    idPrueba: number;
    |

    constructor(descripcion: string = null, imagen: string = null, valoracion: number = null, tipoPregunta: number = null,
        idPrueba: number = null, rUnicaCorrecta: number = null, rUnicaEstudiante: number = null,
        respuestasPosiblesDto: RespuestasPosiblesDto[] = null, respuestasMultiplesEstudiante: string = null,
        respuestasMultiplesCorrectas: string = null, respuestaAbierta: string = null, rAbiertaCorrecta: boolean = false){   
    }

}