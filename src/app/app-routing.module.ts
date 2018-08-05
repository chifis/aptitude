import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'home', component: HomeComponent},
	{
		path: 'addition',
		component: AdditionComponent,
		children: [
			{path: 'test', component: TestComponent},
			{path: 'result', component: ResultComponent}
		]
	},
	{path: 'result', component: ResultComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }