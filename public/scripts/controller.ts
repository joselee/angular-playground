module app {
	export class myController {
		public widgets: Widgets;
		public gridsterOpts: any;

		static $inject = ["myService"];
		constructor(private myService){
			this.widgets = myService.widgets;
			this.setupGridsterOptions(myService);
		}

		private setupGridsterOptions (myService) {
			this.gridsterOpts = {
				columns: 12,
				pushing: false,
				floating: false,
				swapping: false,
				width: 'auto',
				colWidth: 'auto',
				rowHeight: 'match',
				margins: [10, 10],
				outerMargin: true,
				isMobile: false,
				mobileBreakPoint: 600,
				mobileModeEnabled: true,
				minColumns: 1,
				minRows: 2,
				maxRows: 100,
				defaultSizeX: 2,
				defaultSizeY: 2,
				minSizeX: 1,
				maxSizeX: null,
				minSizeY: 1,
				maxSizeY: null,
				resizable: {
					enabled: true,
					handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
					start: (event, $element, widget) => {},
					resize: (event, $element, widget) => {},
					stop: (event, $element, widget) => {
						myService.save();
					}
				},
				draggable: {
					enabled: true,
					handle: '.drag-handle',
					start: (event, $element, widget) => {},
					drag: (event, $element, widget) => {},
					stop: (event, $element, widget) => {
						myService.save();
					}
				}
			};
		}
	}
	app.controller("myController", myController);
}