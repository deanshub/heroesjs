export function print(instanse) {
	'use strict';
	var output='';
	for(var prop in instanse){
		if (typeof instanse[prop] != 'function')
		output+=prop+' = '+instanse[prop]+'\n';
	}
	return output;
}