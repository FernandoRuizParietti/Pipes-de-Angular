import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string , enMayusculas: boolean = true):string {

       /*  if(enMayusculas){
            return valor.toUpperCase()
        }else{
            return valor.toLowerCase()
        } */

       // reemplazo la logica del if por un ternario.

       return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()
    }

}