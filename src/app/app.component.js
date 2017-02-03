(function(app) {
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        template: 
            '<h1>My App</h1>' +
            '<flights-list></flights-list>'
    })
    .Class({
        constructor: function AppComponent() {

        }
    });

})(window.app || (window.app = {}));