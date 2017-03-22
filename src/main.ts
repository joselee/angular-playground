declare const angular;
import { App } from './components/app/app';

angular.module('app', ['templates', 'ui.bootstrap'])
    .component(App.name, App);

angular.element(() => {
    console.log('bootstrapping application!');
    angular.bootstrap(document, ['app']);
});