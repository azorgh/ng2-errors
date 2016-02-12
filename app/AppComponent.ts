import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from "./Header/Components/HeaderComponent";
import {HomeComponent} from "./Home/Components/HomeComponent";
import {ErrorsComponent} from "./Errors/Components/ErrorsComponent";
import {FooterComponent} from "./Footer/Components/FooterComponent";

@Component({
  selector: 'my-app',
  template: `
    <div class="mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
      <header></header>
      <div class="ribbon"></div>
      <main class="mdl-layout__content">

        <div class="container mdl-grid">
          <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
          <div class="content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
              <router-outlet></router-outlet>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  `,
  directives : [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true},
  {path: '/errors/...', component: ErrorsComponent, name : 'Errors'}
])
export class App{

}
