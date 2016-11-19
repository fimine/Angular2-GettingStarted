import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'ai-star',
      templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']

})
export class StarComponent implements OnChanges {
@Input() rating: number;
starWidth: number;
@Output() ratingClicked : EventEmitter<string>= new EventEmitter<string>();

    constructor() { }
    ngOnChanges() { this.starWidth = this.rating * 86 / 5;  }
    onClick(): void {
         console.log('emitted!');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
}

}
