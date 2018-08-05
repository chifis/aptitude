import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
	@Input('score') score: number;
	@Input('totalQuestions') totalQuestions: number;

	ngOnInit() {}
}