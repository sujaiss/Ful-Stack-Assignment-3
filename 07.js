let people = ["Greg","Mary","Devon","James"];
people.splice(2,1,"Elizabeth","Artie");
console.log(people)
let withBob = people.concat("Bob");
console.log(withBob)
for(var i=0;i<people.length;i++)
    console.log(people[i]);
people.shift();
people.pop();
people.unshift("Matt");
people.push("Saran");
for(var i=0;i<people.length;i++){
    if(people[i]=="Mary"){
        console.log(people[i]);
        break;
    }
    else{
        console.log(people[i]);
    }
}
let updatedPeople = people.slice(2,people.length);
console.log(people.indexOf("Mary"));//2
console.log(people.indexOf("Foo"));//-1
