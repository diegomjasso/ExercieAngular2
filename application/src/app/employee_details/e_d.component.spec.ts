import { TestBed, async } from '@angular/core/testing'
import	{	EmployeeDetailsComponent	}	from	'./e_d.component'

let componentTested	=	new EmployeeDetailsComponent();
let paramDate = new Date('9/30/2017');


describe(	'EmployeeDetailsComponent',	()	=>	{
	it('Should show the date for Last Day',	()	=>	{
		console.log(componentTested.get1Day(	paramDate));

		expect(	componentTested.get1Day).toBe(new Date('9/29/2017'));
	});

	it('Should show the date for One week Ago',	()	=>	{
		console.log(componentTested.getLastWeek(	paramDate));
		componentTested.getLastWeek(paramDate);
		expect(	componentTested.getLastWeek).toBe(new Date('9/23/2017'));
	});

	it('Should show the date for Two years Ago',	()	=>	{
		componentTested.getTwoYears(paramDate);
		expect(	componentTested.getTwoYears).toBe(new Date('10/01/2015'));
	});

	it('Should be True',	()	=>	{
		componentTested.setTheNames();
		expect(	componentTested.setTheNames).toBe(	true);
	})
});