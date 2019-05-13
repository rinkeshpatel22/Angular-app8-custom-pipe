import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent {

  public personList = [
    {name: 'Rinkesh', gender:'male'},
    {name: 'Radhika', gender:'female'},
    {name: 'Akash', gender:'male'},
    {name: 'Rahul', gender:'male'},
    {name: 'Disha', gender:'female'},
    {name: 'Rupal', gender:'female'}
  ];
}
