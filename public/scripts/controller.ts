namespace angularPlayground {
	export class Controller {
		public foo: string;
		static $inject = ["Service"];
		constructor(service) {
			this.foo = "Hello Angular!";
			service.log(this.foo);
		}
	}
	angularPlayground.app.controller("Controller", Controller);
}