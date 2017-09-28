import { Injectable } from '@angular/core';

import { Http, Response,	Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import 'rxjs/add/operator/map';

/*
	var employeesList: Array<{name: string, date_joing: string,	departament: string}> = [
							{name:	'Jack Martin',	date_joing:	'8/20/2015',	departament:	'IT'},
							{name:	'Frank Yarnall',	date_joing:	'9/27/2017',	departament:	'IT'},
							{name:	'Collin Day',	date_joing:	'9/20/2017',	departament:	'IT'},
							{name:	'Sumit Kumar',	date_joing:	'9/20/2015',	departament:	'CS'},
							{name:	'Kevin Quinn',	date_joing:	'9/20/2017',	departament:	'CS'},
							{name:	'Ram Kumar',	date_joing:	'9/20/2017',	departament:	'EC'},
							{name:	'Rajat Saini',	date_joing:	'9/27/2017',	departament:	'EC'}	];	*/

@Injectable()
export	class ApplicationServices	{
	urlJson	= "./employees.json";
	constructor(private http : Http){}

	getEmployees(): Observable<Employee[]>{
	let employees$ = this.http
	  .get(this.urlJson, {headers: this.getHeaders()})
	  .map(mapEmployees);
	  return employees$;
	};

	getConfiguration = (): Observable<Response> => {
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get('app/employees.json').map(res => res.json());
    }

	private getHeaders()	{
		// I included these headers because otherwise FireFox
		// will request text/html instead of application/json
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		return headers;
	}
}

function mapEmployees(response:Response): Employee[]{
   // toPerson looks just like in the previous example
   return response.json().results.map(toEmployee);
}

function toEmployee(r:any): Employee{
  let employee = <Employee>({
  	name: r.name,
  	date_joing:	r.date_joing,
  	departament: r.departament
  });
  console.log('Parsed employee:', employee);
  return employee;
}


