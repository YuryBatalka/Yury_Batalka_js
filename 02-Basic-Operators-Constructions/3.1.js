var
 mass = [1,2,3],
 summ = 0;
 for(var i = 0; i < mass.length; i=i+1)
 summ = summ + mass[i];
console.log ("сумма",summ);
 var mid = summ/mass.length;
console.log ("среднее",mid);
 var min = Math.min.apply(null, mass),
     max = Math.max.apply(null, mass);
console.log ("Мин",min,"Макс",max);
console.log ("Нечетные значения");
{for(var i = 0; i < mass.length; i=i+1)
 if (0 != mass [i]/2)
 console.log (mass [i])}

