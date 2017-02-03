(function(app) {
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic,
        AppModule = app.AppModule;

    platformBrowserDynamic().bootstrapModule(AppModule);

})(window.app || (window.app = {}));