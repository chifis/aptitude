import { Component, OnInit, Input, Output } from '@angular/core';
import { Question } from '../models/question.model';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

	@Input('question') question: Question;
	@Output() answerSelectionChange = new EventEmitter();

	constructor() { }

	ngOnInit() {}

	answerChanged(checked, answer) {
		if(checked) {
			console.log('checked, answer: ', checked, answer);
			console.log('question: ', this.question);
			const selection = {
				'question': this.question,
				'selectedAnswer': answer
			};
			this.answerSelectionChange.emit(selection);
		}
	}
}