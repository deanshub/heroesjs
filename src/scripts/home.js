'use strict';
export class Home{
	constructor(
		relevance = null,
		buildings = {
			hall : {ability: function(owner){
					  	console.log('ability Town Hall was called...');
					  	owner.resources.gold += 1000;
					  }
					 },
			tower : null,
			tavern : null,
			blacksmith : null,
			tradeCenter : null,
			mageGuild : null,
			special1 : null,
			special2 : null,
			special3 : null,
			special4 : null,
			special5 : null,
			warrior1 : null,
			warrior2 : null,
			warrior3 : null,
			warrior4 : null,
			warrior5 : null,
			warrior6 : null,
			warrior7 : null
		},
		type = 1,
		warriors = [],
		hero = null,
		built = false
	){
		this.relevance = relevance;
		this.buildings = buildings;
		this.type = type;
		this.warriors = warriors;
		this.hero = hero;
		this.built = built;
	}
}