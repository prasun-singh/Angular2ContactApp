import {Injectable} from 'angular2/core';
import {Contacts} from './mock-contact';
import {Contact} from './contact';

@Injectable{ }
export class ContactService {

	getContacts() {
		return Promise.resolve(Contacts)
	}

	insertContact(contact: Contact) {
		Promise.resolve(Contacts).then((contacts: Contact[]) => contacts.push(contact))

	}
}