import { Component, OnInit, Input } from '@angular/core';
import { AdditionQuestionsGeneratorService } from '../providers/addition-questions-generator.service';
import { Router} from '@angular/router';
import * as _ from "lodash";

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

	@Input('timerType') timerType: string = 'up';
	
	constructor(private addGen: AdditionQuestionsGeneratorService, 
			private router: Router) {
		const operator = this.getOperator(this.router.url);
		this.questions = addGen.getQuestions(20, operator);
		this.questionGroups = _.chunk(this.questions, 10);
	}

	getOperator(url) {
		if(url.indexOf('addition')) {
			return '+';
		} else if(url.indexOf('subtraction')) {
			return '-'
		} else if(url.indexOf('multiplication')) {
			return '*';
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
		this.score = 0;
		for(const question of this.questions) {
			if(this.userAnswers[question.questionNumber] == question.answer) {
				this.score++;
				question.correctAnswer = true;
			}
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