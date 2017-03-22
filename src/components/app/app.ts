export class AppController {
    static $inject = [];
    constructor() {
        
    }
}

export const App = {
    name: 'app',
    controller: AppController,
    controllerAs: 'vm',
    templateUrl: 'src/components/app/app.html'
};