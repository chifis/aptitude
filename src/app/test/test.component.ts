import { Component, OnInit, Input } from '@angular/core';
import { AdditionQuestionsGeneratorService } from '../providers/addition-questions-generator.service';
import { Router} from '@angular/router';
import * as _ from "lodash";
import * as mathjs from 'mathjs';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	questions: any[];
	questionGroups: any[];
	timeCompleted: boolean = false;
	testCompleted: boolean = false;
	userAnswers: any = [];
	score: number = 0;

	secondsTaken: number = 0;
	timeString: string = '';

	twoOptions: boolean = false;

	@Input('timerType') timerType: string = 'up';
	
	constructor(private addGen: AdditionQuestionsGeneratorService, 
			private router: Router) {
		const operator = this.getOperator(this.router.url);
		this.questions = addGen.getQuestions(20, operator);
		console.log('this.questions: ', this.questions);
		this.questionGroups = _.chunk(this.questions, 10);
	}

	getOperator(url) {
		if(url.indexOf('addition') >= 0) {
			return '+';
		} else if(url.indexOf('subtraction') >= 0) {
			return '-'
		} else if(url.indexOf('multiplication') >= 0) {
			return '*';
		} else if(url.indexOf('percentage') >= 0) {
			return '%';
		} else if(url.indexOf('divisibility') >= 0) {
			this.twoOptions = true;
			return 'divisibility';
		}
		return '+';
	}

	onSubmitTest() {
		this.testCompleted = true;
		this.evaluateScore();
		this.formatTime(this.secondsTaken);
	}

	onTimeComplete() {
		this.timeCompleted = true;
		this.onSubmitTest();
	}

	onTimeUpdate(secondsTaken) {
		this.secondsTaken = secondsTaken;
	}

	evaluateScore() {
		if(this.getOperator(this.router.url) === '%') {
			this.evaluatePercentageScore();
		} else {
			this.score = 0;
			for(const question of this.questions) {
				const userAnswer = this.userAnswers[question.questionNumber];
				if(userAnswer == question.answer) {
					this.score++;
					question.correctAnswer = true;
				}
			}
		}
	}

	evaluatePercentageScore() {
		this.score = 0;
		for(const question of this.questions) {
			try {
				const userAnswer: number = parseFloat(this.userAnswers[question.questionNumber]);
				if(mathjs.round(userAnswer, 2)  == question.answer) {
					const roundedUserAnswer = parseFloat(mathjs.round(userAnswer, 2).toString());
					const difference = mathjs.round(mathjs.abs(roundedUserAnswer - question.answer), 2);
					if(difference <= 0.1) {
						this.score++;
						question.correctAnswer = true;
					}
				}		
			} catch (error) {}
		}
	}

	formatTime(totalSeconds: number) {
		const totalMinutes = Math.floor(totalSeconds / 60);
		const totalHours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes - (totalHours * 60);
		const seconds = totalSeconds - (totalMinutes * 60);
		
		const hoursString = (totalHours < 10 ? '0' : '') + totalHours;
		const minutesString = (minutes < 10 ? '0' : '') + minutes;
		const secondsString = (seconds < 10 ? '0' : '') + seconds;

		this.timeString = minutesString + ':' + secondsString;
		if(totalHours > 0) {
			this.timeString = hoursString + ':' + this.timeString;
		}
	}

	ngOnInit() {}
}