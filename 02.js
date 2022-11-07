let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs','slinky', 'security blanket']

//a
cargoHold[5] = 'space tether';
console.log(cargoHold);

//b
console.log(cargoHold.pop());
console.log(cargoHold);

//c
console.log(cargoHold.shift());
console.log(cargoHold);

//d
cargoHold.unshift(1138);
cargoHold.splice(cargoHold.length,0,"20 meters");

console.log(cargoHold);

//e
console.log(`Array is ${cargoHold} and it's length is ${cargoHold.length}`);
