var hour_size;
var prev_minute;
var curr_day;

function setup() {

	let wh = windowHeight - 100
	createCanvas(wh*(4/6),wh); // make an HTML canvas element width x height pixels
	hour_size = height/6;
	prev_minute = minute();
	curr_day = day();
	document.title = day() + "/" + month() + "/" + year();
}

function draw() {
	background(245);
	fill(0);

	let hour_left = 24 - hour();
	//let hour_left = 24 - 0;
	let minute_left = 59 - minute();
	let second_left = 60 - second();

	if(minute() !== prev_minute){
		prev_minute = minute();
		console.log(prev_minute)

		if(day() !== curr_day){
			document.title = day() + "/" + month() + "/" + year();
		}
	}
	


	for(let h = 0; h < hour_left; h++){
		let rem = h % 4;
		let hei = Math.floor(h/4);

		let x = rem* hour_size;
		let y = height-hour_size - hei * hour_size
		let sq_size = hour_size;

		


		if(h == hour_left-1){

			if (minute_left > 0) rect(x , y + (sq_size - sq_size*((minute_left)/60) + sq_size*(1/60)), sq_size, sq_size*(minute_left/60))
			rect(x , y + (sq_size - sq_size*((minute_left)/60) ), sq_size*(second_left/60), sq_size*(1/60))
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
