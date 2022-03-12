// sem začni psát svůj program

let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let score = document.querySelector('#score');
let panacekSirka = panacek.clientWidth;
let panacekVyska = panacek.clientHeight;
let minceSirka = mince.clientWidth;
let minceVyska = mince.clientHeight;
let hudba = document.getElementById("hudba");
let fanfara = document.getElementById("zvukfanfara");
let zvukMince = document.getElementById("zvukmince");
let i = 0;
let vyhrals = false;

let height = window.innerHeight;

let width = window.innerWidth;
console.log("width: " + width + " height: " + height);
panacek.style.top = height/2 + "px";
panacek.style.left = width/2 + "px";



document.onkeydown = pohniPanackem;

mince.style.left = Math.floor(Math.random() * width) + "px";
mince.style.top = Math.floor(Math.random() * height) + "px";
console.log("left: " + mince.style.left + " top: " + mince.style.top);


function pohniPanackem(x) {

	x = x || window.event;

	hudba.play();

	if (x.keyCode == '37') {
		//leva sipka
		let vlevo = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
		if(vlevo > 0){
		panacek.style.left = vlevo - 10 + "px";
		//console.log("leva sipka");
		//console.log(window.getComputedStyle(panacek).getPropertyValue("left"));
		panacek.src = "obrazky/panacek-vlevo.png";
	}
	}

	else if(x.keyCode == '38') {
		//sipka nahoru 
		let nahore = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
		if(nahore > 0){
	//	console.log("sipka nahoru");
		panacek.src = "obrazky/panacek-nahoru.png";
		panacek.style.top = nahore - 10 + "px";
			}
		}
			else if(x.keyCode == '39') {
				//prava sipka
				let vpravo= parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
				if( vpravo < width){
			//	console.log("prava sipka");
				panacek.style.left = vpravo + 10 + "px";
				panacek.src = "obrazky/panacek-vpravo.png";
					}
				}
					else if(x.keyCode == '40') {
						//sipka dolu 
						let dole = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
						if(dole < height){
						panacek.style.top = dole + 10 + "px";
					//	console.log("sipka dolu");
						panacek.src = "obrazky/panacek.png";
							}
						}
							else if (x.keyCode != "38" || "39" || "40" || "37"){

								alert("spatna klavesa");
								}

								else if(i===5 && (x.keyCode == "38" || "39" || "40" || "37") ){
									pohniPanackem();
								}
	sezraniMince();
	vyhralsJednou();
	
}

	function sezraniMince(){

	let panacekX = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
	let panacekY = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
	let minceX = parseInt(window.getComputedStyle(mince).getPropertyValue("left"));
	let minceY = parseInt(window.getComputedStyle(mince).getPropertyValue("top"));
	
	if (!( panacekX + panacekSirka < minceX || 
		minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	
			// panacek a mince se prekryvaji
		
			mince.style.left = Math.floor(Math.random() * width) + "px";
			mince.style.top = Math.floor(Math.random() * height) + "px";
					
			zvukMince.play();
			return i = i + 1;
}
				console.log(i);
				score.innerText = i;
				
				
}


function vyhralsJednou(){
	if (!vyhrals) {
		vyhrej();
	}
	}

function vyhrej(){

if (i===5){

	fanfara.play();
	alert("Gratulujeme, vyhráváš!!!!");
	vyhrals = true;	
}
}
