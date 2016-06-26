import {Component} from 'angular2/core';
import {ContactListComponent} from './contact/contact-list.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {NewContactComponent} from './contact/new-contact.component';

@Component({
    selector: 'my-app',
    template: `
    <header>
    <nav>
    <a [routerLink]="['Contacts']">Contacts</a> &nbsp;
    <a [routerLink]="['NewContact']">New Contacts</a>
    </nav>
    </header>
    <div class="main">
    <router-outlet> </router-outlet> 
    </div> 
    `,

    directives: [ROUTER_DIRECTIVES],
})

	@RouteConfig([
		{ path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
		{ path: '/newcontacts', name: 'NewContact', component: NewContactComponent },
		
	])


export class AppComponent {

}

/*Checked and working fine*/