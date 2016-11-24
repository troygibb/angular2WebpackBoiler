import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component ({
	selector: 'test',
	template: `<h1>Hello you!</h1>`
})
class Test {};

@NgModule ({
	declarations: [ Test ],
	imports: [ BrowserModule ],
	bootstrap: [ Test ]
})
class AppModule {};

export { AppModule }; 