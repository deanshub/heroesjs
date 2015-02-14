'use strict';
export class Warrior{
	constructor(
		amount = 1,
		attack = 1,
		defense = 1,
		damage = 1,
		health = 1,
		speed = 1,
		type = 1
		// diseases=[]
	){
		this.amount = amount;
		this.attack = attack;
		this.defense = defense;
		this.damage = damage;
		this.health = health;
		this.speed = speed;
		this.type = type;
		// this.diseases = diseases;
	}
}