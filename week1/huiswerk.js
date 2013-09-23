/**
 *  Object Constructor using 'prototype'
 *	
 *
 */

function Persoon(name) {
  	this.name = name;  
	   



 Persoon.prototype.speak = function(bob){
 	console.log('Hi, my name is ' + this.name);

 }



 Persoon.prototype.walk = function(){
}

Persoon.prototype.eat = function(){
}

var Persoon = {
	name: 'bob',
	speak: function (){

	}
	eat: function(){
	walk: function(){

	}	
	}
}

function Stone(name) {
	this.name = name;
}
	Stone.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

var rob = new Alien('Robert Rock');

rob.speak();





(function () {
	function Stone(name) {
		this.name = name;
	}
	
	Stone.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
	
	var Iterator = new Stone("Sjoerd");
	
	var Max = 'max';

	var Min = 'min';
	
}

	var Iterator = new Stone("Sjoerd");
	
	var Max = 'max';

	var Min = 'min';


	//Een closure is een functie die onthoudt in welke context hij is gemaakt. of beter uitgelegd: een closure is een innerfunctie die toegang heeft tot de lokale variabelen die op het moment van maken
	//van de closure gekend zijn. Dit wil zeggen dat de de variabelen nog altijd gekend zijn bij de uitvoering van de functie
	//Met behulp van closures is het mogelijk een functie één of meer privé-variabelen te geven die blijven bestaan tussen de verschillende aanroepen van die functie.


	var eliaNne = function (){
		var a = 0;

	}
	return function (){
		a++;
		return a;
	};
	}









