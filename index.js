function dwarfRollCall(dwarves) {
var numberedDwarves = [];

for (let i = dwarves.length/2; i < dwarves.length; i++ ) 

{numberedDwarves.push((i+1) + '. ' + dwarves[i]);

} 

return numberedDwarves.join(" ");
}
  


function summonCaptainPlanet(planeteerCalls){
 var newList = [];
 for (let i = 0; i < planeteerCalls.length; i++) {newList.push((planeteerCalls[i].toUpperCase()) + '!');}
  return newList;
}


function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {return true} else {return false}
  }
  
  
  
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
     if (foods[i] === 'cheddar') {return 'cheddar'}
     else if (foods[i] === 'gouda') {return 'gouda'}
     else if (foods[i] === 'camembert') {return 'camembert'}
     else if (foods[i] === 'swiss') {return 'swiss'}
    
   }
  return 'no cheese!'
}


function wordsWithB (array1) {
  var list = []
  for (let i = 0; i < array1.length; i++){
    if (array1[i][0] === 'b') { list.push(array[i])}
    
  }return list
}

