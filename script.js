(function(){
	angular.module("app", ["angularGrid"]).controller("controller", function(){
		this.header = "Processes";

		this.getStatusIcon = function(process){
			if(process.status === "pass"){ return "fa-check";}
			if(process.status === "ongoing"){ return "fa-play";}
			if(process.status === "fail"){ return "fa-times";}
		};


		this.processes = [
		{
		  "name": "Test process",
		  "description": "This is some amazing process that does super awesome things!",
		  "version": 2,
		  "status": "pass",
		  "tags": ["test", "wow"]
		},
		{
		  "name": "HyVee Inc",
		  "description": "In quis justo.",
		  "version": 42,
		  "status": "pass",
		  "tags": ["omg"]
		},
		{
		  "name": "Ventura Corporation LTD.",
		  "description": "",
		  "version": 60,
		  "status": "fail",
		  "tags": ["wat", "hey"]
		}, 
		{
		  "name": "Exelan Pharmaceuticals, Inc.",
		  "description": "Aenean lectus. Pellentesque eget nunc.",
		  "version": 21,
		  "status": "ongoing",
		  "tags": ["staahp"]
		}, 
		{
		  "name": "WOW this guy has a super ridiculously long title, which is rather impractical.. but what the hey, right?",
		  "description": "It also has a super long description 'cause the person who made this process thought it would be helpful to be very verbose in a place where they really shouldn't be, because the title and description should be short and sweet",
		  "version": 66,
		  "status": "pass",
		  "tags": ["long", "oversize", "ridiculous", "omg", "buy why?", "staaahp"]
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Maecenas pulvinar lobortis est.",
		  "version": 6,
		  "status": "fail",
		  "tags": ["foo", "bar", "heh"]
		},
		{
		  "name": "Ventura Corporation LTD.",
		  "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
		  "version": 60,
		  "status": "fail",
		  "tags": ["foo", "bar", "heh"]
		}, 
		{
		  "name": "Exelan Pharmaceuticals, Inc.",
		  "description": "Aenean lectus. Pellentesque eget nunc.",
		  "version": 21,
		  "status": "ongoing",
		  "tags": ["foo", "bar", "heh"]
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
		  "version": 66,
		  "status": "pass",
		  "tags": ["foo", "bar", "heh"]
		}, 
		{
		  "name": "ALK-Abello, Inc.",
		  "description": "Maecenas pulvinar lobortis est.",
		  "version": 6,
		  "status": "fail",
		  "tags": ["foo", "bar", "heh"]
		}]
	});
})();