/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/





function handValue(hand) {
    var value = 0;
    var aces = 0;

    for (let i = 0; i < hand.length; i++) {
      if (hand[i] == "K" || hand[i] == "Q" || hand[i] == "J") {
        value += 10;
      } else if (hand[i] == "A") {
        value += 11;
      } else {
        value += Number(hand[i]);
        aces += 1;
      }
    }
    while (aces > 0) {
    if (value > 21) {
      value -= 10;
      aces -= 1;
    }
  }
  return value;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
