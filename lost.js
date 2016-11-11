all.lost = {};
all.lost.updateData = function(){
	
}
all.lost.posText = 400;
all.lost.fadeColor = 0;
all.lost.fadeColorInc = 0.005;
all.lost.draw = function(){
	ctx.drawImage(imgs.screen, 0, 0);
	clear('rgba(0, 0, 0, '+all.lost.fadeColor+')');
	if(all.lost.fadeColor<0.8){
		all.lost.fadeColor+=all.lost.fadeColorInc;
		all.lost.fadeColorInc+=0.005;
	}else if(all.lost.fadeColor!=0.8)
		all.lost.fadeColor = 0.8;
	if(all.lost.fadeColor==0.8){
		if(all.lost.posText>100)
			all.lost.posText-=12;
		ctx.font = '65px impact';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'white';
		ctx.fillText("Perdu !", 240, all.lost.posText, 480);
		ctx.font = '16px arial';
		ctx.fillText("Ahaha, t'es nul, t'as perdu, hahaha !", 240, all.lost.posText+30, 480);
		ctx.fillText("Ton score : "+Math.floor(score), 240, all.lost.posText+48, 480);
		
		
		if(iEvents.pos.y>all.lost.posText+95&&iEvents.pos.y< all.lost.posText+165){
			ctx.font = '50px sanzaeazes';
			if(iEvents.clickOrTouchDown)
				window.location = "http://82.236.232.60:8080/HTML5Game/ShipFly";
		}else{
			ctx.font = '40px sanzaeazes';
		}
			ctx.fillText("Revenir au menu", 240, all.lost.posText+150, 480);
	}
}