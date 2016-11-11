function drawVersant(n){
	ctx.beginPath();
	var f = true;
	if(n==0){
		ctx.moveTo(-5+currentPosX, -5);
		for(var i in points){
			ctx.lineTo(i*48+currentPosX, points[i][n]);
		}
		ctx.lineTo(535+currentPosX, -5);
	}else{
		ctx.moveTo(-5+currentPosX, 325);
		for(var i in points){
			ctx.lineTo(i*48+currentPosX, 320-points[i][n]);
		}
		ctx.lineTo(535+currentPosX, 325);
	}
	ctx.lineWidth = 15;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillStyle = '#57330d';
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
function drawSomeDroites(DRTS, c1, c2){
	ctx.lineWidth = 2;
	if(!c1)
		c1 = 'rgba(255, 0, 0, 0.1)';
	if(!c2)
		c2 = 'black';
	for(var i in DRTS){
		ctx.strokeStyle = c1;
		ctx.beginPath();
		var d = DRTS[i];
		ctx.moveTo(0, d.b);
		ctx.lineTo(d.xMin, d.a*d.xMin+d.b);
		ctx.stroke();
		ctx.closePath();
		
		ctx.strokeStyle = c2;
		ctx.beginPath();
		var d = DRTS[i];
		ctx.moveTo(d.xMin, d.a*d.xMin+d.b);
		ctx.lineTo(d.xMax, d.a*d.xMax+d.b);
		ctx.stroke();
		ctx.closePath();
		
		ctx.strokeStyle = c1;
		ctx.beginPath();
		var d = DRTS[i];
		ctx.moveTo(d.xMax, d.a*d.xMax+d.b);
		ctx.lineTo(480, d.a*480+d.b);
		ctx.stroke();
		ctx.closePath();
	}
}

function drawObstacles(){
	for(var i in obstacles){
		ctx.beginPath();
		ctx.arc(obstacles[i].pos[0]+realPosX*48+currentPosX, obstacles[i].pos[1], 10, 0 , 2 * Math.PI, false);
		if(obstacles[i].type!=1){
			ctx.fillStyle = 'green';
		}else{
			ctx.fillStyle = 'red';
		}
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = 'rgba(0,0,0,0.2)';
		ctx.stroke();
	}
}
var colors = new Array('red', 'blue', 'white', 'orange', 'purple', 'green', 'black');
all.game.draw = function(){
	ctx.drawImage(imgs.background, 0, 0);
	if(clearColored>0){
		clear(colors[clearColored-1]);
		if(clearColoredTimer%3==0)
			clearColored++;
		if(clearColored>colors.length)
			clearColored = 1;
		clearColoredTimer--;
		if(clearColoredTimer==0)
			clearColored = 0;
	}
	
	ctx.save();
	ctx.translate(80+132/2, 34/2+avionPosY);
	ctx.rotate(gravite/4*0.3);
	ctx.drawImage(imgs.avion[Math.floor(currentAvion)], -132/2, -34/2);
	ctx.restore();
	
	drawObstacles();
	
	drawVersant(0);
	drawVersant(1);
	
	if(brValue>0){
		ctx.globalAlpha = brValue/100;
		ctx.drawImage(imgs.brouillard, brPos+currentPosX+realPosX*48, 0);
		// brPos+=vitDepPosX/2;
		if(brPos+currentPosX+realPosX*48+1000<0){
			brValue = 0;
		}
		ctx.globalAlpha = 1;
	}
	ctx.fillStyle = 'white';
	ctx.fillText(Math.floor(score), 10, 290);
}