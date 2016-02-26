(function(){
	angular.module("app", ["angular-chartist"]).controller("controller", function(){
		var _this = this;
		this.header = "ngTest";
		this.data = { labels: [], series: [[]] };

        this.options = {
			axisX: {
				labelOffset: { x: -15, y: 10 },
				showGrid: false,
				labelInterpolationFnc: function(value, index){
					// X-axis gets cluttered. Only render 5-6 labels, no matter how many plot points we get.
					var mod = _this.data.labels.length > 30 ? 10 : 5;
					return (index % mod === 0) ? moment(value).format("DD.MM HH:mm") : "";
				}
			},
			axisY: {
				labelOffset: { x: -10, y: 6 },
				scaleMinSpace: 25,
				onlyInteger: true
			},
			showLine: true,
			// If dots should be drawn or not
			showPoint: true,
			// If the line chart should draw an area
			showArea: false,
			// The base for the area chart that will be used to close the area shape (is normally 0)
			areaBase: 0,
			// Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
			lineSmooth: true,
			// Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
			low: undefined,
			// Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
			high: undefined,
			// Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
			chartPadding: {
			top: 15,
			right: 15,
			bottom: 5,
			left: 10
			},
			// When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
			fullWidth: false,
        };

        for(var i = 0; i < 24; i++){
        	var d = new Date();
        	d.setHours(-i);
        	this.data.labels.push(d);
        	this.data.series[0].push(Math.floor(Math.random()*100));
        }
	});
})();