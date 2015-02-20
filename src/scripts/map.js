'use strict';
export class Map{
	constructor(
		view,
		homes = [],
		// todo: maybe there is no need for width and height, just view is enough
		width = 10,
		height = 10,
		buildings = []
	){
		this.view = view;
		this.homes = homes;
		this.width = width;
		this.height = height;
		this.buildings = buildings;
	}
}