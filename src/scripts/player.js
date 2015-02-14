'use strict';
export class Player{
	constructor(
		heroes = [],
		homes = [],
		resources = {
			gold:0,
			silver:0,
			stones:0,
			jems:0
		}
		// map
	){
		// this.map = map
		this.heroes = heroes;
		this.homes = homes;
		this.resources = resources;
	}
}