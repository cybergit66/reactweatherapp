var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Terence'));

// var person = {
//   name: 'Terence',
//   greet: function(){
//     names.forEach((name) => { // the arrow function doesn't update the 'this' keyword
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

function add (a,b) {
  return a + b;
}
console.log(add(1,3));

var addNumbers = (a, b) => a + b;
console.log(addNumbers(10, 15));

var addUp = (a,b) => {
    return a + b;
};
console.log(addUp(13, 11));
