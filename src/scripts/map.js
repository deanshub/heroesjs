'use strict';
export class Map{
	constructor(
		homes = [],
		width = 10,
		height = 10,
		buildings = [{ type:'resourceWood', 
							relevance: null,
							ability: function(){
					  			console.log('ability resourceWood was called...');
					  			this.relevance.resources.woods += 2;
					  		}
					 },{ type:'resourceWood',
							relevance: null,
							ability: function(){
					  			console.log('ability resourceWood was called...');
					  			this.relevance.resources.woods += 2;
					  		}
					 },{ type:'resourceStones',
							relevance: null,
							ability: function(){
					  			console.log('ability resourceWood was called...');
					  			this.relevance.resources.stones += 2;
					  		}
					 },
					 { type: 'resourceWarriors',
							relevance: null,
							ability: function(isWeekly){
								if (isWeekly){									
						  			console.log('this hero can buy warriors!!! if he will get here');
								}
					  		}
					 }
					 ]
	){
		this.content = {};
		this.width = width;
		this.height = height;
		this.content.homes = homes;
		this.content.buildings = buildings;

	}
}