import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

nombreLower: string= 'fernando'
nombreUpper: string= 'FERNANDO'
nombreCompleto: string= 'fErNaNdO RuIZ'


fecha: Date = new Date() //el dia de hoy


}
