import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../../services/gits.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent {
	@ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

	constructor(private gifsSvc: GitsService) {}

	onSearch(): void {
		const value = this.searchInput.nativeElement.value;

		if (value.trim().length === 0) {
			return;
		}

		this.gifsSvc.searchGifs(value);
		this.searchInput.nativeElement.value = '';
	}
}
