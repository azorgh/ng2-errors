import {Component} from "angular2/core";
import {Title} from "angular2/src/platform/browser/title";
import {BreadcrumbComponent} from "../../Breadcrumb/Components/BreadcrumbComponent";
import {ErrorsService} from "../Services/ErrorsService";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ErrorDetailComponent} from "./ErrorDetailComponent";
import {ErrorsListComponent} from "./ErrorsListComponent";

@Component({
    selector: 'errors',
    template: '<router-outlet></router-outlet>',
    directives: [BreadcrumbComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: ErrorsListComponent, name: "ErrorsList", useAsDefault: true},
    {path: '/:id', component: ErrorDetailComponent, name: "ErrorDetail"}
])
export class ErrorsComponent{

}
