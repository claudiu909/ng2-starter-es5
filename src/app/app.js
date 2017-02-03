(function() {
    var Class = ng.core.Class,
        Component = ng.core.Component,
        NgModule = ng.core.NgModule,
        BrowserModule = ng.platformBrowser.BrowserModule,
        platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

    var FlightsService = Class({
        constructor: function FlightsService() {
            this.flights = flightsData;
        },
        getRandomFLight: function() {
            var randomIndex = Math.floor(Math.random() * this.flights.length);
            
            return this.flights[randomIndex];
        }
    });

    var FlightsComponent = Component({
        selector: 'flights-list',
        template: '<p>{{flight.airline}} on {{flight.date}}</p>'
    })
    .Class({
        constructor: [FlightsService, function FlightsComponent(flightsService) {
            this.flight = flightsService.getRandomFLight();
        }]
    });

    var AppComponent = Component({
        selector: 'my-app',
        template: 
            '<h1>My App</h1>' +
            '<flights-list></flights-list>'
    })
    .Class({
        constructor: function AppComponent() {

        }
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [
            AppComponent,
            FlightsComponent
        ],
        providers: [FlightsService],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function() {

        }
    });

    platformBrowserDynamic().bootstrapModule(AppModule);

    var flightsData = [
        {
        "airline": "Tarom",
        "date": "30/05/2016"
        },
        {
        "airline": "AmericanAirlines",
        "date": "14/04/2015"
        },
        {
        "airline": "AmericanAirlines",
        "date": "08/02/2016"
        },
        {
        "airline": "KLM",
        "date": "09/04/2016"
        },
        {
        "airline": "Austrian",
        "date": "10/10/2016"
        },
        {
        "airline": "BritishAirways",
        "date": "10/05/2015"
        },
        {
        "airline": "BritishAirways",
        "date": "15/05/2015"
        },
        {
        "airline": "AmericanAirlines",
        "date": "25/03/2014"
        },
        {
        "airline": "KLM",
        "date": "24/02/2016"
        },
        {
        "airline": "KLM",
        "date": "26/06/2015"
        }
    ];

})();