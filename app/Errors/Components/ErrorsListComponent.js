System.register(["angular2/core", "angular2/src/platform/browser/title", "../../Breadcrumb/Components/BreadcrumbComponent", "../Services/ErrorsService", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, title_1, BreadcrumbComponent_1, ErrorsService_1, router_1;
    var ErrorsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (title_1_1) {
                title_1 = title_1_1;
            },
            function (BreadcrumbComponent_1_1) {
                BreadcrumbComponent_1 = BreadcrumbComponent_1_1;
            },
            function (ErrorsService_1_1) {
                ErrorsService_1 = ErrorsService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ErrorsListComponent = (function () {
                function ErrorsListComponent(_title, _errorsService) {
                    this._title = _title;
                    this._errorsService = _errorsService;
                }
                ErrorsListComponent.prototype.ngOnInit = function () {
                    this._title.setTitle('Angular2 Errors - List');
                    this.breadcrumb = ['Home', 'Errors list'];
                    this.getErrors();
                };
                ErrorsListComponent.prototype.getErrors = function () {
                    var _this = this;
                    return this._errorsService.getErrors().then(function (res) { return _this.errors = res; });
                };
                ErrorsListComponent = __decorate([
                    core_1.Component({
                        selector: 'errors',
                        templateUrl: 'app/Errors/Templates/ErrorsListTemplate.html',
                        directives: [BreadcrumbComponent_1.BreadcrumbComponent, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [title_1.Title, ErrorsService_1.ErrorsService])
                ], ErrorsListComponent);
                return ErrorsListComponent;
            })();
            exports_1("ErrorsListComponent", ErrorsListComponent);
        }
    }
});
//# sourceMappingURL=ErrorsListComponent.js.map