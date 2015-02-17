'use strict';
export function print(instanse) {
	var output='';
	for(var prop in instanse){
		switch (typeof instanse[prop]){
			case 'function':
				break;
			case 'object':
				output+= prop+' = \n' + '{ ' + print(instanse[prop]) + '}\n';
				break;
			default:
				output+=prop+' = '+instanse[prop]+'\n';
		}
	}
	return output;
}