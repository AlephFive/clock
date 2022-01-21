var hour_size;

function setup() {
	createCanvas(windowHeight - 15,windowHeight - 15); // make an HTML canvas element width x height pixels
	hour_size = windowHeight/6;
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);

	



	rect(30, 20, 55, 55);

	for(let h = 0; h < hour()+1; h++){
		let rem = h % 4;
		let hei = Math.floor(h/4);

		let x = rem* hour_size;
		let y = windowHeight-hour_size - hei * hour_size
		let sq_size = hour_size-20;

		


		if(h == hour()){
			rect(x , y, sq_size, sq_size*(minute()/60))
		}
		else{
			square(x , y, sq_size)
		}
		
		//drawHour(x, y, minute(), Math.floor (sq_size/8 -10))
	}
	//draw hour



	//subdivide

	//hours: 4*6
	//minutes: 60 = 6*10
	//seconds: 60 = 6*10
}

/*
function drawHour(orig_x, orig_y, num_mins, len_per_sq){
	for(let m = 0; m < num_mins; m++){
		let rem = m % 8;
		let hei = Math.floor(m/8);

		square(orig_x + rem*len_per_sq, orig_y + hei*len_per_sq, len_per_sq)
	}
}
*/
