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
			wood:0,
			stone:0,
			jems:0
		}
		// todo:prvivate view of the map
	){
		// this.map = map (for the prvivate view)
		this.heroes = heroes;
		this.resources = resources;
		this.color = color;
	}

	playTurn(map){
		let action;
		console.log(this.color + ' turn played...');
		do {
			action = prompt('Enter an action:');
			switch (action){
				case 'buy hero':
					this.buyHero();
					break;
				case 'heroActions':
					this.heroes[prompt('choose a hero number between 1-' + this.heroes.length)-1].promptAction(map, this);
					break;
				default:
					break;
			}
		} while (action != 'e');
		console.log(action);
	}

	// Player's Actions
	buyHero(){
		// todo: make this by param and choose who gives the param
		let newHero = new Hero();
		if (this.canAfford(250)){
			this.resources.gold -= 250;
			this.heroes.push(newHero);
		}
	}

	// todo: this should be a more general function
	canAfford(value){
		if (this.resources.gold >= value){
			return true;
		}
		console.log('Sorry you cannot afford to buy this one...');
		return false;
	}
}