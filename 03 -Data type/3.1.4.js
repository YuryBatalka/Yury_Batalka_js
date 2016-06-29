var arr = [3, 2, 3, 4, 2, 2, 4];
var current = 1;
var longest = 1;
var index;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr [i + 1]) {
            current++;
        } else {
            if (longest < current) {
                longest = current;
                index = i - current + 1;
            }
            current = 1;
        }
    }
    var sequence = arr.slice(index, index + longest);
    console.log("[" + sequence + "]");
