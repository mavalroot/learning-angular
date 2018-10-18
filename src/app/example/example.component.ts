import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  example1: number = 5;
  example2: string = 'how are you';

  getExample1() {
      return this.example1;
  }
}
