import {Component} from 'angular2/core';
import {ContactDetailsComponent} from './contact-details.component';
import {ContactService} from './contact-service';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'contact-list',
    template: `
   <ul>
        <li *ngFor="#contact of contacts"
              (click) = 'onSelect(contact)'
        [class.clicked] = 'selectedContact === contact'
         >
         {{contact.firstName}} {{contact.lastName}}
        
        </li>
     </ul>
         <contact-details [slctedContact]="selectedContact">
    </contact-details>
    `,
    directives: [ContactDetailsComponent],
    providers: [ContactService],

})

export class ContactListComponent{

	public contacts: Contact[];

/*	public contacts=[
	  {firstName:"Prasun", lastName: "Singh", email: "prasunpower@hotmail.com", phoneNo:"7204904002"},
	    
	  {firstName:"Govind", lastName: "Singh", email: "prasunpower@gmail.com", phoneNo:"7204904002"},    
	    
	  {firstName:"Ayush", lastName: "Singh", email: "prasunpower@nomail.com", phoneNo:"7204904002"},    
	    
	  {firstName:"Ruby", lastName: "Singh", email: "prasunpower@homail.com", phoneNo:"7204904002"}    
	    
	  ];*/
	  
    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;
    }

	constructor(private contactService: ContactService) { }

	getContacts() {
		this.contactService.getContacts().then((contact: Contact[]) => this.contacts = contact);
	}

	ngOnInit() {
		this.getContacts();
	}
}