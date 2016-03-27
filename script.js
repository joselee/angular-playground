(function(){
	var app = angular.module("app", ["ui.bootstrap"]);
	
	app.controller("controller", function(){
		var self = this;
		this.date = new Date();
		this.opened = false;
		this.open = function(){
			self.opened = !self.opened;
		};
	});

	app.directive("dateShorthand", [function(){
		return {
			restrict: "A",
			require: "ngModel",
			link: function(scope, elem, attrs, modelCtrl){
				elem.on("keyup", function(){
					var input = elem.val();
					var isFourDigitNumber = input.match(/^[0-9]{4}$/);
					if(isFourDigitNumber){
						var shorthandDate = moment(input, "DDMM");
						if(shorthandDate.isValid()){
							scope.ctrl.date = shorthandDate.toDate();
							scope.$apply();
						}
					}
				});
			}
		};
	}]);
})();