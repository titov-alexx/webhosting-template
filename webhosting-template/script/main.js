//Option #1

var genNumber = function(){
	var number = Math.round((Math.random() * 10));
	return number;
}

var compareWithFive = function(num){
	if (num < 5){
		return -1;
	} else if (num > 5){
		return 1;
	}else {
		return 0;
	}
}

var result = [];

for (var i=0; i<10; i++) {
	result.push(compareWithFive(genNumber()));
}


console.log(result);

//Option #2

var general = function(){
	var number = Math.round((Math.random() * 10));

	if (number < 5){
		return -1;
	} else if (number > 5){
		return 1;
	}else {
		return 0;
	}
}

var compareWithFive = function(num){
	if (num < 5){
		return -1;
	} else if (num > 5){
		return 1;
	}else {
		return 0;
	}
}

var result = [];

for (var i=0; i<10; i++) {
	result.push(general());
}


console.log(result);