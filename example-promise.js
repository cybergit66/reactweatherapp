// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//   setTimeout(function(){
//     resolve(79);
//     reject('City not found');
//   }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.log('promise error', err);
// });

function addPromise (a, b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      var sum = a + b;
      resolve(sum);
    } else {
      reject('You must provide two numbers');
    }
  });
}

addPromise(1, 2).then(function(sum){
  console.log('The total is ', sum);
}, function(err){
  console.log('Something went wrong: ', err);
});

addPromise('terence', 10).then(function(sum){
  console.log('The total is ', sum);
}, function(err){
  console.log('Something went wrong: ', err);
});
