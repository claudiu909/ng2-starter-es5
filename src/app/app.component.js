(function(app) {
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        templateUrl: 'src/app/app.component.html'
    })
    .Class({
        constructor: function AppComponent() {

        }
    });

})(window.app || (window.app = {}));