import	{	BrowserModule	}	from	'@angular/platform-browser';
import	{	NgModule	}	from	'@angular/core';
import	{	FormsModule	}	from	'@angular/forms';
import	{	HttpModule	}	from	'@angular/http';

import	{	AppComponent	}	from	'./app.component';
import	{	DashboardComponent	}	from	'./dashboard/dashboard.component';
import	{	EmployeeDetailsComponent	}	from	'./employee_details/e_d.component';
import	{	ApplicationServices }	from  './application.services';


@NgModule({
	declarations:	[
		AppComponent,
		DashboardComponent,
		EmployeeDetailsComponent
	],
	imports:	[
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers:	[
		ApplicationServices
	],
	bootstrap:	[
		AppComponent
	]
})

export	class	AppModule	{	}
