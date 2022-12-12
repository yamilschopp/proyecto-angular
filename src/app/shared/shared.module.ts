import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ConvertirBooleanoPipe } from './pipe/convertir-booleano.pipe';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ConvertirBooleanoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,

  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ConvertirBooleanoPipe,
  ]

})
export class SharedModule { }
