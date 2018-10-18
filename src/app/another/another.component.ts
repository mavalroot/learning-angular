import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-another',
    templateUrl: './another.component.html',
    styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

    showDetails = false;
    logItems = [];

    constructor() { }

    ngOnInit() {
    }

    displayDetails() {
        this.showDetails = !this.showDetails;
        this.logItems.push(new Date());
    }

}
