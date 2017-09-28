import	{	Component,	OnInit	}	from	'@angular/core';
import	{	ApplicationServices }	from  '../application.services';

@Component({
	selector:	'employee-details',
	templateUrl:	'./e_d.component.html',
	styleUrls:	[	'./e_d.component.css'],
	providers:	[
		ApplicationServices
	],
})

export class EmployeeDetailsComponent implements OnInit	{
	title	=	"Employee Details"
	groups	=	[	"Today",	"Last Week",	"Two Year Back"];
	employees;
	employees_names_today;
	employees_names_lastWeek;
	employees_names_twoYears;
	cDate;
	cDate1Day;
	cDate1Week;
	cDateTwoYears;
	

	constructor(	private applicationServices: ApplicationServices) {}

  ngOnInit() {
    this.applicationServices.getEmployees().subscribe(e => this.employees = e);
    this.applicationServices.getConfiguration().subscribe(
            (res) => {
                this.employees = res;
                console.log("after reading");
                console.log(this.employees);
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );;
  }

	//constructor(private applicationServices:	ApplicationServices)	{
		//this.employees	=	this.applicationServices.getEmployees().subscribe(result => console.log(result));
	/*	this.cDate = new Date();
		this.cDate1Day	=	this.get1Day();
		this.cDate1Week	=	this.getLastWeek();
		this.cDateTwoYears	=	this.getTwoYears();
		this.setTheNames();*/
		
	//};

	setTheNames()	{
		this.employees_names_twoYears = this.doValidation(	this.cDateTwoYears);
		this.employees_names_lastWeek	= this.doValidation(	this.cDate1Week);
		this.employees_names_today = this.doValidation(	this.cDate1Day);

		return true;
	}

	get1Day(now	=	new Date())	{
		let particularLimitDate	= new	Date(now.setTime(	now.valueOf() - (24 * 60 * 60 * 1000)));
		return particularLimitDate;
	};

	getLastWeek(	now	=	new Date())	{
		let particularLimitDate	=	new Date(now.setTime(	now.valueOf() - (7 * 24 * 60 * 60 * 1000)));
		return particularLimitDate;
	};

	getTwoYears(	now	=	new Date())	{
		let particularLimitDate	=	new Date(now.setTime(	now.valueOf() - (2 * 365 * 24 * 60 * 60 * 1000)));
		return particularLimitDate;
	}

	doValidation(	limitTime)	{
		let	result: string[]	=	[];
		for (var _i = 0; _i < this.employees.length; _i++) {
			let tempDate = new Date(	this.employees[_i].date_joing);
			if (	tempDate	<=	limitTime) {
				result.push(this.employees[_i]);
				this.employees.splice(_i, 1);
				_i = _i - 1;
			}
		}
		return result;
	}
}