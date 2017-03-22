export class AppController {
    static $inject = [];
    constructor() {
        angular.copy({});
    }
}

export const App = {
    name: 'app',
    controller: AppController,
    controllerAs: 'vm',
    templateUrl: 'src/components/app/app.html'
};