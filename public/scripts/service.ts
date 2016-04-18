namespace angularPlayground {
	export class Service {
		static $inject = [];
		constructor() {
		}

		log(text: string) {
			console.log(text);
		}
	}
	app.service("Service", Service);
}