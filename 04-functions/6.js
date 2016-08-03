
var param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";
var param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.";
var result = function parts (a,b) {
	var arr = [];
	var r1=a.substring(a.lastIndexOf(":")+2,a.lastIndexOf("."));
	var r2=b.substring(b.lastIndexOf(":")+2,b.lastIndexOf("."));
	arr.push (r1,r2);
	return arr;
	};
console.log (result(param1,param2));