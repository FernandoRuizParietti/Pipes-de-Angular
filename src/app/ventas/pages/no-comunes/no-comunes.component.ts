import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

//i18nSelect
  nombre: string = 'Susana'
  genero: string ='femenino'
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria', 'Pepe', 'Juan', 'Osvaldo', 'Lucia']

  clientesMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarGenero1(){
    this.nombre = 'Fernando'
    this.genero= 'masculino'
  }

  cambiarGenero2(){
    this.nombre = 'Susana'
    this.genero= 'femenino'
  }

  borrarCliente(){
     this.clientes.pop()
  }
  reset(){
    this.clientes= ['Maria', 'Pepe', 'Juan', 'Osvaldo', 'Lucia']
 }


 //keyValue Pipe

 persona={
    nombre: 'Fernando',
    edad:35,
    direccion: 'Ottawa, Canadá'
 }

 //Json Pipe

 heroes =[
   {
     nombre: 'Superman',
     vuela: true
   },
   {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
 ]

 //Async Pipe

 miObservable = interval(1000) //0,1,2,3,...  1000ms c/u

 //el pipe async se subscribe internamente al 
 //observable y nos permite mostrarlo en el HTML

 //Async Pipe, tambien se puede usar para promesas

 valorPromesa = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve ('Tenemos data de la Promesa')
   },3500)
 })

}
