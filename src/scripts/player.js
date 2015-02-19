'use strict';
import { Hero } from './hero';
//import { Home } from './home';
//import { Hero } from './hero';
export class Player{
	constructor(
		color,
		heroes = [],
		resources = {
			gold:300,
			woods:0,
			stones:0,
			jems:0
		}
		// map
	){
		// this.map = map
		this.heroes = heroes;
		this.resources = resources;
		this.color = color;
	}

	playTurn(map){
		var action;
		console.log(this.color + ' turn played...');
		do {
			action = prompt('Enter an action:');
			switch (action){
				case 'buy hero':
					this.buyHero();
					break;
				case 'heroActions':
					this.heroes[prompt('choose a hero number between 1-' + this.heroes.length)-1].heroAction(map,this);
					break;
				default:
					break;
			}
		} while (action != 'e');
		console.log(action);
	}

	buyHero(){
		var newHero = new Hero();
		if (this.canAfford(250)){
			this.heroes.push(newHero);
			this.resources.gold -= 250;
		}
	}

	canAfford(value){
		if (this.resources.gold >= value){
			return true;
		}
		console.log('Sorry you cannot afford to buy this one...');
		return false;
	}
}