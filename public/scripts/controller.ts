import {myApp} from "./module";
import {MyService} from "./service";

export class MyController {
	public foo: string;
	static $inject = ["MyService"];
	constructor(myService: MyService) {
		this.foo = "Hello Angular!";
		myService.log(this.foo);
	}
}
angular.module("myApp").controller("MyController", MyController);