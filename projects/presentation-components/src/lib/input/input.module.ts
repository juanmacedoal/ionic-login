import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
