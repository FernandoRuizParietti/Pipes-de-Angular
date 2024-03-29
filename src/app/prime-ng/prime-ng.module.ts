import { NgModule } from '@angular/core';

//Aca importo los modulos de una cosa a la vez
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
 exports: [
  ButtonModule,
  CardModule,
  MenubarModule,
  FieldsetModule,
  ToolbarModule,
  TableModule
 ]
})
export class PrimeNGModule { }
