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

	getAdditionExpression() {
		const a = this.getRandomInt(1, 1000);
		const b = this.getRandomInt(1, 1000);
		const expression = {a: a, b: b, result: a + b};
		return expression;
	}

	getSubtractionExpression() {
		const a = this.getRandomInt(1, 1000);
		const b = this.getRandomInt(1, 1000);
		const expression = {a: a, b: b, result: a - b};
		return expression;
	}

	getMultiplicationExpression() {
		let a = 0, b = 0;
		const randomValue = this.getRandomInt(1, 100);
		if(randomValue < 25) {
			a = this.getRandomInt(1, 100);
			b = this.getRandomInt(1, 100);
		} else if(randomValue < 50) {
			a = this.getRandomInt(1, 100);
			b = this.getRandomInt(1, 1000);
		} else if(randomValue < 75) {
			a = this.getRandomInt(1, 1000);
			b = this.getRandomInt(1, 100);
		} else {
			a = this.getRandomInt(1, 1000);
			b = this.getRandomInt(1, 1000);
		}
		const expression = {a: a, b: b, result: a * b};
		return expression;
	}

	getRandomExpression(operator) {
		switch (operator) {
			case '+':
				return this.getAdditionExpression();
			case '-':
				return this.getSubtractionExpression();
			case '*':
				return this.getMultiplicationExpression();
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