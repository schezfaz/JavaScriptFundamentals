import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(): void{
        this.starWidth = this.rating*12;
    }

    onClick(): void{
        console.log(`the rating ${this.rating} was clicked`);
    }
}