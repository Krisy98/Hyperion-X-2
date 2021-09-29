var canvas;
var context;
var fond = new Image();
	fond.src = "vaisseau.jpg";
var imagePlay = new Image();
	imagePlay.src = "play.png";
var cadre= new Image();
	cadre.src = "cadre.png";	
var cadre2 = new Image();
	cadre2.src = "cadre2.png";
	
var niv1 = new Image();
	niv1.src = "niv1.png";
var niv1_2 = new Image();
	niv1_2.src = "niv1_1_.png";

var niv2 = new Image();
	niv2.src = "niv2.png";
var niv2_2 = new Image();
	niv2_2.src = "niv2_1_.png";
	
var niv3 = new Image();
	niv3.src="niv3.png";
var niv3_2 = new Image();
	niv3_2.src= "niv3_1.png";
	
var niv4 = new Image();
	niv4.src="bonus_level.png";
var niv4_2 = new Image();
	niv4_2.src= "niv4_1.png";
	
var niv5 = new Image();
	niv5.src="titre.png";
var niv5_2 = new Image();
	niv5_2.src = "ti.png";
	
var a = 0;
var b = 0;
var c = 0;	
var d=0;
var e=0;
	
window.onload = function()
{
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");  
	context.imageSmoothingEnabled = false;		//JE NE L'AVAIS PAS FAIT AVANT: C'EST MAGNIFIQUE ! #Evite le flootage des img !!!!!!!!!!
	
	var soundstrack1 = document.getElementById("soundstrack1");
	soundstrack1.play();
	
	context.clearRect(0, 0, canvas.width, canvas.height);   
	context.drawImage(fond, 0,0, canvas.width, canvas.height);
	context.drawImage(imagePlay, 480, 250);
	context.drawImage(niv1, 20, 500);
	context.drawImage(niv2, 220, 500);
	context.drawImage(niv3, 420, 500);
	context.drawImage(niv4, 620, 500);
	context.drawImage(niv5, 820, 500);
	
	context.font= "15px Verdana, Arial, serif";
	context.fillStyle='#ffffff';
	context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
}
window.onmousemove = function(event)        
{  
	var x = event.clientX;							
	var y = event.clientY;		
	
	if ( x > 480 && x < 480 + imagePlay.width && y > 250 && y < 250 + imagePlay.height ){	
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);   
		context.drawImage(imagePlay, 470, 250, 270, 55);    //change valeurs IMAGEPLAY
		context.drawImage(niv1, 20, 500);  
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500);		
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
		if(a>0) {
			context.drawImage(cadre2, 20, 497);}
		else if (b>0){
			context.drawImage(cadre2, 220, 497);}
		else if (c>0) context.drawImage(cadre2, 420, 497);
		else if (d>0) context.drawImage(cadre2, 620, 497);
		else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	else if (x > 22 && x < 29 + niv1.width && y > 507 && y < 510 + niv1.height)
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);   
		context.drawImage(imagePlay, 480, 250);    
		context.drawImage(niv1_2, 15,500);		
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if (a > 0){
			context.drawImage(cadre, 15, 500);}		//ici 500 car cadre plus grand
			else if (b > 0){
			context.drawImage(cadre2, 220, 497);}
			else if (c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	else if ( x> 222 && x< 229 +niv2.width && y >507 && y< 510 + niv2.height)
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2_2, 220, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if (a > 0){
			context.drawImage(cadre2, 20, 497);}	
			else if (b > 0){
			context.drawImage(cadre, 220, 500);}
			else if (c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	else if (x>420 && x< 420 + niv3.width && y > 500 && y < 500 + niv3.height){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3_2, 415, 500); 
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if (a > 0){
			context.drawImage(cadre2, 20, 497);}	
			else if (b > 0){
			context.drawImage(cadre2, 220, 497);}
			else if (c>0) context.drawImage(cadre, 415, 500);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	else if(x>620 && x< 620 + niv4.width && y> 500 && y<500 + niv4.height){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500); 
		context.drawImage(niv4_2, 615, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if (a > 0){
			context.drawImage(cadre2, 20, 497);}	
			else if (b > 0){
			context.drawImage(cadre2, 220, 497);}
			else if (c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre, 615, 500);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	else if (x>820 && x< 820 + niv5.width && y> 500 && y<500 + niv5.height){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500); 
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5_2, 815, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if (a > 0){
			context.drawImage(cadre2, 20, 497);}	
			else if (b > 0){
			context.drawImage(cadre2, 220, 497);}
			else if (c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre, 815, 500);
	}
	else
	{	
		context.clearRect(0, 0, canvas.width, canvas.height);   
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
			if(a>0) {
			context.drawImage(cadre2, 20, 497);}
			else if (b>0){
			context.drawImage(cadre2, 220, 497);}
			else if(c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}

window.onclick = function(event){	
	if (x > 22 && x < 29 + niv1.width && y > 507 && y < 500 + niv1.height){
		a++;
		b=0;
		c=0;
		d=0;
		context.clearRect(0, 0, canvas.width, canvas.height);   
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1_2, 15,500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.drawImage(cadre, 15, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
	}
	else if ( x> 222 && x< 229 +niv2.width && y >507 && y< 500 + niv2.height){
		a=0;
		b++;
		c=0;
		d=0;
		context.clearRect(0, 0, canvas.width, canvas.height);   
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2_2, 215, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.drawImage(cadre, 215, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
	}
	else if (x>420 && x< 420 + niv3.width && y > 500 && y < 500 + niv3.height){
		a=0;
		b=0;
		c++;
		d=0;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3_2, 415, 500);
		context.drawImage(niv4, 620, 500);	
		context.drawImage(niv5, 820, 500);		
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
		context.drawImage(cadre, 415, 500);
	}
	else if(x>620 && x< 620 + niv4.width && y> 500 && y<500 + niv4.height){
		a=0;
		b=0;
		c=0;
		d++;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500); 
		context.drawImage(niv4_2, 615, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
		context.drawImage(cadre, 615, 500);
	}
	else if(x>820 && x< 820 + niv5.width && y> 500 && y<500 + niv5.height){
		a=0;
		b=0;
		c=0;
		d=0;
		e++;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500); 
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5_2, 815, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
		context.drawImage(cadre, 815, 500);
	}
	else  {
		context.clearRect(0, 0, canvas.width, canvas.height);   
		context.drawImage(fond, 0,0, canvas.width, canvas.height);
		context.drawImage(imagePlay, 480, 250);
		context.drawImage(niv1, 20, 500);
		context.drawImage(niv2, 220, 500);
		context.drawImage(niv3, 420, 500);
		context.drawImage(niv4, 620, 500);
		context.drawImage(niv5, 820, 500);
		context.font= "15px Verdana, Arial, serif";
		context.fillStyle='#ffffff';
		context.fillText("Appuyez sur les flèches pour vous deplacer et tirez avec Z, bon jeu! :)",70, 100);
		if(a>0) {
			context.drawImage(cadre2, 20, 497);}
			else if (b>0){
			context.drawImage(cadre2, 220, 497);}
			else if(c>0) context.drawImage(cadre2, 420, 497);
			else if (d>0) context.drawImage(cadre2, 620, 497);
			else if (e>0) context.drawImage(cadre2, 820, 497);
	}
	
	if ( x > 480 && x < 480 + imagePlay.width && y > 250 && y < 250 + imagePlay.height ){
		if (a > 0){
			location.href = "version11_play1.html";	
		}
		else if (b > 0){
			location.href = "version11_play2.html";
		}
		else if(c > 0){
			location.href="version11_play3.html";
		}
		else if(d >0) location.href="version11_play4.html";
		else if (e>0) location.href="version11_play5.html";
	}


}	

}
	
