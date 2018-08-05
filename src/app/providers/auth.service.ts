import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {}

	loginWithGoogle() {
		return this._firebaseAuth.auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider()
		)
	}

	logout() {
		this._firebaseAuth.auth
			.signOut()
			.then((res) => this.router.navigate(['/']));
	}
}