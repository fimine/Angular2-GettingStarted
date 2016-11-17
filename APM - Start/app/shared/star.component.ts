import { Component, Input, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html'
})
export class StarComponent implements OnChanges {
@Input() rating: number;
starWidth: number;

    constructor() { }
    ngOnChanges() { this.starWidth = this.rating * 86 / 5;  }
}
