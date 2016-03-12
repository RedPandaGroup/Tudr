'use strict'

import User from '../src/user'
import {expect} from 'chai';

describe('User', () => {
	it('Is valid when no fields are null', () => {
		let user = new User('Boris', 'boris@gmail.com');
		expect(user.isValid()).to.equal(true);
	})
})