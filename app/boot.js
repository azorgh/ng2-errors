System.register(['angular2/platform/browser', 'angular2/router', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', './AppComponent', "./Errors/Services/ErrorsService", "angular2/http", "angular2/core"], function(exports_1) {
    var browser_1, router_1, AppComponent_1, ErrorsService_1, http_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            },
            function (ErrorsService_1_1) {
                ErrorsService_1 = ErrorsService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(AppComponent_1.App, [
                ErrorsService_1.ErrorsService,
                browser_1.Title,
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map