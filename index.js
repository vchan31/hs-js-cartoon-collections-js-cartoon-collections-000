function dwarfRollCall(dwarves) {
var numberedDwarves = [];

for (let i = 0; i < dwarves.length; i++ ) 
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
    
   }
  return 'no cheese!'
}
