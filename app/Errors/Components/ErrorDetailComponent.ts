import {Component} from "angular2/core";
import {ErrorsService} from "../Services/ErrorsService";
import {Title} from "angular2/src/platform/browser/title";
import {BreadcrumbComponent} from "../../Breadcrumb/Components/BreadcrumbComponent";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'error-detail',
    templateUrl: 'app/Errors/Templates/ErrorDetailTemplate.html',
    directives: [BreadcrumbComponent]
})
export class ErrorDetailComponent{
    private breadcrumb;
    private error;

    constructor(private _title: Title, private _errorsService: ErrorsService, private _params: RouteParams){}

    ngOnInit(){
        this._title.setTitle('Angular2 Errors - Detail');
        this.breadcrumb = ['Home', 'Errors list', 'Detail'];
        this.getError(this._params.get('id'));
    }

    getError(id){
        this.error = this._errorsService.getById(id).then(res => this.error = res);
    }
}