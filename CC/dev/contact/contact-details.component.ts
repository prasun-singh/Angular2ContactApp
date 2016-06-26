import {Component} from 'angular2/core';

@Component({
    selector: 'contact-details',
    template: `
First Name: <input [(ngModel)] ="slctedContact.firstName" type="text">
    <div>
        Last Name: <input [(ngModel)] ="slctedContact.lastName" type="text"><br>
        Phone: <input [(ngModel)] ="slctedContact.phoneNo" type="text"><br>
        Email: <input [(ngModel)] ="slctedContact.email" type="text"><br>
     </div> 
     `,

    inputs: ['slctedContact'],


})


export class ContactDetailsComponent {

    public slctedContact = {}

}  