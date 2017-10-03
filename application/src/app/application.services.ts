import	{	Injectable	}	from	'@angular/core';
import	{	HttpModule	}	from	'@angular/http';
import	{	Http,	Response,	Headers	}	from	'@angular/http';
import	{	Observable	}	from	'rxjs/Observable';
import	{	Employee	}	from	'./employee';
import	'rxjs/add/operator/map';
import	'rxjs/add/operator/toPromise';

@Injectable()
export	class ApplicationServices	{
	urlJson	= "https://api.myjson.com/bins/u3vvl";
	constructor(private http : Http){}

	getEmployees(): Promise<Employee>{
	return this.http
	 	.get(this.urlJson, {headers: this.getHeaders()})
		.toPromise()
     	.then(mapEmployees)
     	.catch(handleError);
	};

	private getHeaders()	{
		// I included these headers because otherwise FireFox
		// will request text/html instead of application/json
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		return headers;
	}
}

function handleError(error: any)	{
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  // instead of Observable we return a rejected Promise
  return Promise.reject(errorMsg);
}

function mapEmployees(response:Response): Employee	{
   // toPerson looks just like in the previous example
   return response.json().map(toEmployee);
}

function toEmployee(r:any): Employee	{
  let employee = <Employee>({
  	name: r.name,
  	date_joing:	r.date_joing,
  	departament: r.departament
  });
  return employee;
}


