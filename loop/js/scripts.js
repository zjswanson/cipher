
suits = ["clubs", "spades", "hearts", "diamonds"];
cards = ["ace", "1","2","3","4","5","6","7","8","9","10","Jack", "Queen","King"]
var deck = [];

suits.forEach(function(suit) {
	cards.forEach(function(card){
  deck.push(card+" of "+suit);
  });
});

$(function() {
console.log(deck);

  deck.forEach(function(entry) {
    $("#deckList").append("<li>" +entry +"</li>");
  });

});


// $("#deckList").append("<li>Hi</li>");
