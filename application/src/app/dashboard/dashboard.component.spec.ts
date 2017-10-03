import	{	TestBed,	async	}	from	'@angular/core/testing'
import	{	DashboardComponent	}	from	'./dashboard.component'
import	{	EmployeeDetailsComponent	}	from	'../employee_details/e_d.component';
import  {	HttpModule	} from  '@angular/http';

describe(	'DashboardComponent',	()	=>	{
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [	DashboardComponent,	EmployeeDetailsComponent	],
			imports:	[	HttpModule	]
		}).compileComponents();
	}));

	it(`should have as title 'My Employees'`, async(() => {
	    const	fixture	=	TestBed.createComponent(DashboardComponent);
	    const	componentTested	=	fixture.debugElement.componentInstance;
	    expect(	componentTested.title).toEqual(	'My Employees');
	}));
});