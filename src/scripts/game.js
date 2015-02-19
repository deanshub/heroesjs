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
var hero2 = new Hero();
var hero3 = new Hero();
var warrior1 = new Warrior();
var building1 = new Building();
var magic1 = new Magic();
var player1 = new Player('Blue',[hero1]);
var player2 = new Player('Green',[hero2]);
var player3 = new Player('Yellow',[hero3]);
var home1 = new Home(player1);
var home2 = new Home(player2);
var home3 = new Home(player3);
var players = [player1,player2,player3];
var homes = [home1,home2,home3];
var map = new Map(homes);

// console.log('***Hero:\n',print(hero1));
// console.log('***Warrior:\n',print(warrior1));
// console.log('***Map:\n',print(map1));
// console.log('***Home:\n',print(home1));
// console.log('***Player:\n',print(player1));
// console.log('***Building:\n',print(building1));
// console.log('***Magic:\n',print(magic1));

class Game{
	constructor(map,players){
		this.turn = 0;
		this.day = 0;
		this.week = 0;
		this.players = players;
		this.map = map;
	}
	
	winner(){
		if (this.players.length == 1)
			return true;
		return false;
	}

	displayDate(){
		return (this.day % 7)+1;
	}
	
	dailyInit(){
		var isWeekInit = this.displayDate()==1;
		console.log(isWeekInit);
		if (isWeekInit)
			this.week++;

		// Players initiation
		this.players.forEach((player)=>{
			player.heroes.forEach((hero)=>{
				hero.heroInit.call(hero);
			});
		});

		// 
		this.map.content.buildings.forEach(function(building){
			if (building.relevance){
				building.ability.call(building,isWeekInit);
			}
		});

		this.map.content.homes.forEach(function(home){
			for (var building in home.buildings){
				if (home.buildings[building] && home.relevance){
					home.buildings[building].ability.call(home,home.relevance,isWeekInit);
				}
			}
		});
	}

	switchDay(){
		this.day++;
		this.dailyInit.call(this);
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
		while (!this.winner() && this.week < 2)
		{
			console.log('this.turn = ',this.turn);
			console.log('this.week = ',this.week);
			console.log('this.day  = ',this.displayDate());
			// players turn
			this.players[indexTurn].playTurn.call(this.players[indexTurn],this.map);
			console.log(print(this.players[indexTurn]));
			// end of turn
			indexTurn = this.switchTrun();
			//window.setTimeout(wait(),2000);
		}
		console.log('Winner is:...[DRUMS]\n',print(this.players[0]));
	}
}
var game = new Game(map,players);
console.log('Game begins...');
//console.log(player1.homes);
game.start.call(game);