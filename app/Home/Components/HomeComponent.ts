import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {BreadcrumbComponent} from "../../Breadcrumb/Components/BreadcrumbComponent";
import {Title} from "angular2/platform/browser";

@Component({
    selector: 'home',
    templateUrl: 'app/Home/Templates/HomeTemplate.html',
    directives: [BreadcrumbComponent, RouterLink]
})
export class HomeComponent{
    breadcrumb : Array<string>;

    constructor(private _title: Title){}

    ngOnInit(){
        this._title.setTitle('Angular2 Errors - Home');
        this.breadcrumb = ['Home', 'Getting started'];
    }
}