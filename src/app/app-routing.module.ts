import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { PercentageComponent } from './percentage/percentage.component';
import { DivisibilityComponent } from './divisibility/divisibility.component';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'home', component: HomeComponent},
	{path: 'addition', component: AdditionComponent},
	{path: 'subtraction', component: SubtractionComponent},
	{path: 'multiplication', component: MultiplicationComponent},
	{path: 'percentage', component: PercentageComponent},
	{path: 'divisibility', component: DivisibilityComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }