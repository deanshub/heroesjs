'use strict';
import { print } from './general/utils';
import { Hero } from './hero';
import { Warrior } from './warrior';
import { Map } from './map';
import { Home } from './home';
import { Player } from './player';
import { Building } from './building';
import { Magic } from './magic';

var hero1 = new Hero();
var warrior1 = new Warrior();
var map1 = new Map();
var home1 = new Home();
var building1 = new Building();
var magic1 = new Magic();
var player1 = new Player('Blue');
var player2 = new Player('Green');
var player3 = new Player('Yellow');
var players = [player1,player2,player3];

// console.log('***Hero:\n',print(hero1));
// console.log('***Warrior:\n',print(warrior1));
// console.log('***Map:\n',print(map1));
// console.log('***Home:\n',print(home1));
// console.log('***Player:\n',print(player1));
// console.log('***Building:\n',print(building1));
// console.log('***Magic:\n',print(magic1));

class Game{
	constructor(players){
		this.turn = 0;
		this.day = 0;
		this.week = 0;
		this.players = players;
	}
	
	winner(){
		if (this.players.length == 1)
			return true;
		return false;
	}

	displayDate(){
		return (this.day % 7)+1;
	}
	
	dailyPayment(){
		this.players.forEach(function(player){
			player.buildings.forEach(function (building){
				console.log(building);
				for (var build in building){
					building[build].ability.call(player);
				}
			});
		});
	}

	weeklyPayment(){
		this.players.forEach(function(player){
			player.homes.forEach(function(home){
				for (var building in home.buildings){
					if (building){
						home.buildings[building].ability.call(home);
					}
				}
			});
		});
	}

	switchDay(){
		this.day++;
		this.dailyPayment.call(this);
		if (this.displayDate() == 1){
			this.week++;
			this.weeklyPayment.call(this);
		}
	}

	switchTrun(){
		var numTurn = ++this.turn % this.players.length;

		// when 
		if (numTurn === 0)
			this.switchDay();

		return numTurn;
	}

	start(){
		//function wait () { console.log('...');} 
		var indexTurn = 0;
		while (!this.winner() && this.week < 7)
		{
			console.log('this.turn = ',this.turn);
			console.log('this.week  = ',this.week);
			console.log('this.day  = ',this.displayDate());
			// players turn
			this.players[indexTurn].playTurn.call(this.players[indexTurn]);
			console.log(print(this.players[indexTurn]));
			// end of turn
			indexTurn = this.switchTrun();
			//window.setTimeout(wait(),2000);
		}
		console.log('Winner is:...[DRUMS]\n',print(this.players[0]));
	}
}

var game = new Game(players);
console.log('Game begins...');
game.start.call(game);