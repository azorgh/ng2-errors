System.register(["angular2/core", "../Services/ErrorsService", "angular2/src/platform/browser/title", "../../Breadcrumb/Components/BreadcrumbComponent", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ErrorsService_1, title_1, BreadcrumbComponent_1, router_1;
    var ErrorDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ErrorsService_1_1) {
                ErrorsService_1 = ErrorsService_1_1;
            },
            function (title_1_1) {
                title_1 = title_1_1;
            },
            function (BreadcrumbComponent_1_1) {
                BreadcrumbComponent_1 = BreadcrumbComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ErrorDetailComponent = (function () {
                function ErrorDetailComponent(_title, _errorsService, _params) {
                    this._title = _title;
                    this._errorsService = _errorsService;
                    this._params = _params;
                }
                ErrorDetailComponent.prototype.ngOnInit = function () {
                    this._title.setTitle('Angular2 Errors - Detail');
                    this.breadcrumb = ['Home', 'Errors list', 'Detail'];
                    this.getError(this._params.get('id'));
                };
                ErrorDetailComponent.prototype.getError = function (id) {
                    var _this = this;
                    this.error = this._errorsService.getById(id).then(function (res) { return _this.error = res; });
                };
                ErrorDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'error-detail',
                        templateUrl: 'app/Errors/Templates/ErrorDetailTemplate.html',
                        directives: [BreadcrumbComponent_1.BreadcrumbComponent]
                    }), 
                    __metadata('design:paramtypes', [title_1.Title, ErrorsService_1.ErrorsService, router_1.RouteParams])
                ], ErrorDetailComponent);
                return ErrorDetailComponent;
            })();
            exports_1("ErrorDetailComponent", ErrorDetailComponent);
        }
    }
});
//# sourceMappingURL=ErrorDetailComponent.js.map