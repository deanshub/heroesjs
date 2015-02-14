'use strict';
export class Magic{
	constructor(
		content,
		whereCanBeUsed,
		level=0
	){
		this.content = content;
		this.whereCanBeUsed = whereCanBeUsed;
		this.level = level;
	}

	apply(warrior){
		return this.content.call(warrior/*, args (maybe should be this or hero that cast)*/);
	}
	premitedPositions(map){
		return this.whereCanBeUsed.call(map);
	}
}