'use strict';
export class Home{
	constructor(
		buildings = {
			cityHall:null,
			marketPlace:null
		},
		type = 1,
		warriors = [],
		hero = null,
		built = false
	){
		this.buildings = buildings;
		this.type = type;
		this.warriors = warriors;
		this.hero = hero;
		this.built = built;
	}
}