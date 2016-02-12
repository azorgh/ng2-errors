import {Component, Input} from 'angular2/core';

@Component({
    selector: 'breadcrumb',
    templateUrl: 'app/Breadcrumb/Templates/BreadcrumbTemplate.html'
})
export class BreadcrumbComponent{
    @Input() breadcrumb;
}