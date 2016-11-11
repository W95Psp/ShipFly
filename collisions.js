
// var ac = new Array();
var waw = new Array();
function collision(){
	var ac = new Array();
	for(var i in avion_coords){
		var coord = avion_coords[i];
		coord = car2pol(coord);
		coord[1]+=(gravite/4*0.3);
		coord = pol2car(coord);
		coord[0] += 80+132/2;
		coord[1] += 34/2+avionPosY;
		ac.push(coord);
	}
	var droites = new Array();
	droites.push(eqLine(ac[0], ac[1]));
	droites.push(eqLine(ac[0], ac[2]));
	droites.push(eqLine(ac[1], ac[3]));
	droites.push(eqLine(ac[2], ac[3]));
	var isThereAnyCollision = false;
	var wLine = 8;
	for(var i in obstacles){
		var p = [obstacles[i].pos[0]+realPosX*48+currentPosX, obstacles[i].pos[1]];
		var drt1 = eqLine([wLine+p[0],wLine+p[1]], [-wLine+p[0],-wLine+p[1]]);
		var drt2 = eqLine([-wLine+p[0],wLine+p[1]], [wLine+p[0],-wLine+p[1]]);
		var drt3 = eqLine([-wLine+p[0],p[1]], [wLine+p[0],p[1]]);
		var acol = collision_inter_droites(droites, drt1);
		var bcol = collision_inter_droites(droites, drt2);
		var ccol = collision_inter_droites(droites, drt3);
		if(acol || bcol || ccol){
			if(obstacles[i].type==1){
				drawSomeDroites(new Array(drt1, drt2, drt3), 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)');
				loose();
			}else{
				score+=1.6;
				delete obstacles[i];
			}
		}
	}
	
	for(var n=0; n<2; n++){
		if(n==0)
			var ancPt = [-5+currentPosX, -5];
		else
			var ancPt = [-5+currentPosX, 325];
		for(var i=0; i<7; i++){
			if(n==0)
				var pt = [currentPosX+i*48, points[i][n]];
			else
				var pt = [currentPosX+i*48, 320-points[i][n]];
			var drt = eqLine(ancPt, pt);
			isThereAnyCollision = collision_inter_droites(droites, drt);
			if(isThereAnyCollision){
				drawSomeDroites(new Array(drt), 'rgba(0,0,0,0.1)', 'red');
				break;
			}
			ancPt = pt;
		}
		if(isThereAnyCollision){
			break;
		}
	}
	if(isThereAnyCollision){
		loose();
	}
}

function loose(){
	imgs.screen = loadImg(htmlCanvas.toDataURL());
	sg();
	setTimeout("start_scene('lost')", 300);
}