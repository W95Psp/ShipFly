var imgs = {};

imgs.background = loadImg("back.png");
imgs.brouillard = loadImg("br.png");
imgs.avion = new Array();
imgs.avion.push(loadImg("a1.png"));
imgs.avion.push(loadImg("a2.png"));
imgs.avion.push(loadImg("a3.png"));
imgs.avion.push(loadImg("a4.png"));
var obstacles = new Array();
var bornes = 40;
function genObs(){
	obstacles.push({pos: [500-realPosX*48, rand(320-bornes*2-60)+60+bornes], type: rand(1)});
	var prbDeux = rand(100);
	var doDeux = false;
	if(score>300&&prbDeux>20)
		doDeux = true;
	else if(score>240&&prbDeux>30)
		doDeux = true;
	else if(score>200&&prbDeux>40)
		doDeux = true;
	else if(score>160&&prbDeux>50)
		doDeux = true;
	else if(score>120&&prbDeux>55)
		doDeux = true;
	else if(score>80&&prbDeux>70)
		doDeux = true;
	else if(score>40&&prbDeux>85)
		doDeux = true;
	if(doDeux)
		obstacles.push({pos: [500-realPosX*48, rand(320-bornes*2-60)+60+bornes], type: rand(1)});
	var rrr = score*2;
	if(rrr>500)rrr = 500;
	var rrrr = score/80+(score>40);
	if(rrrr>6)rrrr = 6;
	setTimeout('genObs();', Math.round((800-rrr)+200*rand(10-rrrr)));
}

function doBr(){
	brValue = rand(80);
	brPos = 500-realPosX*48;
	setTimeout('doBr();', 15000+2000*rand(5));
}
var clearColored = false;
var clearColoredTimer = 0;
var brPos = 0;
var brValue = 0;
function doColor(){
	clearColored = 3;clearColoredTimer=50;
	setTimeout('doColor();', 10000+rand(5000));
}

avion_coords = new Array([-62, 4], [-22, -17], [-22, 17], [67, 0]);

var points = new Array();
for(var i=0; i<12; i++){
	points.push([rand(40)+30, rand(40)+30]);
}
var currentPosX = 0;
var vitDepPosX = 6;
var realPosX = 0;
var avionPosY = 120;
var currentAvion = 0;

all.game.onstart = function(){
	setTimeout('doBr();', 6000);
	setTimeout('genObs();', 2200);
	setTimeout('doColor();', 1000);
	ctx.font = '17px impact';
	ctx.textAlign = 'start';
	ctx.fillStyle = 'white';
}

var gravite = 1;

initGame(all, 'game', 480, 320, 40);
start_scene('game');