var people = [
  {
name: "John", lastName: "Snow",
  age: 32},
    {name: "Nick", lastName: "Cannon",
  age: 31},
        {name: "Dugg", lastName: "Stanhope",
  age: 30}];

function group(people, property) {
        
            groups = {};
            people.map(function (current) {
                if (!groups[current[property]]) {
                    groups[current[property]] = new Array();
                }
                groups[current[property]].push(current);
            });
            return groups;
        }


        var groupedByFirstName = group(people, "name");
        var groupedByLastName = group(people, "lastName");
        var groupedByAge = group(people, "age");

function print(people) {
            for (var person in people) {
                console.log (people[person]);
            }
        }

console.log();
        console.log("Grouped by first name:");
        print(groupedByFirstName);
        console.log();
        console.log("Grouped by last name:");
        print(groupedByLastName);
        console.log();
        console.log("Grouped by age");
        print(groupedByAge);