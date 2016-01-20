module app {
	var test = angular.module("app", []);
	
	export class myController {
		foo: string;
		constructor(){
			this.foo = "foo";
			console.log(this.foo);
		}
	}
	test.controller("myController", [myController]);
}