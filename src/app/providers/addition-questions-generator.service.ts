import { Injectable } from '@angular/core';
import * as mathjs from 'mathjs'

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
		let questions = [];
		if(operator === '%') {
			questions = this.getPercentageQuestions(count);
		} else if(operator === 'divisibility') {
			questions = this.getDivisibilityQuestions(count);
		} else {
			for(let i = 1; i <= count; i++) {
				const expression = this.getRandomExpression(operator);
				const question = {
					questionNumber: i,
					title: expression.a + ' ' + operator + ' ' + expression.b,
					answer: expression.result
				};
				questions.push(question);
			}
		}
		return questions;
	}

	getPercentageQuestions(count) {
		const questions: any[] = [];
		const standardPercentages: number[] = [50, 25, 12.5, 6.25, 20, 33.33, 16.66, 11.11, 9.09,
											14.28, 22.22, 27.27, 18.34, 16.67, 28.56, 13.75];
		
		for(let i = 1; i <= count; i++) {
			const decider = this.getRandomInt(1, 100);
			let num = 0;
			if(decider <= 10) {
				num = this.getRandomInt(1, 100);
			} else if(decider <= 45) {
				num = this.getRandomInt(100, 1000);
			} else if(decider <= 75) {
				num = this.getRandomInt(1000, 10000);
			} else {
				num = this.getRandomInt(10000, 100000);
			}

			const percentagePicker = this.getRandomInt(0, standardPercentages.length);
			const percentage = standardPercentages[percentagePicker];

			const result = mathjs.round((percentage / 100) * num, 2);

			const question = {
				questionNumber: i,
				title: percentage + '% of ' + num,
				answer: result
			};

			questions.push(question);
		}
		return questions;
	}

	getDivisibilityQuestions(count) {
		const questions: any[] = [];

		for(let i = 1; i <= count; i++) {
			const divisor = this.getRandomInt(1, 12) + 1;
			const dividend = this.getRandomInt(1, 100000);
			const question = {
				questionNumber: i,
				title: dividend + ' divisible by ' + divisor,
				answer: dividend % divisor === 0 ? 'Yes' : 'No'
			};
			questions.push(question);
		}		

		return questions;
	}
}