import * as angular from 'angular';
import { Controller } from './controller';

angular.module('app', ['templates', 'ui.bootstrap'])
    .controller('Controller', Controller);

angular.element(() => {
    console.log('bootstrapping application!');
    angular.bootstrap(document, ['app']);
});