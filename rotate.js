let rotate = function(array, num) {
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let element = array.pop();
      array.unshift(element);
    }
  } else {
    for (let i = 0; i < -(num); i++) {
      let element = array.shift();
      array.push(element)
    }
  }
};


let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
