var a = 123;
    b = a + "";
function reverse(number) {
            var rev ='';
            for (var i = number.length-1; i >= 0; i--) {
                rev += number[i];
            }
            return rev;
        }
console.log (reverse(b));