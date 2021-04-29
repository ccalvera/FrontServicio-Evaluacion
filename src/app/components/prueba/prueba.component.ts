import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Prueba } from 'src/app/models/prueba';
import { PruebaService } from 'src/app/services/prueba.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  pruebas: Prueba[];
  preguntas: Pregunta[];

  items: MenuItem[];
  itemsQuestion: MenuItem[];
  cols: any[];
  displaySaveDialog: boolean = false;
  displayQuestionDialog: boolean = false;
  prueba: Prueba = {
    id: null,
    descripcion: null,
    notaMaxima: null,
    codigoEstudiante: null,
    nombreEstudiante: null,
    nota: null
  };
  pregunta: Pregunta ={
    id: null,
    descripcion: null,
    imagen: null,
    valoracion: null,
    tipoPregunta: null,
    idPrueba: null,
    rUnicaCorrecta: null,
    rUnicaEstudiante: null,
    respuestasPosiblesDto: null,
    respuestasMultiplesEstudiante: null,
    respuestasMultiplesCorrectas: null,
    respuestaAbierta: null,
    rAbiertaCorrecta: false
  };

  constructor(private pruebaService: PruebaService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private preguntaService: PreguntaService) { }

  getAll() {
    this.pruebaService.getAll().subscribe(
      (result: any) => {
        let pruebas: Prueba[] = [];
        for (let i = 0; i < result.length; i++) {
          let prueba = result[i] as Prueba;
          pruebas.push(prueba);
        }
        this.pruebas = pruebas;
      },
      error => {
        console.log(error);
      }
    )
  }

  saveTest() {
    this.pruebaService.saveTest(this.prueba).subscribe(
      (result: any) => {
        let prueba = result as Prueba;
        this.validateTest(prueba);
        this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se guardó la prueba correctamente" });
        this.displaySaveDialog = false;
        this.getAll();
      },
      error => {
        console.log(error);
      }
    );
  }

  validateTest(prueba: Prueba) {
    let index = this.pruebas.findIndex((e) => e.id == prueba.id);
    if (index != -1) {
      this.pruebas[index] = prueba;
    } else {
      this.pruebas.push(prueba);
    }
  }

  deleteTest() {
    if (this.selectedPrueba == null || this.selectedPrueba.id == null) {
      this.messageService.add({ severity: 'warn', summary: "Advertencia", detail: "Por favor seleccione una prueba" });
      return;
    }
    this.confirmationService.confirm({
      message: "¿Está seguro que desea eliminar la Prueba?",
      accept: () => {
        this.pruebaService.deleteTest(this.selectedPrueba.id).subscribe(
          (result: any) => {
            this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se eliminó la prueba número " + result.id + " correctamente" });
            this.deletObject(result.id);
            this.getAll();
          }
        )
      }
    })
  }

  saveQuestion(){
    this.preguntaService.saveQuestion(this.pregunta)



    this.pruebaService.saveTest(this.prueba).subscribe(
      (result: any) => {
        let prueba = result as Prueba;
        this.validateTest(prueba);
        this.messageService.add({ severity: 'success', summary: "Resultado", detail: "Se guardó la prueba correctamente" });
        this.displaySaveDialog = false;
        this.getAll();
      },
      error => {
        console.log(error);
      }
    );
  }

  deletObject(id: number) {
    let index = this.pruebas.findIndex((e) => e.id == id);
    if (index != -1) {
      this.pruebas.splice(index, 1);
    }
  }

  setItems() {
    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => this.showSaveDialog(true)
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-times',
        command: () => this.deleteTest()
      },
      {
        label: 'Inicio',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }

  setItemsQuestion() {
    this.itemsQuestion = [
      {
        label: 'Nueva Pregunta',
        icon: 'pi pi-plus-circle',
        command: () =>this.saveQuestion()
      },
      {
        label: 'Editar',
        icon: 'pi pi-pencil'

      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash'
      }
    ];
  }

  showQuestions() {
    if (this.selectedPrueba != null && this.selectedPrueba.id != null) {

    } else {
      this.messageService.add({ severity: 'warn', summary: "Advertencia", detail: "Por favor seleccione una prueba" });
      return;
    }
  }

  showSaveDialog(editar: boolean) {
    if (editar) {
      if (this.selectedPrueba != null && this.selectedPrueba.id != null) {
        this.prueba = this.selectedPrueba;
      } else {
        this.messageService.add({ severity: 'warn', summary: "Advertencia", detail: "Por favor seleccione una prueba" });
        return;
      }
    } else {
      this.prueba = new Prueba();
    }
    this.displaySaveDialog = true;
  }

  showQuestionsDialog() {
    if (this.selectedPrueba != null && this.selectedPrueba.id != null) {

    } else {
      this.messageService.add({ severity: 'warn', summary: "Advertencia", detail: "Por favor seleccione una prueba" });
      return;
    }
    this.displayQuestionDialog = true;
  }

  selectedPrueba: Prueba = {
    id: null,
    descripcion: null,
    notaMaxima: null,
    codigoEstudiante: null,
    nombreEstudiante: null,
    nota: null
  };


  ngOnInit(): void {
    this.setItems();
    this.setItemsQuestion();
    this.getAll();
    this.cols = [
      { field: "id", header: "ID" },
      { field: "descripcion", header: "Descripción" },
      { field: "notaMaxima", header: "Nota Maxima" },
      { field: "codigoEstudiante", header: "Codigo Estudiante" },
      { field: "nombreEstudiante", header: "Nombre Estudiante" },
      { field: "nota", header: "Nota Final" },
    ];

  }

}
