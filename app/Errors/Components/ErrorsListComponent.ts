import {Component} from "angular2/core";
import {Title} from "angular2/src/platform/browser/title";
import {BreadcrumbComponent} from "../../Breadcrumb/Components/BreadcrumbComponent";
import {ErrorsService} from "../Services/ErrorsService";
import {ErrorDetailComponent} from "./ErrorDetailComponent";
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'errors',
    templateUrl: '/app/Errors/Templates/ErrorsListTemplate.html',
    directives: [BreadcrumbComponent, RouterLink]
})
export class ErrorsListComponent{
    public breadcrumb : Array<string>;
    public errors;

    constructor(private _title: Title, private _errorsService: ErrorsService){}

    ngOnInit(){
        this._title.setTitle('Angular2 Errors - List');
        this.breadcrumb = ['Home', 'Errors list'];
        this.getErrors();
    }

    getErrors(){
        return this._errorsService.getErrors().then(res => this.errors = res);
    }
}
