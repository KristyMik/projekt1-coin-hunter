// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector('#panacek');

	
document.onkeydown = pohniPanackem;
console.log(window.getComputedStyle(panacek).getPropertyValue("top"));
console.log(window.getComputedStyle(panacek).getPropertyValue("right"));
console.log(window.getComputedStyle(panacek).getPropertyValue("left"));
console.log(window.getComputedStyle(panacek).getPropertyValue("bottom"));
//console.log(nahore + " " + vpravo + " " + vlevo + " " + dole);

function pohniPanackem(x) {

	x = x || window.event;
	
	if(x.keyCode == '37') {
		//leva sipka
		let vlevo = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
		panacek.style.left = vlevo - 20 + "px";
		console.log("leva sipka");
		console.log(window.getComputedStyle(panacek).getPropertyValue("left"));
		panacek.src = "obrazky/panacek-vlevo.png";
	}

	else if(x.keyCode == '38') {
		//sipka nahoru 
		let nahore = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
		console.log("sipka nahoru");
		panacek.src = "obrazky/panacek-nahoru.png";
		panacek.style.top = nahore - 20 + "px";
			}

			else if(x.keyCode == '39') {
				//prava sipka
				let vpravo= parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
		    	console.log("prava sipka");
				panacek.style.left = vpravo + 20 + "px";
				panacek.src = "obrazky/panacek-vpravo.png";
					}

					else if(x.keyCode == '40') {
						//sipka dolu 
						let nahore = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
						panacek.style.top = nahore + 20 + "px";
						console.log("sipka dolu");
						panacek.src = "obrazky/panacek.png";
							}


}

