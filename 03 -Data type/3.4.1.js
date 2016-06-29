function Reverse() {
        var word = "abc";
        console.log (process(word));
    }
    function process(word) {
        var rev = '';
        
        for (var letter = word.length-1; letter >= 0; letter--) {
            rev += word [letter];
        }
        return rev;
    }
Reverse ();