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
	}
}