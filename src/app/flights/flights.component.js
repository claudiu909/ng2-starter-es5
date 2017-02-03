(function(app) {
    var Component = ng.core.Component,
        FlightsService = app.FlightsService;

    app.FlightsComponent = Component({
        selector: 'flights-list',
        templateUrl: 'src/app/flights/flights.component.html'
    })
    .Class({
        constructor: [FlightsService, function FlightsComponent(flightsService) {
            this.flight = flightsService.getRandomFLight();
        }]
    });

})(window.app || (window.app = {}));