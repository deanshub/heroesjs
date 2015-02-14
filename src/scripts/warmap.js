'use strict';
export class WarMap extends Map{
	constructor(
		side1 = [],
		side2 = [],
		turns = []
	){
		this.side1 = side1;
		this.side2 = side2;
		this.turns = turns;
	}
}