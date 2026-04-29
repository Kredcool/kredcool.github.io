# **Etali Stickers Explanation**

**Last Program Updated:** (auto-filled by GitHub Actions)
<br>
**Last Explanation Update:** 4/29/2026

## **Introduction**

This was made for a Cedh [Etali list](https://moxfield.com/decks/-vh9obBmN0SHxNq80O4mIA). This list runs [\_\_\_\_\_\_\_\_ Goblin](https://scryfall.com/card/unf/107/________-goblin) which requires stickers. Instead of having another deck to lose all of the stickers have been digitized and are randomly selected from. This explanation will **only** explain how it works and not the display.

## **Code Explanations**

[**Whole File**](../src/pages/Etali.jsx)

### **Imports**

---

```javascript
import React from "react";
import "./Etali.css";
```

All that is happening here is importing stuff for display.

### **The Stickers themselves**

---

Lines: 4-16

```javascript
// stickers
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
```

This section doesn't have much going on, it is just the names of the sticker cards. These are statistically the best as of 4/26/2026. Each line is a individual sticker.

### **Counting the Vowels**

---

Lines: 18-23

```javascript
// count the vowels of the given letter
function countVowels(s) {
  const vowelRegex = /([aeiouy])(?!.*\1)/gi;
  const matches = s.match(vowelRegex);
  return matches ? matches.length : 0;
}
```

The purpose of this function is to count all non-repeating vowels. The constant `vowelRegex` seems like junk however, `/([aeiouy])(?!.*\1)/gi` is a Regex expression which counts **only** the first time a vowel appears. This is needed because the `match` function in javascript needs a Regex expression to work. `vowelRegex` is used with `match` on the given string. Then returns the number of vowels found if matches found anything, otherwise it returns zero.

### **Getting Stickers**

Lines: 25-83

This Block is a lot so it will be stepped through bit by bit. If you'd like to see this whole block, it is provided in the dropdown below.

<details>
<summary>Whole Code Block</summary>
<br>

```javascript
function checkSet() {
  // set up temp sets
  let tempSet = [...wordSets]; //create a shallow ref meaning no overwrite
  // add 3 sets randomly to chosen
  //            make array of len 3         fill with 3 random splices of tempSet                [0] bc splice returns array
  let chosen = Array.from(
    { length: 3 },
    () => tempSet.splice(Math.floor(Math.random() * tempSet.length), 1)[0],
  )
    //               sort by max number of vowels. if b has higher max vowels it should go before a
    .sort(
      (a, b) =>
        Math.max(...b.map((s) => countVowels(s))) -
        Math.max(...a.map((s) => countVowels(s))),
    );

  let maxWord = chosen[0].toSorted(
    (a, b) => countVowels(b) - countVowels(a),
  )[0];
  let maxCount = countVowels(maxWord);

  // display stickers chosen and biggest
  const results = document.getElementById("results");
  results.innerHTML = ""; // empty #results

  chosen.forEach((set) => {
    // create card for each set of words
    let card = document.createElement("div");
    card.classList.add("card");

    set.forEach((part) => {
      // create div for each word
      let word = document.createElement("div");

      // display countVowels() for each word
      let number = document.createElement("div");
      number.classList.add("number");
      if (countVowels(part) == maxCount) word.classList.add("max"); // add class on largest words
      number.textContent = countVowels(part);
      word.appendChild(number);

      let text = document.createElement("div");
      text.classList.add("text");

      Array.from(part).forEach((letter) => {
        // split each character into a span for coloring
        let char = document.createElement("span");
        char.textContent = letter;
        // add class to letter if it's a vowel
        if (countVowels(letter)) char.classList.add(letter.toLowerCase());
        text.appendChild(char);
      });
      word.appendChild(text);
      card.appendChild(word);
    });

    results.appendChild(card);
  });
}
```

</details>

#### **Create A Sticker Sheet**

Lines: 26-27

```javascript
// set up temp sets
let tempSet = [...wordSets]; //create a shallow ref meaning no overwrite
```

This bit is pretty heavily commented so this is just beating a horse more to death but this creates a sheet of stickers that we can modify without overwriting the original sheet.

#### Pick Three random and count the vowels

Lines 28-39

```javascript
// add 3 sets randomly to chosen
// make array of len 3 and fill with 3 random splices of tempSet[0] bc splice returns array
let chosen = Array.from(
  { length: 3 },
  () => tempSet.splice(Math.floor(Math.random() * tempSet.length), 1)[0],
)
  // sort by max number of vowels. if b has higher max vowels it should go before a
  .sort(
    (a, b) =>
      Math.max(...b.map((s) => countVowels(s))) -
      Math.max(...a.map((s) => countVowels(s))),
  );
```
