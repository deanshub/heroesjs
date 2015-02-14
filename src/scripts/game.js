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
var player1 = new Player();
var building1 = new Building();
var magic1 = new Magic();

console.log('***Hero:\n',print(hero1));
console.log('***Warrior:\n',print(warrior1));
console.log('***Map:\n',print(map1));
console.log('***Home:\n',print(home1));
console.log('***Player:\n',print(player1));
console.log('***Building:\n',print(building1));
console.log('***Magic:\n',print(magic1));