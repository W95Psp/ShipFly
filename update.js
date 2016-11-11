all.game.updateData = function(){
	currentAvion+=0.2;
	currentPosX-=vitDepPosX;
	if(currentAvion>=4)
		currentAvion = 0;
	
	avionPosY += gravite;
	if(iEvents.clickOrTouchDown){
		if(gravite>0)gravite-=0.22;
		gravite-=0.18;
	}else{
		gravite+=0.18;
	}
	if(gravite>4)
		gravite = 4;
	if(gravite<-4)
		gravite = -4;
	
	if(currentPosX<=-48){
		vitDepPosX+=0.01;
		realPosX-=1;
		var newTab = new Array();
		for(var i = 1; i<points.length; i++){
			newTab.push([points[i][0], points[i][1]]);
		}
		newTab[points.length-1] = [rand(40)+30, rand(40)+30];
		points = newTab.slice(0);
		currentPosX = 0;
		score+=0.2;
	}
	if((score+5)%40<4){
		bornes+=5;
	}
	collision();
}