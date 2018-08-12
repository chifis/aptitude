import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test-wrapper',
	templateUrl: './test-wrapper.component.html',
	styleUrls: ['./test-wrapper.component.css']
})
export class TestWrapperComponent implements OnInit {

	testStarted: boolean = false;
	timerType: string = 'up';

	startTest() {
		this.testStarted = true;
	}

	constructor() { }

	ngOnInit() {}

}