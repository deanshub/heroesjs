'use strict';
import { print, MAX_WEEKS_TILL_END } from './general/utils';
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
	constructor(
		map,
		players,
		playerTurn=0,
		day=0,
		week=0
	){
		this.playerTurn = playerTurn;
		this.day = day;
		this.week = week;
		this.players = players;
		this.map = map;
	}
	
	winner(){
		// If there is only one player left on the map - he is the winner
		if (this.players.length == 1){
			return true;
		}else{
			return false;
		}
	}

	displayDate(){
		return (this.day % 7)+1;
	}
	
	daily(){
		let newWeek = this.displayDate()==1;

		if (newWeek)
			this.week++;

		// Players initilization
		this.players.forEach((player)=>{
			player.heroes.forEach((hero)=>{
				hero.initialize();
			});
		});

		// Map initilization
		this.map.buildings.forEach(function(building){
			if (building.owner){
				// todo: check if needs more parameters
				building.ability(newWeek);
			}
		});

		// Homes initilization
		this.map.homes.forEach(function(home){
			if (home.owner){
				for (let building in home.buildings){
					if (home.buildings[building]){
						home.buildings[building].ability.call(home,home.owner,newWeek);
					}
				}
			}
		});
	}

	moveToNextDay(){
		this.day++;
		this.daily();
	}

	switchPlayerTrun(){
		// increases the turn by 1 and checks if its time for a new day
		let playerIndex = ++this.playerTurn % this.players.length;

		// when all the turns ended it time to moveToNextDay
		if (playerIndex === 0){
			this.moveToNextDay();
		}

		return playerIndex;
	}

	start(){
		let playerIndex = 0;
		while (!this.winner() && this.week < MAX_WEEKS_TILL_END)
		{
			console.log('this.playerTurn = ',this.playerTurn);
			console.log('this.week = ',this.week);
			console.log('this.day  = ',this.displayDate());
			// players turn
			// todo:maybe such things should be done with promise
			this.players[playerIndex].playTurn(this.map);
			console.log(print(this.players[playerIndex]));
			// end of turn
			playerIndex = this.switchPlayerTrun();
		}
		console.log('Winner is:...[DRUMS]\n',print(this.players[0]));
	}
}
let game = new Game(map,players);
console.log('Game begins...');
game.start();