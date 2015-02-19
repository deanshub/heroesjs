'use strict';
export class Hero{
	constructor(
		attack=1, 
		defense=1, 
		power=1, 
		knoledge=1, 
		magicks=[], 
		warriors=[], 
		artifacts={ 
			head:null,
			neck:null,
			leftHand:null,
			rightHand:null,
			body:null,
			leftLeg:null,
			rightLeg:null
		},
		artifactBox = [],
		skills = [], 
		speed = 5, 
		exp = 1
	){
		this.attack = attack;
		this.defense = defense;
		this.power = power;
		this.knoledge = knoledge;
		this.magicks = magicks;
		this.warriors = warriors;
		this.artifacts = artifacts;
		this.artifactBox = artifactBox;
		this.skills = skills;
		this.speed = speed;
		this.exp = exp;
		this.speedTrun = speed;
	}

	heroAction(map,player){
		var action = prompt('choose an heroAction:');
		switch(action){
			case 'Walk':
				this.walk.call(this);
				break;
			case 'Caputre A building':
				this.captureBuilding(map,player);
				break;
			default:
				break;
		}
	}

	heroInit(){
		this.speedTrun = this.speed;
	}

	walk(){
		if (this.speedTrun !== 0) {
			var steps = prompt('who many steps?');
			if (steps > this.speedTrun){
				console.log(`you are going only ${this.speedTrun} steps`);
				this.speedTrun = 0;
			} else {
				this.speedTrun -= steps;
			}
		}
	}

	captureBuilding(map,player){
		var idOnMap = prompt(`choose the id of the captured building [1-${map.content.buildings.length}]:`);
		map.content.buildings[idOnMap-1].relevance = player;
		console.log(map.content.buildings);
	}
}