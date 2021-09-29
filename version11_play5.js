var canvas;
var context;
var time = 0;
var perdu = new Image();
	perdu.src = "perdu.png";
var gagner = new Image();
	gagner.src='gagner.png';
var i = 0;	
var totalTime = 0;
var limitTime = 50*120;
var score = 0;

///////////FOND ECRAN////////////////
var parcours = new Image();	
    parcours.src = "p.png";	
var board = new Image();
	board.src='board.png';		
var fondVit = 360;	

/////////////////////BALLES////////////////////
var posX = [];				
var posY = [];
var vitX = [];
var vitY = [];
var vitY2= [];
var vitX2=[];
var posX2=[];
var posY2=[];
var nbBalles = 5;	
var r = 15; 
var parcours2 = new Image();
	parcours2.src = "meteorites2.png";	
var meteor = new Image();
	meteor.src = "dautre_meteorites.png";	
var vitMax = 3;	

/////////////////////BOSS/////////////////////
var posX1 = 200;
var posY1 = 0;
var nbCarres = 6;
var vitX1 = 1;
var rayonCarre = 700/2;
var rayonCarre2 = 300 - 100;
var parcours3 = new Image();
	parcours3.src = "boss.png";		
var pvEnnemis = 90000;	
	
/////////////////////MOB//////////////////////////
var parcours4 = new Image();
	parcours4.src = "vaisseau_ISN2.png";
var speed = 8;
var direction;	
var posXMob = 500;
var posYMob = 500;	
var pvmax = 200;
var pv= pvmax;
var rayon = 40;

////////////////////LASERS///////////////////////
var laserImg = new Image();
	laserImg.src = "laserV2.png";
var vitLaser = 4;
var posXL = [];
var posYL = [];
var posXL1 = [];
var posYL1 = [];
var l =0;
var nbLaser = 0;
var laserEnnemiMax = 10;

var laserEnnemi = new Image();
	laserEnnemi.src="projectileboss.png";
var posXLEnnemi = [];
var posYLEnnemi = [];
var posXL1Ennemi = [];
var posYL1Ennemi = [];
var laserEnnemiMax = 5;
var laserE = 0;
var vitLaser2 = 3;
var vitLaser2_2 = 1;
var laserEX=[];
var laserEY=[];

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
	var soundstrack1 = document.getElementById("univers");
	soundstrack1.play();
	
	direction = Direction.Aucune;
	
	for ( i=0 ; i < nbBalles ; i++)	
	{
		posX[i] = Math.floor(Math.random()*canvas.width);
		posY[i] = 0;
		while(vitX[i] == 0 || vitX[i] == undefined) vitX[i] = Math.random()*vitMax - vitMax/2;	
		while(vitY[i] == 0 || vitY[i] == undefined) vitY[i] = Math.random()*vitMax;	
		
		posX2[i] = Math.floor(Math.random()*canvas.width);
		posY2[i] = 0;
		while(vitX2[i] == 0 || vitX2[i] == undefined) vitX2[i] = Math.floor(Math.random()*vitMax - vitMax/2);
		while(vitY2[i] == 0 || vitY2[i] == undefined) vitY2[i] = Math.floor(Math.random()*vitMax);
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
		
	case 90:
		nbLaser++;
		break;
	}	
}

window.onkeyup=function(event)	{
		switch (event.keyCode)
	{
	case 39 : 
		direction = Direction.Aucune;	
		break;

	case 37 : 
		direction = Direction.Aucune;	
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
		if ( posY[i] > canvas.height + 15){
			posX[i] = Math.floor(Math.random()*canvas.width);
			posY[i] = 0;
			while(vitX[i] == 0 || vitX[i] == undefined) vitX[i] = Math.random()*vitMax - vitMax/2;
			while(vitY[i] == 0 || vitY[i] == undefined) vitY[i] = Math.random()*vitMax;
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
		if(posYL[l] < 0) posYL[l] = undefined;
		posYL[l] -= vitLaser;
		posYL1[l] -= vitLaser;		
	}
	
	for(l=nbLaser; l <= nbLaser; l++) {
		posXL[l] = posXMob + 6;
		posYL[l] = posYMob - 6;
		posXL1[l] = posXMob+ rayon*2 - 10;
		posYL1[l] = posYMob - 6;
	}
	
	
	laserE = 1;

		for(l=0; l<= laserE; l++){		////////laser ennemi
			if(posXLEnnemi[l] == undefined || posYLEnnemi[l]>canvas.height+totalTime/3 + 30){
			posXLEnnemi[l] = posX1 + 160 ;
			posYLEnnemi[l] = posY1  +rayonCarre -161 ;
			posXL1Ennemi[l] = posX1 + rayonCarre +185;
			posYL1Ennemi[l] = posY1  + rayonCarre -161 ;	
			}				
		}
		
		for(l=0; l<laserEnnemiMax; l++){
			posYLEnnemi[l] += vitLaser2;
			posXLEnnemi[l] += vitLaser2_2;
			posYL1Ennemi[l] += vitLaser2;
			posXL1Ennemi[l] -= vitLaser2_2;
		}
		posX1+=vitX1;
		
		if(posX1 < 0 ) vitX1 = - vitX1;
		else if(posX1 > canvas.width - rayonCarre*2) vitX1 = -vitX1;
}

function animate()	{		
	if ( time >= canvas.height ) time = 0;
	time++;	
	totalTime++;

	avance_position();
	dessine();
	isCollision();
	commentaire();
	
	if(pvEnnemis<4)	//////////////////////GAGNER/////////////////////////////////
	{
		context.drawImage(gagner, 400, 200);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle="00";
		context.fillText("score : " +score,500, 360);
		Direction = Direction.Aucune;
		context.fillText("menu",560, 430);
			window.onclick= function(event){
				var x = event.clientX;							
				var y = event.clientY;
					if(x > 560 && x< 560 + 100 && y > 430 &&  y < 430 + 100) location.href = "version11_menu.html";
			}
	}
}

function dessine()
{
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
	
		context.beginPath();
		context.drawImage(parcours3, posX1, posY1);
		context.closePath();
		context.fill();

context.drawImage(board, 0, 590);
	context.font= "bold 20px Verdana, Arial, serif";
	context.fillStyle="#48B";
	context.fillText("score : " +score, 800, 615);

var pvTest = Math.floor(pv/(pvmax/10));

	if(pvTest > 9)
	{ 
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
		Direction= Direction.Aucune;
		parcours = fond2;
	}
	
}	

function isCollision()
{							
	for (i = 0; i< nbBalles; i++) {
		if(posX[i] + r >= posXMob && posX[i] <= posXMob + rayon*2& posY[i] + r >= posYMob && posY[i] <= posYMob + rayon*2 ){
				pv--;
		}
		if(posX2[i] + r >= posXMob && posX2[i] - r <= posXMob + rayon*2 
		&& posY2[i] + r >= posYMob&& posY2[i] - r <= posYMob + rayon*2 ){
			pv--;
		}
	}
	if(posX1+ rayonCarre*2>=posXMob && posX1-rayonCarre*2 <= posXMob+rayon*2 && posY1 >= posYMob&&posY1-rayonCarre2 <= posYMob+rayon*2){
			pv--;
			pvEnnemis--;	
		}
	else if(posXMob > posX1 && posXMob < posX1+rayonCarre + 50 && posYMob > posY1 + rayonCarre2 && posYMob < posY1 + rayonCarre - 200){
		pv--;
		pvEnnemis--;
	}
	
	for (l=0; l<nbLaser; l++){
		if(posXL[l] >= posX1+310 && posXL[l] <= posX1+rayonCarre+100 && posYL[l] >= posY1 && posYL[l] <= posY1+rayonCarre -150){
			score+=10;
			pvEnnemis--;
		if(posYL[l] >= posY1+400) posXL[l] = -300;
		} 
		if(posXL1[l] >=  posX1 +310 && posXL1[l] <= posX1+ rayonCarre +100 && posYL1[l] >= posY1 && posYL1[l] <= posY1+ rayonCarre-150 ){
			score+=10;
			pvEnnemis--;
			if(posYL1[l] >= posY1+400) posXL1[l] = -300;
		}
		if(pvEnnemis<4)posX1 = -1300;
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
