var people = [
  {
name: "John", surname: "Snow",
  age: 32},
    {name: "Nick", surname: "Cannon",
  age: 31},
        {name: "Dugg", surname: "Stanhope",
  age: 30}];

 function find(people) {
            var youngest = people[0];
            for (var i = 1; i < people.length; i++) {
                if (people[i].age < youngest.age) {
                    youngest = people[i];
                }
            }
            console.log (youngest);
            return;
        }
        find(people);
        