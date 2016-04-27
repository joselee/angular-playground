(function () {
    var app = angular.module("app", ["ui.bootstrap"]);

    app.controller("controller", ["$locale", function ($locale) {
        var self = this;
        self.date = new Date();
        self.dateFormat = $locale.DATETIME_FORMATS.shortDate;
        
        // Year must be 4 characters, no matter the locale
        var yearChars = (self.dateFormat.match(/y/g) || []);
        if (yearChars.length < 4){
            var yearString = yearChars.join();
            self.dateFormat = self.dateFormat.replace(yearChars, 'yyyy');
        }
        
        self.altDateFormats = [];
        var dayChars = (self.dateFormat.match(/d/g) || []);
        var monthChars = (self.dateFormat.match(/M/g) || []);
        var withLeadingZeros = self.dateFormat;
        var withoutLeadingZeros = self.dateFormat;

        if(dayChars.length === 1){
            withLeadingZeros = withLeadingZeros.replace('d', 'dd');
        }
        if(monthChars.length === 1){
            withLeadingZeros = withLeadingZeros.replace('M', 'MM');
        }
        if(dayChars.length === 2){
            withoutLeadingZeros = withoutLeadingZeros.replace('dd', 'd');
        }
        if(monthChars.length === 2){
            withoutLeadingZeros = withoutLeadingZeros.replace('MM', 'M');
        }

        self.altDateFormats.push(withLeadingZeros);
        self.altDateFormats.push(withoutLeadingZeros);

        console.log('dateFormat:', self.dateFormat);
        console.log('altFormats:', self.altDateFormats);

        this.opened = false;
        this.open = function () {
            self.opened = !self.opened;
        };
        this.dateOptions = {
            initDate: new Date()
        };
    }]);

    app.directive("dateShorthand", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, elem, attrs, modelCtrl) {
                elem.on("keyup", function () {
                    var input = elem.val();
                    var isFourDigitNumber = input.match(/^[0-9]{4}$/);
                    if (isFourDigitNumber) {
                        var shorthandDate = moment(input, "DDMM");
                        if (shorthandDate.isValid()) {
                            scope.ctrl.date = shorthandDate.toDate();
                            scope.$apply();
                        }
                    }
                });
            }
        };
    }]);
})();