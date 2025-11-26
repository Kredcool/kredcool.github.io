const wordSets = [
  ["Ancestral", "Hot Dog", "Minotaur"],
  ["Eldrazi", "Guacamole", "Tightrope"],
  ["Misunderstood", "Trapeze", "Elf"],
  ["Narrow-Minded", "Baloney", "Fireworks"],
  ["Phyrexian", "Midway", "Bamaboozle"],
  ["Playable", "Delusionary", "Hydra"],
  ["Trained", "Blessed", "Mind"],
  ["Unassuming", "Gelationous", "Serpent"],
  ["Unglued", "pea-brained", "dinosaur"],
  ["unsanctioned", "ancient", "juggler"],
];

function countVowels(s) {
  const vowelRegex = /([aeiouy])(?!.*\1)/gi;
  const matches = s.match(vowelRegex);
  return matches ? matches.length : 0;
}

function checkSet() {
  // set up temp sets
  let tempSet = [...wordSets]; //create a shallow ref meaning no overwrite
  // add 3 sets randomly to chosen
  //            make array of len 3         fill with 3 random splices of tempSet                [0] bc splice returns array
  let chosen = Array.from({length:3}, () => tempSet.splice(Math.floor(Math.random() * tempSet.length), 1)[0])
  //               sort by max number of vowels. if b has higher max vowels it should go before a
                    .sort((a,b) => Math.max(...b.map(s => countVowels(s))) - Math.max(...a.map(s => countVowels(s))));
  

  let maxWord = chosen[0].toSorted((a,b) => countVowels(b)-countVowels(a))[0];
  let maxCount = countVowels(maxWord);

  // display stickers chosen and biggest
  const results = document.getElementById("results");
  results.innerHTML = ''; // empty #results

  chosen.forEach(set => {
    // create card for each set of words
    let card = document.createElement('div');
    card.classList.add("card");

    set.forEach(part => {
      // create div for each word
      let word = document.createElement('div');

      // display countVowels() for each word
      let number = document.createElement('div');
      number.classList.add("number");
      if (countVowels(part) == maxCount) word.classList.add("max"); // add class on largest words
      number.textContent = countVowels(part);
      word.appendChild(number);

      let text = document.createElement('div');
      text.classList.add("text");

      Array.from(part).forEach(letter => {
        // split each character into a span for coloring
        let char = document.createElement('span');
        char.textContent = letter;
        // add class to letter if it's a vowel
        if (countVowels(letter)) char.classList.add(letter.toLowerCase());
        text.appendChild(char);
      });
      word.appendChild(text);
      card.appendChild(word);
    });

    results.appendChild(card);
  })
}
