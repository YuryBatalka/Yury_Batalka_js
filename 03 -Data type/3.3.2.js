function remove() {
            var array = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1];
            var element = 1;
            console.log ("Array: " + array);
            array.remove(element);
            console.log ("Result: " + array);
        }
        Array.prototype.remove = function (element) {
            index = this.indexOf(element);
            while (index >= 0) {
                this.splice(index, 1);
                index = this.indexOf(element);
            }
        }
console.log (remove());
