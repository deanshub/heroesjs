'use strict';
export class Building{
	constructor(
		type,
		dependencies=[],
		cost=null,
		ability=null,
		owner=null
	){
		this.type = type;
		this.dependencies = dependencies;
		this.cost = cost;
		this.ability = ability;
		this.owner = owner;
	}
}