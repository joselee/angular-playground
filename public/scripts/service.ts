module app {	
	export class myService {
		public widgets: Widgets;
		constructor(){
			const saved = localStorage.getItem("widgets");
            if (saved) {
                this.widgets = <Widgets>JSON.parse(saved);
            } else {
				this.widgets = new Widgets();
				this.save();
            }
		}

		public save(){
			localStorage.setItem("widgets", JSON.stringify(this.widgets));
		}
	}
	app.service("myService", [myService]);

	export class Widgets {
		public widgetA: WidgetA;
		constructor(){
			this.widgetA = new WidgetA();
		}
	}

	export class WidgetA {
		public config: Config;

		constructor(){
			this.config = {
				col: 6,
				row: 0,
				sizeX: 6,
				sizeY: 3
			};
		}
	}

	export class Config {
		col: number;
		row: number;
		sizeX: number;
		sizeY: number;
	}
}