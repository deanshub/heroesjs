'use strict';
export function print(instanse) {
	let output='';
	for(let prop in instanse){
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

export const MAX_WEEKS_TILL_END = 2;