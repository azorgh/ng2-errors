System.register(['angular2/core', 'angular2/router', "./Header/Components/HeaderComponent", "./Home/Components/HomeComponent", "./Errors/Components/ErrorsComponent", "./Footer/Components/FooterComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, HeaderComponent_1, HomeComponent_1, ErrorsComponent_1, FooterComponent_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HeaderComponent_1_1) {
                HeaderComponent_1 = HeaderComponent_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (ErrorsComponent_1_1) {
                ErrorsComponent_1 = ErrorsComponent_1_1;
            },
            function (FooterComponent_1_1) {
                FooterComponent_1 = FooterComponent_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100\">\n      <header></header>\n      <div class=\"ribbon\"></div>\n      <main class=\"mdl-layout__content\">\n\n        <div class=\"container mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n          <div class=\"content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n              <router-outlet></router-outlet>\n          </div>\n        </div>\n        <footer></footer>\n      </main>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, HeaderComponent_1.HeaderComponent, FooterComponent_1.FooterComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: HomeComponent_1.HomeComponent, name: 'Home', useAsDefault: true },
                        { path: '/errors/...', component: ErrorsComponent_1.ErrorsComponent, name: 'Errors' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=AppComponent.js.map