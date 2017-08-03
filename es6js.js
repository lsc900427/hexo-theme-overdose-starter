var array = [];

for(var i = 0; i < 3; i++) {
  array.push(function() {console.log(i);});
}

for(var j = 0; j < 3; j++) {
  array[j]();
}