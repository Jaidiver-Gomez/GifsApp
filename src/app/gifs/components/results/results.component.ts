import { Component } from '@angular/core';
import { GitsService } from '../../services/gits.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styles: []
})
export class ResultsComponent {
	get results(): Gif[] {
		return this.gifsSvc.results;
	}

	constructor(private gifsSvc: GitsService) {}
}
