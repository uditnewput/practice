// ALL GLOBAL VARIABLES.
var week=["mon","tue","wed","thu","fri","sat","sun"];
var monthLeep=[31,29,31,30,31,30,31,31,30,31,30,31];
var monthNormal=[31,28,31,30,31,30,31,31,30,31,30,31];
var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
var days;

// On change of month select input.
$("#month").change(function(){
	$("#show").show();
	var yyyy = $("#year").val();
	var mm = $("#month").val();
	days=0;
	yearDays(yyyy);
	monthDays(yyyy,mm);
	getDay();
	calDay(mm,yyyy);
});

// On change of year select input.
$("#year").change(function(){
	$("#show").show();
	var yyyy = $("#year").val();
	var mm = $("#month").val();
	days=0;
	yearDays(yyyy);
	monthDays(yyyy,mm);
	getDay();
	calDay(mm,yyyy);
});


// Counting days in previous years.
function yearDays(y){
	for(let x = 2015 ; x <= y-1 ; x++){
		if ((x % 4 == 0) && (x % 100 != 0) || (x % 400 == 0)) {
			days = days + 366;
		} else {
			days = days + 365;
		}
	}
}

// Counting days in previous months
function monthDays(y,m){
	if ((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) {
		for(let x = 0 ; x <= m-2 ; x++){
			days = days + monthLeep[x];
		}
	} else {
		for(let x = 0 ; x <= m-2 ; x++){
			days = days + monthNormal[x];
		}
	}
}

// Day count till selected month (till 1st day of month) and then calculating day (e.g. monday tuesday ....).
function getDay(){
	days = days + 1;
	days = days % 7;
	days = days + 2;
	if(days>6){
		days = days - 7;
	}
}

// Setting dates according to day in the calendar.
function calDay(m,yy){
	var str = "";
	var monthDays = parseInt(m)-1;
	var startDay = week[days];

	// Leaving space before the 1st day of every month. (Starting our date string).
	switch(startDay){
		case "mon":
			str = str + "<tr>";
			break;

		case "tue":
			str = str + "<tr><td></td>";
			break;

		case "wed":
			str = str + "<tr><td></td><td></td>";
			break;

		case "thu":
			str = str + "<tr><td></td><td></td><td></td>";
			break;

		case "fri":
			str = str + "<tr><td></td><td></td><td></td><td></td>";
			break;

		case "sat":
			str = str + "<tr><td></td><td></td><td></td><td></td><td></td>";
			break;

		case "sun":
			str = str + "<tr><td></td><td></td><td></td><td></td><td></td><td></td>";
			break;
	}

	var y;
	var monthList={}; //Making a full list of all dates in a month corresponding to it's day.


	if ((yy % 4 == 0) && (yy % 100 != 0) || (yy % 400 == 0)) {
		//Making a full list of all dates in a month corresponding to it's day.(FOR LEEP YEAR)
		for(let x=1;x<monthLeep[monthDays];x++){
			monthList[x]=week[days];
			days++;
			if(days>6){
				days = days -7;
			}
		}
	} else {
		//Making a full list of all dates in a month corresponding to it's day.(FOR NORMAL YEAR)
		for(let x=1;x<monthNormal[monthDays];x++){
			monthList[x]=week[days];
			days++;
			if(days>6){
				days = days -7;
			}
		}
	}


	// Making string to insert in table ROWS and table COLUMNS according to leep year and breaking on SUNDAYS.
	if ((yy % 4 == 0) && (yy % 100 != 0) || (yy % 400 == 0)) {
		for(let x=1;x<=monthLeep[monthDays];x++){

			if(monthList[x]=="sun"){
				str = str + "<td onclick='dateClick(this)' id='date" + x + "'><button class='btn btn-sm btn-custom'>" + x + "</button></td></tr><tr>";
			}else{
				str = str + "<td onclick='dateClick(this)' id='date" + x + "'><button class='btn btn-sm btn-custom'>" + x + "</button></td>";
			}
		}
	} else {
		for(let x=1;x<=monthNormal[monthDays];x++){

			if(monthList[x]=="sun"){
				str = str + "<td onclick='dateClick(this)' id='date" + x + "'><button class='btn btn-sm btn-custom'>" + x + "</button></td></tr><tr>";
			}else{
				str = str + "<td onclick='dateClick(this)' id='date" + x + "'><button class='btn btn-sm btn-custom'>" + x + "</button></td>";
			}
		}
	}

	var str2 = "<strong>"+monthName[--m]+"</strong>, <strong>"+yy +"</strong>"; // Making string show month and year in table CAPTION.

	str = str + "</tr>";	//Ending our dates string.
	$("#cal").html(str);	// Inserting string into table.
	$("#mmyyyy").html(str2); // To show month and year in table CAPTION.
}


// Handling button clicks here (START).
$("#btn1").on("click",function(){
	let cval=$("#month").val();
	if(cval==1){
	}else{
	cval = parseInt(cval) - 1;
	$("#month").val(cval).change();
	}
});

$("#btn2").on("click",function(){
	let cval=$("#month").val();
	if(cval==12){
	}else{
	cval = parseInt(cval) + 1;
	$("#month").val(cval).change();
	}
});


$("#btn3").on("click",function(){
	let cval=$("#year").val();
	if(cval==2015){
	}else{
	cval = parseInt(cval) - 1;
	$("#year").val(cval).change();
	}
});

$("#btn4").on("click",function(){
	let cval=$("#year").val();
	if(cval==2020){
	}else{
	cval = parseInt(cval) + 1;
	$("#year").val(cval).change();
	}
});
// Handling button clicks here (END).


// To show which date is clicked/selected.
function dateClick(a){
	var yyyy = $("#year").val();
	var mm = $("#month").val();
	mm--;
	let str3= "You selected <strong>"+ monthName[mm] + " " + a.innerText+"<sup>th</sup>, " + yyyy + "</strong>";
	$("#show").hide();
	$("#calendar").html(str3).show();
}
