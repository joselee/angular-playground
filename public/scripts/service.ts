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
		public widgetB: WidgetB;
		constructor(){
			this.widgetA = new WidgetA();
			this.widgetB = new WidgetB();
		}
	}

	export interface IConfig {
		col: number;
		row: number;
		sizeX: number;
		sizeY: number;
	}

	export class WidgetA {
		public name: string;
		public config: IConfig;

		constructor(){
			this.name = "Widget A";
			this.config = {
				col: 6,
				row: 0,
				sizeX: 6,
				sizeY: 3
			};
		}
	}

	export class WidgetB {
		public name: string;
		public config: IConfig;

		constructor(){
			this.name = "Widget B";
			this.config = {
				col: 0,
				row: 0,
				sizeX: 1,
				sizeY: 1
			};
		}
	}
}