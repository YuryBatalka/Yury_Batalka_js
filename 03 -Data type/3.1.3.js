
  
    var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    var current = 1;
    var longest= 1;
    var indexSequence;
    for (var i = 0; i < arr.length-1; i++) {
        if (arr [i] == arr [i + 1]) {
            current++;
        } else {
            if (longest < current) {
                longest = current;
                indexSequence = i - current + 1;
            }
            current = 1;
        }
    }
    var finalSequence = arr.slice(indexSequence, indexSequence + longest);
    console.log ('[' + finalSequence + ']');
