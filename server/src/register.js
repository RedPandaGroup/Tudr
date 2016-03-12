'use strict';

export default function(user) {
	let responseCode = 400;
	if(user.isValid()) {
		responseCode = 201;
	}
	return responseCode;
}