import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer-up-down',
  templateUrl: './timer-up-down.component.html',
  styleUrls: ['./timer-up-down.component.css']
})
export class TimerUpDownComponent implements OnInit {
  secondsString: string = '00';
	minutesString: string = '00';
	hoursString: string = '00';

	@Input('seperator') seperatorSymbol: string = ':';
	@Input('type') type: string = 'up';
	@Input('startSeconds') startSeconds: number = 0;

	@Output() timeComplete = new EventEmitter();
	@Output() timeUpdate = new EventEmitter();

	subscription: Subscription;
  constructor() { }

  ngOnInit() {
    const observer = {
			next: currentSeconds => this.formatTime(currentSeconds),
			complete: () => this.timeComplete.emit()
		};
		switch(this.type) {
			case 'down':
				this.subscription = timer(0, 1000)
									.pipe(
										// Don't remove '+'. Not sure about the reason
										take(+this.startSeconds + 1),
										map(i => this.startSeconds - i),
										tap(i => this.timeUpdate.emit(this.startSeconds - i))
									)
									.subscribe(observer);
				break;
			case 'up':
			default:
				this.subscription = timer(0, 1000)
								.pipe(
									tap(currentSeconds => this.timeUpdate.emit(currentSeconds))
								)
								.subscribe(observer);
				break;
		}
  }

  formatTime(totalSeconds: number) {
		const totalMinutes = Math.floor(totalSeconds / 60);
		const totalHours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes - (totalHours * 60);
		const seconds = totalSeconds - (totalMinutes * 60);
		
		this.hoursString = (totalHours < 10 ? '0' : '') + totalHours;
		this.minutesString = (minutes < 10 ? '0' : '') + minutes;
		this.secondsString = (seconds < 10 ? '0' : '') + seconds;
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();	
	}

}
