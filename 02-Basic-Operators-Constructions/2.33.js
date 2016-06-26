//прямоугольный треугольник
var line=5, d = "*";
console.log (d);
for (var i = 0; i<line; i++){
	d += "***";
	console.log (d);
}

//прямоугольник
{var line=5, d = "**********";
console.log ("прямоугольник");
for (var i = 0; i<line; i++)
{for (var l = 0; l<i; l++)
console.log (d);
}
}


// равносторонний треугольник
console.log ("равносторонний треугольник");
var line=6, d = "*";
for (var i = 0; i<line; i++){
	d += "*";
	console.log (d);
}


var line=6, d = "*********";
for (var i = 0; i<line; i++){
	d = d.slice (0,-1);
	console.log (d);
}




console.log ("Ромб");
var line=5, d = "*";
console.log (d);
for (var i = 0; i<line; i++){
	d += "***";
	console.log (d);
}

var sp = '   ';
d = d.slice(0, 3 * i);
for (i = 5; i>0; i--){
	d = d.slice(0, 3 * i);
	console.log (sp + d);
	sp += '   ';
}
