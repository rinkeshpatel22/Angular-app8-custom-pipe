import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPipeComponent } from './demo-pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [DemoPipeComponent, CustomPipePipe],
  exports: [DemoPipeComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
