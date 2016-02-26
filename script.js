(function(){
	angular.module("app", ["n3-line-chart"]).controller("controller", function(){
		var _this = this;
		this.header = "ngTest";

		this.fetch = function(){
			_this.chartData = {series: []};
			for (var i = 1; i < 1000; i++){
			_this.chartData.series.push({ x: i, test: "wat", label: new Date(), value: Math.floor(Math.random() * 100)});
			}
		}
		 this.fetch();

        this.chartOptions = {            
            series: [
                {
                    axis: "y",
                    dataset: "series",
                    key: "value",
                    label: "Failures",
                    interpolation: { mode: "cardinal"},
                    color: "#D14836",
                    type: ["line"],
                    id: "mySeries0"
                }
            ],
            axes: {
                x: {
                    key: "x",
                    tickFormat: function(value, index) {
                        var label = _this.chartData.series[index].label;
                        return moment(label).format("HH:mm");
                    }
                }
            },
            drawLegend: false
        };
        

        this.toggle = function(){
        	var series = _this.chartOptions.series[0];
        	if(series.label === "Failures"){
        		series.label = "Passes";
        		series.color = "#16A765";
        	} else {
        		series.label = "Failures";
        		series.color = "#D14836";
        	}
        	_this.fetch();
        };
	});
})();