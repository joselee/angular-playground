(function(){
	angular.module("app", []).controller("controller", function(){
		this.header = "Processes";

		this.getStatusIcon = function(process){
			if(process.status === "pass"){ return "fa-check";}
			if(process.status === "ongoing"){ return "fa-play";}
			if(process.status === "fail"){ return "fa-times";}
		};


		this.processes = [{
		  "name": "HyVee Inc",
		  "description": "In quis justo.",
		  "version": 42,
		  "status": "pass"
		},
		{
		  "name": "Ventura Corporation LTD.",
		  "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
		  "version": 60,
		  "status": "fail"
		}, 
		{
		  "name": "Exelan Pharmaceuticals, Inc.",
		  "description": "Aenean lectus. Pellentesque eget nunc.",
		  "version": 21,
		  "status": "ongoing"
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
		  "version": 66,
		  "status": "pass"
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Maecenas pulvinar lobortis est.",
		  "version": 6,
		  "status": "fail"
		},
		{
		  "name": "Ventura Corporation LTD.",
		  "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
		  "version": 60,
		  "status": "fail"
		}, 
		{
		  "name": "Exelan Pharmaceuticals, Inc.",
		  "description": "Aenean lectus. Pellentesque eget nunc.",
		  "version": 21,
		  "status": "ongoing"
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
		  "version": 66,
		  "status": "pass"
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Maecenas pulvinar lobortis est.",
		  "version": 6,
		  "status": "fail"
		}]
	});
})();