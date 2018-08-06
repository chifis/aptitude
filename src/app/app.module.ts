import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';
import { ResultComponent } from './result/result.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';

import { CountdownModule } from 'ngx-countdown';
import { SubtractionComponent } from './subtraction/subtraction.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginComponent,
		HomeComponent,
		AdditionComponent,
		ResultComponent,
		ReportComponent,
		TestComponent,
		QuestionComponent,
		SubtractionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		CountdownModule,
		FormsModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
