var canvas;
var context;
var time = 0;
var perdu = new Image();
	perdu.src = "perdu.png";
var totalTime = 0;
var limitTime = 50*120;
var tpsLaser=0;
var gagner = new Image();
	gagner.src='gagner.png';
var score=0;

//////////////////FOND ECRAN/////////////
var parcours = new Image();	
    parcours.src = "funy.png";	
var board = new Image();
	board.src='board.png';		
var fondVit = 30;		

////////////////BALLES/////////////////
var posX = [];				
var posY = [];
var vitX = [];
var vitY = [];
var vitY2= [];
var vitX2=[];
var posX2=[];
var posY2=[];
var i = 0;
var vitMax = 4;
var nbBalles = 3;		
var parcours2 = new Image();
	parcours2.src = "meteorites.png";
var meteor = new Image();
	meteor.src = "dautre_meteorites.png";			
var r = 20; 

////////////////////CARRES///////////
var rayonCarre = 55/2;
var posX1 = [];
var posY1 = [];
var nbCarres = 6;
var vitX1 = [];
var vitY1 = [];
var vitMax2= 4;
var parcours3 = new Image();
	parcours3.src = "carres_1.png";		
var pvEnnemis = [100];	
var laserCarre = 3; 

//////////////////////////////Mob///////////////////
var parcours4 = new Image();
	parcours4.src = "vaisseau_ISN2.png";
var speed = 10;
var direction;	
var posXMob = 500;
var posYMob = 500;	
var pvmax = 200;
var pv= pvmax;
var rayon = 30;		

////////////////////LASER///////////////////////
var laserImg = new Image();
	laserImg.src = "laserV2.png";
var vitLaser = 4;
var posXL = [];
var posYL = [];
var posXL1 = [];
var posYL1 = [];
var l =0;
var nbLaser = 0;
var nbLaserMax = 1000;

var laserEnnemi = new Image();
	laserEnnemi.src="laserV3.png";
var posXLEnnemi = [];
var posYLEnnemi = [];
var posXL1Ennemi = [];
var posYL1Ennemi = [];
var laserEnnemiMax = 10;
var laserE = 0;
var vitLaser2 = 1;

///////////////////////////////
var imgpv10 = new Image();
	imgpv10.src="pv.png";
var imgpv9 = new Image();
	imgpv9.src=" pv9.png";
var imgpv8 = new Image();
	imgpv8.src='pv8.png';
var imgpv7= new Image();
	imgpv7.src='pv7.png';
var imgpv6 = new Image();
	imgpv6.src='pv6.png';
var imgpv5= new Image();
	imgpv5.src='pv5.png';
var imgpv4= new Image();
	imgpv4.src='pv4.png';
var imgpv3= new Image();
	imgpv3.src='pv3.png';	
var imgpv2= new Image();
	imgpv2.src='pv2.png';
var imgpv1= new Image();
	imgpv1.src='pv1.png';
var imgpv0=new Image();
	imgpv0.src='pv0.png';
	
var Direction = {
	Aucune	: {value: 0, name: "Aucune", code: "A"}, 
	Gauche	: {value: 1, name: "Gauche", code: "G"}, 
	Droite	: {value: 2, name: "Droite", code: "D"}, 
	Haut	: {value: 3, name: "Haut", code: "H"},
	Bas		: {value: 4, name: "Bas", code: "B"} 
};

window.onload = function()
{
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	var sound1=document.getElementById("universe");
	sound1.play();
	
	direction = Direction.Aucune;
	
	for ( i=0 ; i < nbBalles ; i++)	
	{
		posX[i] = Math.floor(Math.random()*canvas.width);
		posY[i] = 0;
		while(vitX[i] == 0 || vitX[i] == undefined) vitX[i] = Math.floor(Math.random()*vitMax - vitMax/2);	
		while(vitY[i] == 0 || vitY[i] == undefined) vitY[i] = Math.random()*vitMax;	
		
		posX2[i] = Math.floor(Math.random()*canvas.width);
		posY2[i] = 0;
		while(vitX2[i] == 0 || vitX2[i] == undefined) vitX2[i] = Math.random()*vitMax - vitMax/2;	
		while(vitY2[i] == 0 || vitY2[i] == undefined) vitY2[i] = Math.random()*vitMax;	
	}
	
	for ( i=0 ; i < nbCarres ; i++)    
	{
		posX1[i] = Math.floor(Math.random()*canvas.width);
		posY1[i] = 0;
		while(vitX1[i] == 0 || vitX1[i] == undefined) vitX1[i] = Math.random()*vitMax - vitMax/2;
		while(vitY1[i] == 0 || vitY1[i] == undefined) vitY1[i] = Math.random()*vitMax;	
		pvEnnemis[i]=100;
	}	

	dessine();
	
	setInterval(animate, 20);
}	

window.onkeydown=function(event)	
{
	switch (event.keyCode){
	case 39 : 
		direction = Direction.Droite;	
		break;

	case 37 : 
		direction = Direction.Gauche;	
		break;
		
	case 38 : 
		direction = Direction.Haut;
		break;
		
	case 40 : 
		direction = Direction.Bas;
		break;
	}	

	switch (event.keyCode){
	case 90:	
	nbLaser ++;
	}
}

window.onkeyup=function(event)	
{
	switch (event.keyCode)
	{
	case 39 : 
		direction = Direction.Aucune;	
		break;

	case 37 : 
		direction =Direction.Aucune;
		break;
		
	case 38 : 
		direction = Direction.Aucune;
		break;
		
	case 40 : 
		direction = Direction.Aucune;
		break;

	}	

	
}

function avance_position()
{
	
	for ( i=0 ; i < nbBalles ; i++)
	{
		if ( posY[i] > canvas.height - r )
		{
			posX[i] = Math.floor(Math.random()*canvas.width);
			posY[i] = 0;
			while(vitX[i] == 0 || vitX[i] == undefined) vitX[i] = Math.floor(Math.random()*vitMax - vitMax/2);
			while(vitY[i] == 0 || vitY[i] == undefined) vitY[i] = Math.floor(Math.random()*vitMax);
		}
		posX[i] += vitX[i];
		posY[i] += vitY[i];
		
		if ( posY2[i] > canvas.height - r )
		{
			posX2[i] = Math.floor(Math.random()*canvas.width);
			posY2[i] = 0;
			while(vitX2[i] == 0 || vitX2[i] == undefined) vitX2[i] = Math.floor(Math.random()*vitMax - vitMax/2);
			while(vitY2[i] == 0 || vitY2[i] == undefined) vitY2[i] = Math.floor(Math.random()*vitMax);
		}
		posX2[i] += vitX2[i];
		posY2[i] += vitY2[i];	
	}															

	for ( i=0 ; i < nbCarres ; i++)	
	{
		if (posY1[i] > canvas.height)
		{	
			posX1[i] = Math.floor(Math.random()*canvas.height);
			posY1[i] = 0;
			while(vitX1[i] == 0 || vitX1[i] == undefined) vitX1[i] = Math.random()*vitMax - vitMax/2;
			while(vitY1[i] == 0 || vitY1[i] == undefined) vitY1[i] = Math.random()*vitMax;	
			pvEnnemis[i]=100;
		}
		posX1[i] += vitX1[i];	
		posY1[i] += vitY1[i];	
	}	
	
	switch (direction){
	case Direction.Droite :
	if ( posXMob + speed < canvas.width - 70 ) posXMob += speed;
		break;

	case Direction.Gauche : 
	if (posXMob - speed > 0 -5 ) posXMob -= speed;		
		break;
	
	case Direction.Haut :
	if (posYMob - speed > 0 -5) posYMob -= speed;
		break;
	
	case Direction.Bas : 
	if (posYMob + speed < canvas.height -130) posYMob += speed;
		break;
	}	
		
	for ( l=0; l < nbLaser; l++){
		posYL[l] -= vitLaser;
		posYL1[l] -= vitLaser;
	}

	for (l = nbLaser; l<nbLaserMax; l++) {	
		posXL[l] = posXMob + 6;
		posYL[l] = posYMob - 6;
		posXL1[l] = posXMob+ rayon*2 + 10;
		posYL1[l] = posYMob - 6;
	}
	
	
	for ( i=0; i<nbCarres; i++) {

	laserE = Math.floor(Math.random()*laserCarre);


		for(l=0; l<= laserE; l++){		////////laser ennemi
			if(posXLEnnemi[l] == undefined || posYLEnnemi[l]>canvas.height+totalTime/3 + 30){
			posXLEnnemi[l] = posX1[i] +15 ;
			posYLEnnemi[l] = posY1[i] -10 +rayonCarre*2 ;
			posXL1Ennemi[l] = posX1[i] + rayonCarre*2 - 15 ;
			posYL1Ennemi[l] = posY1[i] -10 + rayonCarre*2 ;	
			}
			
		}
		
		for(l=0; l<laserEnnemiMax; l++){
			
			posYLEnnemi[l] += vitLaser2;
			posYL1Ennemi[l] += vitLaser2;
		}
	}
}

function animate()	
{
	if ( time >= canvas.height ) time = 0;	
	time++;
	totalTime++;

	avance_position();
	dessine();
	isCollision();
	commentaire();
	
	if(totalTime > limitTime)	////////////////////GAGNER/////////////////////////////////
	{
		context.drawImage(gagner, 400, 200);
		context.font= "bold 20px Verdana, Arial, serif";
		context.fillStyle="#48B";
		context.fillText("score : " +score,500, 390);
		Direction = Direction.Aucune;
		context.font= "bold 20px Verdana, Arial, serif";
		context.fillStyle="#30B";
		context.fillText("menu",560, 430);
			window.onclick= function(event){
				var x = event.clientX;							
				var y = event.clientY;
					if(x > 560 && x< 560 + 100 && y > 430 &&  y < 430 + 100) location.href = "version11_menu.html";
			}
	}
}

function dessine(){
	context.clearRect(0, 0, canvas.width, canvas.height);	
	context.drawImage(parcours, 0, canvas.height-time, canvas.width, fondVit, 0,0, canvas.width, canvas.height);

	context.drawImage(parcours4, posXMob, posYMob);	
	
	for ( l=0; l < nbLaser; l++)
	{		
		context.beginPath();
		context.drawImage(laserImg, posXL[l], posYL[l]);
		context.drawImage(laserImg, posXL1[l], posYL1[l]);
		context.closePath();
		context.fill();
	}
	
	for (l=0; l<laserEnnemiMax; l++){
		context.beginPath();
		context.drawImage(laserEnnemi, posXLEnnemi[l], posYLEnnemi[l]);
		context.drawImage(laserEnnemi, posXL1Ennemi[l], posYL1Ennemi[l]);
		context.closePath();
		context.fill();
	}
	
	for ( i=0 ; i < nbBalles ; i++)
	{
		context.beginPath();
		context.drawImage(parcours2, posX[i], posY[i]);
		context.drawImage(meteor,posX2[i], posY2[i]);
		context.closePath();
		context.fill();
	}

	for ( i=0 ; i < nbCarres ; i++)
	{
		context.beginPath();
		context.drawImage(parcours3, posX1[i], posY1[i]);
		context.closePath();
		context.fill();
	}
	
	var pvTest = Math.floor(pv/(pvmax/10));	
	context.drawImage(board, 0, 590);
	context.font= "bold 20px Verdana, Arial, serif";
	context.fillStyle="#48B";
	context.fillText("score : " +score, 800, 615);

	if(pvTest > 9){ 
	context.drawImage(imgpv10, 1050, 604);
	}
	else if(pvTest > 8){
	context.drawImage(imgpv9, 1050, 604);
	}
	else if(pvTest > 7){
	context.drawImage(imgpv8, 1050, 604);
	}
	else if(pvTest > 6){
	context.drawImage(imgpv7, 1050, 604);
	}
	else if(pvTest > 5){
	context.drawImage(imgpv6, 1050, 604);
	}
	else if(pvTest > 4){
	context.drawImage(imgpv5, 1050, 604);
	}
	else if(pvTest > 3){
	context.drawImage(imgpv4, 1050, 604);
	}
	else if(pvTest > 2){
	context.drawImage(imgpv3, 1050, 604);
	}
	else if(pvTest > 1){
	context.drawImage(imgpv2, 1050, 604);
	}
	else if(pvTest > 0 ){
	context.drawImage(imgpv1, 1050, 604);
	}
	else if(pvTest==0){
		context.drawImage(imgpv0, 1050, 604);
		context.drawImage(perdu, 400,200);
		context.fillStyle="#FF0017";
		context.fillText("menu",560, 430);
			window.onclick= function(event){
				var x = event.clientX;							
				var y = event.clientY;
					if(x > 560 && x< 560 + 100 && y > 430 &&  y < 430 + 100) location.href = "version11_menu.html";
			}
		Direction= Direction.Aucune;
		parcours = fond2;
	}
}	

function isCollision(){		
	for (i = 0; i< nbBalles; i++) {
		if(posX[i] + r >= posXMob && posX[i] - r <= posXMob + rayon*2 && posY[i] + r >= posYMob 
		&& posY[i] - r <= posYMob + rayon*2 ){
				pv--;
			}
		if(posX2[i] + r >= posXMob && posX2[i] - r <= posXMob + rayon*2 
		&& posY2[i] + r >= posYMob&& posY2[i] - r <= posYMob + rayon*2 ){
			pv--;		
		}
	}
	
	for (i = 0; i< nbCarres; i++) {
		if(posX1[i] + rayonCarre >= posXMob && posX1[i] - rayonCarre <= posXMob + rayon*2 
		&& posY1[i] + rayonCarre >= posYMob && posY1[i] - rayonCarre <= posYMob + rayon*2 ){
				pv--;
				pvEnnemis[i]--;
		}

		for (l=0; l<nbLaser; l++){
			if(posXL[l] >=  posX1[i] && posXL[l] <= posX1[i] + rayonCarre*2 && posYL[l] >= posY1[i] && posYL[l] <= posY1[i] + rayonCarre*2 ){
				score+=10;
				pvEnnemis[i]--;	
				if(posYL[l] <= posY1[i]+20) posXL[l] = -300;
			} 
			
			if(posXL1[l] >=  posX1[i] && posXL1[l] <= posX1[i]+ rayonCarre*2 && posYL1[l] >= posY1[i] && posYL1[l] <= posY1[i]+ rayonCarre*2 ){
				score+=10;
				pvEnnemis[i]--;
				if(posYL1[l] <= posY1[i]+20) posXL1[l] = -300;
			}
			
			if(pvEnnemis[i]<80)posX1[i] = -300;
		}
	}
	
	for(i=0; i<laserEnnemiMax; i++){
		if(posXLEnnemi[i] >= posXMob && posXLEnnemi[i] <= posXMob + rayon*2 && posYLEnnemi[i] >= posYMob && posYLEnnemi[i] <= posYMob + rayon*2){
			pv--;
		}
		if(posXL1Ennemi[i] >= posXMob && posXL1Ennemi[i] <= posXMob + rayon*2 && posYL1Ennemi[i] >= posYMob && posYL1Ennemi[i] <= posYMob + rayon*2){
			pv--;
		}
	}	
}	
	
function commentaire(){
	var pvTest = Math.floor(pv/(pvmax/10));	
	if(pvTest>9){
		context.font= "28px Verdana, Arial, serif";
		context.fillStyle='#990000';
		context.fillText("On nous attaque!",387, 630);
	}
	else if(pvTest<5) {
		context.font= "28px Verdana, Arial, serif";
		context.fillStyle='#990000';
		context.fillText("D a n g e r !",417, 630);
	}	
}