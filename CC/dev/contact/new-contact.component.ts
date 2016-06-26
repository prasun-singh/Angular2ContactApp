import {Component} from 'angular2/core';
import {ContactService} from './contact-service';
import {Contact} from './contact';

@Component({
	template: ` 
	   <form #myForm='ngForm' (ngSubmit)='createContact()'>
	   <div>
        <label form='last-name'> First Name:</label>
	   <input type=text id='firstName'
	       ngControl='firstName'
	       required
	       [(ngModel)]='newContact.firstName'>
	   </div>
	  
	   <div>
	   <label form='last-name'> Last Name: </label>
	    <input id='lastName' type=text
	    ngControl='lastName'
	       required
	       [(ngModel)]='newContact.lastName'>
	   </div>
	  
	   <div>
	   <label form='email'>Email</label>
	   <input id='email' type=text
	   ngControl='email'
	       required
	       [(ngModel)]='newContact.email'>
	   </div>
	   
	   <div>
	   <label form='phoneNo'>Phone No:</label>
	   <input id='phoneNo' type=text
	   ngControl='phoneNo'
	       required
	       [(ngModel)]='newContact.phoneNo'>
	   </div>
	   <button type='submit'>Create Contact</button>
	   </form>
        `,

     providers[ContactService],
     styles[`.ng-pristine{
     	border: 1px solid blue;
     }`]   

    

})


export class NewContactComponent {

	newContact: Contact

	constructor (private _contactService: ContactService){}

	createContact(){

		this._contactService.insertContact(dummyContact)
	}

}