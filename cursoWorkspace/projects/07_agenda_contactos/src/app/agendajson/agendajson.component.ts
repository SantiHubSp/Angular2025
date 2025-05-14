import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/contacto';

@Component({
  selector: 'app-agendajson',
  imports: [FormsModule],
  templateUrl: './agendajson.component.html',
  styleUrl: './agendajson.component.css'
})
export class AgendajsonComponent {

  nombre: string;
  email: string;
  telefono: string;
  agenda: Contacto[]=[];

  visible:boolean=false;

  guardar():void{
    //creamos un objeto con los datos del contacto
    let c=new Contacto(this.nombre, this.email, this.telefono);

    //añadimos el contacto al array
    this.agenda.push(c);
  }
  mostrar():void{
    this.visible=!this.visible;
  }
}
