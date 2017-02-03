(function(app) {
    var Component = ng.core.Component,
        FlightsService = app.FlightsService;

    app.FlightsComponent = Component({
        selector: 'flights-list',
        template: '<p>{{flight.airline}} on {{flight.date}}</p>'
    })
    .Class({
        constructor: [FlightsService, function FlightsComponent(flightsService) {
            this.flight = flightsService.getRandomFLight();
        }]
    });

})(window.app || (window.app = {}));