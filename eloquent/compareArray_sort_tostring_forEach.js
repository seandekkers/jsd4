function comp(array1, array2){
  if(array1 != null && array1 != null){
  var array3 = [];
  function sortA(a, b) {return a - b;}
  function pushA(square) {return square * square}
/*array1.sort(sortA).forEach(function(square){
  array3.push(square * square);
  }); */
  array1.sort(sortA).forEach(pushA);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  if(array3.toString() === array2.toString()){
  	return true;
  }
  else{
  	return false;
  }
  }
  else{
  return false;
  }
  
  
}



var a = [24, 49, 12];
var b = [576, 2401, 144];

console.log(comp(a,b));