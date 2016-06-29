var text = 'Text text text';
        console.log (text);
        function search(text, word, Sensitive) {
        var Sensitive = Sensitive || false;
        var words = 0;
            if (Sensitive) {
                var index = text.indexOf(word);
                while (index >= 0) {
                    words++;
                    index = text.indexOf(word, index+1);
                }
            } else {
                var wordFind = text.split(word);
                for (var one in wordFind) {
                    words++;
                }
            }
            return words;
        }
        console.log ('Search for word "this"');
        console.log ('case insensitive: ' + search(text,"text") );
        console.log ('case sensitive: ' + search(text, "text", true) );