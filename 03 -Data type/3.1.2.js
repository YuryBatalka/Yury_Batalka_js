var arr1 = ["a","b","c"], 
	arr2 = ["a","b","d"], 
	arrFirst,
	i=0;
while (i < 3) {
  if (arr1 [i] > arr2 [i]) 
	{arrFirst = 1;
	break }
  else if (arr2 [i] > arr1 [i]) 
  	{arrFirst = 2;
  	break }
  	i++;
  }
if (arrFirst = 1)
  {console.log ("First array is higher")}
else
	console.log ("Second array if higher");