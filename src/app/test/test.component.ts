import { Component, OnInit } from '@angular/core';
import { AdditionQuestionsGeneratorService } from '../providers/addition-questions-generator.service';
import { Router, ActivatedRoute } from '@angular/router';
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
	
	constructor(private addGen: AdditionQuestionsGeneratorService, 
			private router: Router,
			private activatedRoute: ActivatedRoute) {
		this.questions = addGen.getQuestions(20, activatedRoute.routeConfig.data.operator);
		this.questionGroups = _.chunk(this.questions, 10);
	}

	onSubmitTest() {
		console.log('test submitted');
		this.testCompleted = true;
		this.evaluateScore();
	}

	onCountDownFinished() {
		console.log('test finished from countdown');
		this.timeCompleted = true;
		this.onSubmitTest();
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

	ngOnInit() {}
}