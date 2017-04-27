var f=0;
var d=60;
var c=70;
var b=80;
var a=90;
var total=0;
var sum=0;

function converter(){
	var g1 = parseInt(document.getElementById("g1").value);
	document.getElementById("grade1").innerHTML=gradeSpitter(g1);
	var g2 = parseInt(document.getElementById("g2").value);
	document.getElementById("grade2").innerHTML=gradeSpitter(g2);
	var g3 = parseInt(document.getElementById("g3").value);
	document.getElementById("grade3").innerHTML=gradeSpitter(g3);
	var g4 = parseInt(document.getElementById("g4").value);
	document.getElementById("grade4").innerHTML=gradeSpitter(g4);
	var g5 = parseInt(document.getElementById("g5").value);
	document.getElementById("grade5").innerHTML=gradeSpitter(g5);
}

function gradeSpitter(input){
	
	if (typeof input=="number" && (input>=0 && input<=100)){
		if(input >= a){
			sum+=input;
			total++;
			return "Yay you got an A!";
		}
		else if(input >= b){
			sum+=input;
			total++;
			return "Woot woot you got a B!";
		}
		else if(input >= c){
			sum+=input;
			total++;
			return "You got a cool C.";
		}
		else if(input >= d){
			sum+=input;
			total++;
			return "Daaaang you got a D.";
		}
		else if(input >= f){
			sum+=input;
			total++;
			return "Sorry, you got an F. :/";
		}
	}
	else {
		return "That is not a valid entry, please try again.";
	}
}

function average(){
	let averageGrade = Math.round((((sum/total)/20)-1)*100)/100;

	document.getElementById("gpa").innerHTML = 'Your GPA is: ' + averageGrade;
}