System.register(["angular2/core", "../../Breadcrumb/Components/BreadcrumbComponent", 'angular2/router', "./ErrorDetailComponent", "./ErrorsListComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, BreadcrumbComponent_1, router_1, ErrorDetailComponent_1, ErrorsListComponent_1;
    var ErrorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BreadcrumbComponent_1_1) {
                BreadcrumbComponent_1 = BreadcrumbComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ErrorDetailComponent_1_1) {
                ErrorDetailComponent_1 = ErrorDetailComponent_1_1;
            },
            function (ErrorsListComponent_1_1) {
                ErrorsListComponent_1 = ErrorsListComponent_1_1;
            }],
        execute: function() {
            ErrorsComponent = (function () {
                function ErrorsComponent() {
                }
                ErrorsComponent = __decorate([
                    core_1.Component({
                        selector: 'errors',
                        template: '<router-outlet></router-outlet>',
                        directives: [BreadcrumbComponent_1.BreadcrumbComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: ErrorsListComponent_1.ErrorsListComponent, name: "ErrorsList", useAsDefault: true },
                        { path: '/:id', component: ErrorDetailComponent_1.ErrorDetailComponent, name: "ErrorDetail" }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ErrorsComponent);
                return ErrorsComponent;
            })();
            exports_1("ErrorsComponent", ErrorsComponent);
        }
    }
});
//# sourceMappingURL=ErrorsComponent.js.map