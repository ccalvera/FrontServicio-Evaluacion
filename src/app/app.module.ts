import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { CrearPruebaComponent } from './components/crear-prueba/crear-prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


const routes: Routes = [
  { path: '', component: CrearPruebaComponent },
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    PreguntaComponent,
    CrearPruebaComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    PanelModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    FormsModule,
    MessagesModule,
    ConfirmDialogModule,
    MessageModule,
    MenubarModule,
    MenuModule

  ],
  exports: [RouterModule],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
