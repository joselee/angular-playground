namespace App {
    class MyComponent implements ng.IComponentOptions {
        template = '<p>{{vm.foo}}</p><button ng-click="vm.changeFoo()">Click</button>';
        bindings = {
            foo: '='
        };
        controller = MyComponentController;
        controllerAs = 'vm';
    }
    class MyComponentController {
        foo: string;
        changeFoo() {
            this.foo = (this.foo === 'bar') ? 'foo' : 'bar';
        }
    }
    app.component('myComponent', new MyComponent());
}