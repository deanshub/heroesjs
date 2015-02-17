'use strict';
export class Player{
	constructor(
		color,
		heroes = [],
		homes = [],
		buildings = [{resourceWood : {ability: function(){
					  	console.log('ability resourceWood was called...');
					  	this.resources.woods += 2;
					  }
					 }}],
		resources = {
			gold:0,
			woods:0,
			stones:0,
			jems:0
		}
		// map
	){
		// this.map = map
		this.heroes = heroes;
		this.homes = homes;
		this.buildings = buildings;
		this.resources = resources;
		this.color = color;
		this.buildings = buildings;
	}

	playTurn(){
		console.log(this.color + ' turn played...');
	}
}