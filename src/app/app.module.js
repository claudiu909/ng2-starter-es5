(function(app) {
    var NgModule = ng.core.NgModule,
        BrowserModule = ng.platformBrowser.BrowserModule,
        AppComponent = app.AppComponent,
        FlightsService = app.FlightsService,
        FlightsComponent = app.FlightsComponent;

    app.AppModule = NgModule({
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

})(window.app || (window.app = {}));