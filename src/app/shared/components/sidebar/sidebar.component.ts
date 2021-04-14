import { Component } from '@angular/core';
import { GitsService } from '../../../gifs/services/gits.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: []
})
export class SidebarComponent {
	constructor(private gifsSvc: GitsService) {}

	get history(): string[] {
		return this.gifsSvc.history;
	}

	onSearch(item: string): void {
		this.gifsSvc.searchGifs(item);
	}
}
