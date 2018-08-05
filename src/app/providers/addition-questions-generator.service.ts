import { Injectable } from '@angular/core';
import { QuestionsGenerator } from '../interfaces/questions-generator.interface';
import { Question } from '../models/question.model';

@Injectable({
	providedIn: 'root'
})
export class AdditionQuestionsGeneratorService {

	constructor() { }

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	getRandomExpression() {
		const a = this.getRandomInt(1, 1000);
		const b = this.getRandomInt(1, 1000);
		const expression = {a: a, b: b, result: a + b};
		return expression;
	}
	
	getQuestions(count) {
		const questions = []; 
		for(let i = 1; i <= count; i++) {
			const expression = this.getRandomExpression();
			const question = {questionNumber: i,
							title: expression.a + ' + ' + expression.b,
							answer: expression.result};
			questions.push(question);
		}
		return questions;
	}
}