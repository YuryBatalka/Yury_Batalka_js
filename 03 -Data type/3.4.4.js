var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>ANYTHING</lowcase> else.";
 
        function changeText(text) {
            var result = text;
            var mixcase = /<mixcase>(.*?)<\/mixcase>/g;
            var upcase = /<upcase>(.*?)<\/upcase>/g;
            var lowcase = /<lowcase>(.*?)<\/lowcase>/g;
            result = result.replace(mixcase, function (match) {
                var i = 0;
                for (i = 0; i < match.length; i++) {
                    var upperOrLower = Math.round(Math.random());
                    switch (upperOrLower) {
                        case 0:
                            match = match.replace(match[i], match[i].toLowerCase());
                            break;
                        case 1:
                            match = match.replace(match[i], match[i].toUpperCase());
                            break;
                    }
                }
                return match;
            });
            result = result.replace(upcase, function (match) { return match.toUpperCase() });
            result = result.replace(lowcase, function (match) { console.log(match); return match.toLowerCase() });
            
            return result;
        }
        console.log (text);
        console.log (changeText(text));