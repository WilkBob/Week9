//Declare values for each suit (JQK increase in value, A = 13)
const hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const diamonds = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const clubs = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const spades = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//add all suits to deck (modelling how a real deck comes)
const deck = [...clubs,...spades,...hearts,...diamonds];

//initialize deck to shuffle to
let shuffled = [];
console.log('shuffling...');
for(let i = 0; i < 52; i++){
    //get a random number to represent the index of a card from the deck
    let randomcard = Math.floor(Math.random() * deck.length);
    //add it to new deck
    shuffled.push(deck[randomcard]);
    //remove it from old deck
    deck.splice(randomcard,1);
    //repeat for all 52 cards
}

//declare player hands
let player1 = [];
let player2 = [];


console.log('dealing...');
for(let i = 1; i <= 52; i++){
    //give each player one of the 52 cards. 
    //Could also do this with i <= 26, and just push the top card to each array, moving the index like i did while shuffling.
    //odd iterations go to player 1, even iterations to player2 (i%2)
    if(i%2==0){player2.push(shuffled[i-1]);}
    else{player1.push(shuffled[i-1]);}
}


console.log('The War Begins');
//declare score object
let score = {
    player1: 0,
    player2: 0,
    ties: 0
}
//while either player has cards (one could work as well)
while(player1.length>0 || player2.length > 0){
    //checking the top card (last element of array)
    player1[player2.length - 1] > player2[player2.length - 1] ? //if player one's card is higher
     score.player1++ : // give them a point
     player2[player2.length - 1] > player1[player2.length - 1] ? //if its not, check if player two's is higher
      score.player2++ : score.ties++; //if it is, point to player2, if not, it was a tied hand
    player1.pop();//remove card from hand
    player2.pop();//for each player
}

//this ternary operator compares scores and displays an appropriate message
console.log(score.player1 > score.player2 ? 'Player 1 wins' : score.player2 > score.player1 ? 'Player 2 Wins!' : 'It was a draw...');
console.log(`Score
player1: ${score.player1}
player2: ${score.player2}
drawn hands: ${score.ties}`)

//That's the game folks!

