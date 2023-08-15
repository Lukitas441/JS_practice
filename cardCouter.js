function cc(cards) {
  //Corroborar que la mano es realmente valida
  if(cards.length != 5) return Error("Unvalid hand");
  /* for(let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if (i != j) if (cards[i] === cards[j]) return Error("Unvalid hand");
    }
  } */

  let count = 0
  for(let i = 0; i <= 5; i++) {
      if (typeof cards[i] != "string" && cards[i] < 7) {
        count++;
      } else if (cards[i] === 10 || typeof cards[i] === "string") {
        count--;
      }
  }

  return count + (count > 0 ? " Bet" : " Hold");
}

console.log(cc([4, 6, 2, 2, 3]))
