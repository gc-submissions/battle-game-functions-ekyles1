"use strict";

// TODO - write your code here.
"use strict";

// TODO - write your code here.
// 1.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// console.log(randomDamage());

// 2.
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  //   console.log(randNum);
  //   if (randNum === 0) {
  //     return opt1;
  //   } else {
  //     return opt2;
  //   }
  return randNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption("Andrea", "James"));

//3. 
const attackPlayer=(health)=>{ 
return (health-randomDamage);
}

//4.
const logHealth=(player, health)=>{ 
}
console.log ("player: health");

//5.
const logDeath=(winner, loser)=>{ 
}
console.log ("winner defeated loser");

//6. 
const isDead=(health)=>{ 
   if (health <=0) {
    return true

   }else{
}

//7. 
function fight (player1, player2, player1Health, player2Health){
    
}

let attacker = chooseOption(player1, player2,)
    if (attacker===player1){
        player2Health =(player2Health);

        logHealth(player2, player2Health);
        logDeath(player1, player2)
        logHealth(player1, player1Health)
    }else if{


    }

    fight ("Mitch","Adam",100,100 );


    }



