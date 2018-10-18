import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent {

    allowNewExample = false;
    exampleCreationStatus = 'No example was created!';

    example1: number = 5;
    example2: string = 'how are you';
    exampleName: string = 'example';

    constructor() {
        setTimeout(() => {
            this.allowNewExample = true;
        }, 2000);
    }

    ngOnInit() {
    }

    getExample1() {
        return this.example1;
    }

    onCreateExample() {
        this.exampleCreationStatus = 'Example was created! Name is ' + this.exampleName
    }

    onUpdateExampleName(event: Event) {
        this.exampleName = (<HTMLInputElement>event.target).value;
    }
}
