import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../providers/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	loggedIn: boolean = false;
	
	constructor(private _firebaseAuth: AngularFireAuth, private authService: AuthService) {
	}

	logout() {
		this.authService.logout();
	}

	ngOnInit() {
		this._firebaseAuth.authState.subscribe((data) => {
			this.loggedIn = !!data;
		});
	}
}