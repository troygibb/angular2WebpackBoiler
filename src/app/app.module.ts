import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { App } from './app.component';
import { DataComponent } from './data.component.ts';

@NgModule ({
	declarations: [ App, DataComponent ],
	imports: [ BrowserModule, HttpModule ],
	bootstrap: [ App ]
})
class AppModule {};

export { AppModule }; 