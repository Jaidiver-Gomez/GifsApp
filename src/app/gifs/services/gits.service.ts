import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
	providedIn: 'root'
})
export class GitsService {
	constructor(private http: HttpClient) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this._history = JSON.parse(localStorage.getItem('History')!) || [];
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this._results = JSON.parse(localStorage.getItem('Results')!) || [];
	}

	private _history: string[] = [];

	get history(): string[] {
		return [...this._history];
	}

	private _results: Gif[] = [];

	get results(): Gif[] {
		return [...this._results];
	}

	searchGifs(query: string): void {
		query = query.trim().toLowerCase();

		if (!this._history.includes(query)) {
			this._history.unshift(query);
			this._history = this._history.splice(0, 50);
			localStorage.setItem('History', JSON.stringify(this._history));
		}

		const params = new HttpParams({
			fromObject: {
				api_key: environment.apiKeyGiphy,
				q: query,
				limit: '10'
			}
		});
		this.http
			.get<SearchGifsResponse>(`${environment.giphyUri}/search`, {
				params
			})
			.subscribe((res: SearchGifsResponse) => {
				this._results = res.data;
				localStorage.setItem('Results', JSON.stringify(this._results));
			});
	}
}
