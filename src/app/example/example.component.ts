import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent {

    allowNewExample = false;
    exampleCreationStatus = 'No example was created!';
    exampleName = '';
    exampleCreated = false;

    constructor() {
        setTimeout(() => {
            this.allowNewExample = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateExample() {
        this.exampleCreated = true;
        this.exampleCreationStatus = 'Example was created! Name is ' + this.exampleName
    }

    onUpdateExampleName(event: Event) {
        this.exampleName = (<HTMLInputElement>event.target).value;
    }
}
