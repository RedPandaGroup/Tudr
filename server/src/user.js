'use strict'

export default class User{

	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	isValid() {
		return this.name != undefined && this.email != undefined;
	}
}