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

	getRandomExpression(operator) {
		const a = this.getRandomInt(1, 1000);
		const b = this.getRandomInt(1, 1000);
		const expression = {a: a, b: b, result: this.getResult(a, b, operator)};
		return expression;
	}

	getResult(operand1, operand2, operator) {
		switch (operator) {
			case '+':
				return operand1 + operand2;
			case '-':
				return operand1 - operand2;
		}
	}
	
	getQuestions(count, operator) {
		const questions = []; 
		for(let i = 1; i <= count; i++) {
			const expression = this.getRandomExpression(operator);
			const question = {questionNumber: i,
							title: expression.a + ' ' + operator + ' ' + expression.b,
							answer: expression.result};
			questions.push(question);
		}
		return questions;
	}
}