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
    exampleStatus: string;

    constructor() {
        setTimeout(() => {
            this.allowNewExample = true;
        }, 2000);
        this.exampleStatus = Math.random() > 0.5 ? 'on' : 'off';
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

    getExampleStatus() {
        return this.exampleStatus;
    }

    getColor() {
        return this.exampleStatus === 'on' ? 'green' : 'red';
    }
}
