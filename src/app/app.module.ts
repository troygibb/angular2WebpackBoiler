import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { App } from './app.component';

@NgModule ({
	declarations: [ App ],
	imports: [ BrowserModule ],
	bootstrap: [ App ]
})
class AppModule {};

export { AppModule }; 