import {Component, OnInit} from '@angular/core'; 
import {Http, Response} from '@angular/http';

@Component({
	selector: 'data-component',
	template: `
		<h2>Basic Request</h2>
		<button type="button" (click)="makeRequest()">Make Request</button>
		<div *ngIf="loading">loading...</div>
		<p>{{ data }}</p>
	`
})
export class DataComponent implements OnInit {
	data: Object;
	loading: boolean;
	constructor(public http: Http) {}
	ngOnInit(): void {
		this.loading = true; 
		this.http.request('/api')
			.subscribe((res: Response) => { 
				console.log(res.json());
				this.data = res.json().toString();
				this.loading = false;
		}); 
	}
}