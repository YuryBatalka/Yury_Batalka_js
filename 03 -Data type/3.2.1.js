var a = 123;
    b = a + "";
    function numbers(numberConverted) {
        var last = parseInt(numberConverted.charAt(numberConverted.length - 1));
        switch (last) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 0:
                return "zero";
            default:
                return "wrong number";
        }
    }

console.log (numbers (b));
