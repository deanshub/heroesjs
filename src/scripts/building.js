'use strict';
export class Building{
	constructor(
		type,
		dependencies=[],
		cost=null,
		abilities=[]
	){
		this.type = type;
		this.dependencies = dependencies;
		this.cost = cost;
		this.abilities = abilities;
	}
}