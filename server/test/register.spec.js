'use strict';

import {expect} from 'chai';
import register from '../src/register';
import User from '../src/user';

describe('register', () => {
	it('Returns 201 when successful', () => {
		let user = new User('boris', 'boris@gmail.com');
		expect(register(user)).to.equal(201);
	});

	it('Returns 400 when given an invalid user to register', () => {
		let user = new User(undefined, undefined);
		expect(register(user)).to.equal(400);
	});
});
