{var S,V,r,h;
	var r = prompt('Радиус?', '');
	var h = prompt('Высота?', '');
	V = 3,14 * r * r * h;
	S = 2 * 3,14 * r * h + 2 * 3,14 * r * r;
	document.write ("V=", V, "; ");
	document.write ("S=", S); 
}