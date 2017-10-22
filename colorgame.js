var color = generaterandomcolors(6);

var tables=document.querySelectorAll(".table");
var pickedcolor = pickcolor();
var title=document.getElementById("title");
var h2=document.getElementById("main");
var h3=document.getElementById("main2");
var h1=document.querySelector("h1");
var gameover = false ;
title.textContent = pickedcolor ;
h2.textContent = "PLAYING" ;
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
	color = generaterandomcolors(6);
	pickedcolor = pickcolor();
	title.textContent = pickedcolor ;
	for(var i=0; i<tables.length; i++){
		tables[i].style.background = color[i] ;
	}
	h1.style.background =  "rgb(20, 200, 200)" ;
});




for(var i = 0; i < tables.length; i++) {
	tables[i].style.background = color[i] ;
    tables[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor){
			h2.textContent = "Correct!!PLAYAGAIN?";
			changecolor(clickedcolor);
			h1.style.background =  clickedcolor ;
		}
		else{
			this.style.background = "#232323";
		}
	});
}
function changecolor(colors){
	for(var i=0; i<tables.length; i++){
		tables[i].style.background = colors ;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}
function generaterandomcolors(num){
	var arr = [] ;
	for(var i=0 ; i<num ; i++){
        arr.push(randomcolors());
	}
  	return arr ;
}
function randomcolors(){
 	var r = Math.floor(Math.random()*256) ;
 	var g = Math.floor(Math.random()*256) ;
 	var b = Math.floor(Math.random()*256) ;
 	 return "rgb(" + r + ", " + g + ", " + b+")" ;
}




