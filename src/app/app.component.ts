import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'prova';
  myname:string="cristian";
  eta:number=28;
  corsi:any[]=[
    {
      titolo:"HTML",
      docente:"Daniele",
      durata:36,
      costo:600,
      fatto:true
    },
    {
      titolo:"Javascript base",
      docente:"Domenico",
      durata:42,
      costo:800,
      fatto:true
    },
    {
      titolo:"Responsive",
      docente:"Gaia",
      durata:30,
      costo:800,
      fatto:true
    },
    {
      titolo:"Javascript avanzato",
      docente:"Matteo",
      durata:42,
      costo:600,
      fatto:true
    },
    {
      titolo:"Angular",
      docente:"Matteo",
      durata:36,
      costo:1300,
      fatto:false
    }




  ]
}
