module app {
	export class Controller {
		public foo: string;
		static $inject = ["Service"];
		constructor(service){
			this.foo = "foo";
		}
	}
	app.controller("Controller", Controller);
}