import	{	TestBed,	async	}	from	'@angular/core/testing'
import	{	EmployeeDetailsComponent	}	from	'./e_d.component'
import	{	ApplicationServices	}	from	'../application.services';
import  {	HttpModule	} from  '@angular/http';

let	paramDate	=	new	Date('9/30/2017');


describe(	'EmployeeDetailsComponent',	()	=>	{
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [	EmployeeDetailsComponent	],
			imports:	[	HttpModule	]
		}).compileComponents();
	}));

	it('Should	show	the	date	for	Last	Day',	()	=>	{
		const	fixture	=	TestBed.createComponent(	EmployeeDetailsComponent);
		const	componentTested	=	fixture.debugElement.componentInstance;
		expect(	componentTested.get1Day(	paramDate)).toEqual(new	Date('9/29/2017'));
	});

	it('Should	show	the	date	for	One	week	Ago',	()	=>	{
		const	fixture	=	TestBed.createComponent(	EmployeeDetailsComponent);
		const	componentTested	=	fixture.debugElement.componentInstance;
		expect(	componentTested.getLastWeek(paramDate)).toEqual(new	Date('9/22/2017'));
	});

	it('Should	show	the	date	for	Two	years	Ago',	()	=>	{
		const	fixture	=	TestBed.createComponent(	EmployeeDetailsComponent);
		const	componentTested	=	fixture.debugElement.componentInstance;
		expect(	componentTested.getTwoYears(paramDate)).toEqual(new	Date('9/23/2015'));
	});
});