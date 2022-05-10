import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(valor: string):string {
       return (valor) ? 'si' : 'no' //si vuela === true retorno 'si' de lo contrario retorno 'no'
    }

}