import {myApp} from "./module";

export class MyService {
	static $inject = [];
	constructor() {
	}

	log(text: string) {
		console.log(text);
	}
}
angular.module("myApp").service("MyService", MyService);